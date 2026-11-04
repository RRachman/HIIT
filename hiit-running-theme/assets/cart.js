/**
 * HIIT Running — Shopify Ajax Cart Engine
 * Production-ready Ajax Cart conforming to Shopify Online Store 2.0 standards.
 */

(function () {
  'use strict';

  // Fallback routes if not provided by theme.liquid
  const rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
  const routes = {
    cart_url: (window.Shopify && window.Shopify.routes && window.Shopify.routes.cart_url) || rootUrl + 'cart',
    cart_add_url: (window.Shopify && window.Shopify.routes && window.Shopify.routes.cart_add_url) || rootUrl + 'cart/add.js',
    cart_change_url: (window.Shopify && window.Shopify.routes && window.Shopify.routes.cart_change_url) || rootUrl + 'cart/change.js',
    cart_update_url: (window.Shopify && window.Shopify.routes && window.Shopify.routes.cart_update_url) || rootUrl + 'cart/update.js',
    cart_js_url: rootUrl + 'cart.js'
  };

  class HIITCart {
    constructor() {
      this.cart = null;
      this.listeners = [];
      this.init();
    }

    init() {
      this.bindEvents();
      this.fetchCart();
    }

    formatMoney(cents) {
      if (typeof cents !== 'number') return '$0.00';
      return '$' + (cents / 100).toFixed(2);
    }

    async fetchCart() {
      try {
        const response = await fetch(routes.cart_js_url, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error('Failed to fetch cart');
        const cart = await response.json();
        this.cart = cart;
        this.notify(cart);
        this.updateBadge(cart.item_count);
        this.renderDrawer(cart);
        return cart;
      } catch (err) {
        console.warn('HIIT Cart fetchCart:', err);
      }
    }

    async addItem(variantId, quantity = 1, properties = {}) {
      try {
        const response = await fetch(routes.cart_add_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            id: variantId,
            quantity: quantity,
            properties: properties
          })
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.description || 'Unable to add item');
        }

        const addedItem = await response.json();
        await this.fetchCart();
        this.openDrawer();
        return addedItem;
      } catch (err) {
        console.error('HIIT Cart addItem error:', err);
        alert(err.message || 'Error adding item to bag');
        throw err;
      }
    }

    async changeQuantity(lineOrKey, quantity) {
      try {
        const payload = typeof lineOrKey === 'string'
          ? { id: lineOrKey, quantity: quantity }
          : { line: lineOrKey, quantity: quantity };

        const response = await fetch(routes.cart_change_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Failed to update cart quantity');
        const updatedCart = await response.json();
        this.cart = updatedCart;
        this.notify(updatedCart);
        this.updateBadge(updatedCart.item_count);
        this.renderDrawer(updatedCart);
        return updatedCart;
      } catch (err) {
        console.error('HIIT Cart changeQuantity error:', err);
        throw err;
      }
    }

    updateBadge(count) {
      const badges = document.querySelectorAll('.cart-count-badge');
      badges.forEach(badge => {
        badge.textContent = count;
        if (count > 0) {
          badge.style.display = 'flex';
        } else {
          badge.style.display = 'none';
        }
      });
    }

    renderDrawer(cart) {
      const container = document.querySelector('.cart-drawer-items');
      const subtotalEl = document.querySelector('.cart-drawer-subtotal');
      const emptyState = document.querySelector('.cart-drawer-empty');
      const filledState = document.querySelector('.cart-drawer-filled');

      if (subtotalEl) {
        subtotalEl.textContent = this.formatMoney(cart.total_price);
      }

      if (!container) return;

      if (!cart.items || cart.items.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (filledState) filledState.style.display = 'none';
        container.innerHTML = '';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';
      if (filledState) filledState.style.display = 'block';

      container.innerHTML = cart.items.map(item => `
        <div class="cart-line-item" data-key="${item.key}" style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--color-border);">
          <div style="width: 72px; height: 96px; background: var(--color-bg-secondary); flex-shrink: 0; overflow: hidden;">
            <img src="${item.featured_image ? item.featured_image.url : ''}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-weight: 700; font-size: 0.875rem; text-transform: uppercase;">${item.product_title}</div>
              ${item.variant_title ? `<div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 2px;">${item.variant_title}</div>` : ''}
              <div style="font-size: 0.875rem; font-weight: 600; margin-top: 4px;">${this.formatMoney(item.final_line_price)}</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
              <div style="display: flex; align-items: center; border: 1px solid var(--color-border); background: #fff;">
                <button type="button" class="btn-qty-minus" data-key="${item.key}" data-qty="${item.quantity - 1}" style="width: 28px; height: 28px; border: none; background: none; cursor: pointer;">-</button>
                <span style="min-width: 24px; text-align: center; font-size: 0.8125rem; font-weight: 600;">${item.quantity}</span>
                <button type="button" class="btn-qty-plus" data-key="${item.key}" data-qty="${item.quantity + 1}" style="width: 28px; height: 28px; border: none; background: none; cursor: pointer;">+</button>
              </div>
              <button type="button" class="btn-remove-line" data-key="${item.key}" style="background: none; border: none; color: var(--color-text-secondary); font-size: 0.75rem; cursor: pointer; text-decoration: underline;">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    openDrawer() {
      const drawer = document.querySelector('.cart-drawer');
      const overlay = document.querySelector('.cart-drawer-overlay');
      if (drawer) drawer.classList.add('is-active');
      if (overlay) overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    closeDrawer() {
      const drawer = document.querySelector('.cart-drawer');
      const overlay = document.querySelector('.cart-drawer-overlay');
      if (drawer) drawer.classList.remove('is-active');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    bindEvents() {
      document.addEventListener('click', (e) => {
        // Open drawer
        if (e.target.closest('[data-action="open-cart"]')) {
          e.preventDefault();
          this.openDrawer();
        }

        // Close drawer
        if (e.target.closest('[data-action="close-cart"]') || e.target.classList.contains('cart-drawer-overlay')) {
          e.preventDefault();
          this.closeDrawer();
        }

        // Drawer quantity decrement
        const btnMinus = e.target.closest('.btn-qty-minus');
        if (btnMinus) {
          const key = btnMinus.getAttribute('data-key');
          const qty = parseInt(btnMinus.getAttribute('data-qty'), 10);
          this.changeQuantity(key, Math.max(0, qty));
        }

        // Drawer quantity increment
        const btnPlus = e.target.closest('.btn-qty-plus');
        if (btnPlus) {
          const key = btnPlus.getAttribute('data-key');
          const qty = parseInt(btnPlus.getAttribute('data-qty'), 10);
          this.changeQuantity(key, qty);
        }

        // Drawer remove line
        const btnRemove = e.target.closest('.btn-remove-line');
        if (btnRemove) {
          const key = btnRemove.getAttribute('data-key');
          this.changeQuantity(key, 0);
        }
      });
    }

    subscribe(fn) {
      this.listeners.push(fn);
    }

    notify(cart) {
      this.listeners.forEach(fn => fn(cart));
    }
  }

  window.HIITCart = new HIITCart();
})();
