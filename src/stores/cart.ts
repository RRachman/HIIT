import { defineStore } from 'pinia';
import { CART_STORAGE_KEY } from '@/constants/app';
import type { CartLineItem } from '@/types/cart';
import type { Product, ProductVariant } from '@/types/product';

function isCartLineItem(value: unknown): value is CartLineItem {
  if (!value || typeof value !== 'object') return false;
  const item = value as Partial<CartLineItem>;
  return (
    typeof item.id === 'number' &&
    typeof item.quantity === 'number' &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0 &&
    Boolean(item.product && typeof item.product.title === 'string') &&
    Boolean(item.variant && typeof item.variant.id === 'number' && typeof item.variant.price === 'number')
  );
}

function readCart(): CartLineItem[] {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const items: unknown = JSON.parse(stored);
    if (Array.isArray(items) && items.every(isCartLineItem)) return items;
    console.error('Saved cart data is invalid and could not be restored.');
  } catch (error) {
    console.error('Unable to restore the saved cart.', error);
  }
  return [];
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: readCart(),
    isDrawerOpen: false,
  }),
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) =>
      state.items.reduce((total, item) => total + item.variant.price * item.quantity, 0),
  },
  actions: {
    persist() {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
      } catch (error) {
        console.error('Unable to save the cart in this browser.', error);
      }
    },
    addItem(product: Product, variant: ProductVariant, quantity = 1) {
      if (!variant.available || quantity < 1) return;
      const existing = this.items.find((item) => item.variant.id === variant.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push({ id: variant.id, product, variant, quantity });
      }
      this.persist();
      this.isDrawerOpen = true;
    },
    updateQuantity(variantId: number, quantity: number) {
      if (quantity <= 0) {
        this.removeItem(variantId);
        return;
      }
      const item = this.items.find((entry) => entry.variant.id === variantId);
      if (!item) return;
      item.quantity = quantity;
      this.persist();
    },
    removeItem(variantId: number) {
      this.items = this.items.filter((item) => item.variant.id !== variantId);
      this.persist();
    },
    clearCart() {
      this.items = [];
      this.persist();
    },
  },
});
