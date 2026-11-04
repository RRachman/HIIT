<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { RouterLink } from 'vue-router';
import AppIcon from '@/components/atoms/AppIcon.vue';
import QuantitySelector from '@/components/molecules/QuantitySelector.vue';
import { useCart } from '@/composables/useCart';
import { formatCurrency } from '@/utils/formatCurrency';

const { items, itemCount, subtotal, isDrawerOpen, store } = useCart();

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') store.isDrawerOpen = false;
}

watch(isDrawerOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isDrawerOpen" class="cart-drawer-overlay is-active" @click="store.isDrawerOpen = false"></div>
    <aside
      v-if="isDrawerOpen"
      class="cart-drawer is-active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      <div class="drawer-header">
        <h2 id="cart-drawer-title">YOUR BAG ({{ itemCount }})</h2>
        <button class="icon-button" type="button" aria-label="Close cart" @click="store.isDrawerOpen = false">
          <AppIcon name="close" />
        </button>
      </div>
      <div v-if="!items.length" class="cart-empty">
        <p class="text-muted">Your bag is currently empty.</p>
        <RouterLink to="/shop" class="btn btn-primary" @click="store.isDrawerOpen = false">
          SHOP RUNNING GEAR
        </RouterLink>
      </div>
      <div v-else class="drawer-items">
        <article v-for="item in items" :key="item.id" class="cart-item">
          <img class="cart-item-image" :src="item.product.featuredImage" :alt="item.product.title">
          <div>
            <h3 class="cart-item-title">{{ item.product.title }}</h3>
            <p class="text-muted">{{ item.variant.color }} / {{ item.variant.size }}</p>
            <p>{{ formatCurrency(item.variant.price) }}</p>
            <div class="cart-item-controls">
              <QuantitySelector
                :model-value="item.quantity"
                @update:model-value="store.updateQuantity(item.id, $event)"
              />
              <button class="text-button" type="button" @click="store.removeItem(item.id)">REMOVE</button>
            </div>
          </div>
        </article>
      </div>
      <div v-if="items.length" class="drawer-footer">
        <div class="summary-row">
          <span>SUBTOTAL</span>
          <strong>{{ formatCurrency(subtotal) }}</strong>
        </div>
        <p class="text-muted" style="font-size: 0.8rem; margin-bottom: 1rem;">
          Shipping and taxes calculated at checkout.
        </p>
        <RouterLink to="/cart" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;" @click="store.isDrawerOpen = false">
          VIEW CART
        </RouterLink>
        <RouterLink to="/checkout" class="btn btn-primary" style="width: 100%;" @click="store.isDrawerOpen = false">
          CHECK OUT
        </RouterLink>
      </div>
    </aside>
  </Teleport>
</template>
