/**
 * HIIT Running — Theme Core Scripts
 * Minimal, lightweight vanilla JavaScript for theme interactions.
 */

(function () {
  'use strict';

  // Mobile navigation drawer
  const initMobileMenu = () => {
    const toggleBtn = document.querySelector('[data-action="toggle-mobile-menu"]');
    const closeBtn = document.querySelector('[data-action="close-mobile-menu"]');
    const mobileMenu = document.querySelector('.mobile-nav-drawer');
    const overlay = document.querySelector('.mobile-nav-overlay');

    if (!toggleBtn || !mobileMenu) return;

    const open = () => {
      mobileMenu.classList.add('is-active');
      if (overlay) overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      mobileMenu.classList.remove('is-active');
      if (overlay) overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
  };

  // Sticky header class toggle on scroll
  const initStickyHeader = () => {
    const header = document.querySelector('.header-wrapper');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  };

  // FAQ Accordion
  const initAccordion = () => {
    const triggers = document.querySelectorAll('[data-accordion-trigger]');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('is-open');

        // Close others in same accordion group
        const group = trigger.closest('.faq-accordion');
        if (group) {
          group.querySelectorAll('.faq-item').forEach(other => {
            other.classList.remove('is-open');
          });
        }

        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    });
  };

  // Product Gallery Switcher
  const initProductGallery = () => {
    const thumbs = document.querySelectorAll('.product-thumb-btn');
    const mainImg = document.querySelector('.product-main-image');

    if (!mainImg || thumbs.length === 0) return;

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
        const targetSrc = thumb.getAttribute('data-src');
        if (targetSrc) mainImg.src = targetSrc;
      });
    });
  };

  // Native Product Variant Change Handler
  const initVariantSelector = () => {
    const variantSelects = document.querySelectorAll('.product-variant-selector');
    variantSelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const target = e.target;
        const selectedOption = target.options[target.selectedIndex];
        const price = selectedOption.getAttribute('data-price');
        const available = selectedOption.getAttribute('data-available') === 'true';

        const priceEl = document.querySelector('.product-current-price');
        const submitBtn = document.querySelector('.product-add-to-cart-btn');

        if (priceEl && price) {
          priceEl.textContent = price;
        }

        if (submitBtn) {
          if (available) {
            submitBtn.removeAttribute('disabled');
            submitBtn.textContent = submitBtn.getAttribute('data-text-add') || 'ADD TO BAG';
          } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.textContent = submitBtn.getAttribute('data-text-sold-out') || 'SOLD OUT';
          }
        }
      });
    });

    // Option Buttons / Pills
    const optionBtns = document.querySelectorAll('.option-selector-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.option-group');
        if (!group) return;
        group.querySelectorAll('.option-selector-btn').forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');

        const value = btn.getAttribute('data-value');
        const targetIndex = group.getAttribute('data-option-index');
        const hiddenInput = document.querySelector(`input[name="options[${targetIndex}]"]`);
        if (hiddenInput) {
          hiddenInput.value = value;
          hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    });
  };

  // Search Modal Toggle
  const initSearchModal = () => {
    const openBtns = document.querySelectorAll('[data-action="open-search"]');
    const closeBtns = document.querySelectorAll('[data-action="close-search"]');
    const modal = document.querySelector('.search-modal');

    if (!modal) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('is-active');
        const input = modal.querySelector('input[type="search"]');
        if (input) setTimeout(() => input.focus(), 100);
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('is-active');
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initStickyHeader();
    initAccordion();
    initProductGallery();
    initVariantSelector();
    initSearchModal();
  });
})();
