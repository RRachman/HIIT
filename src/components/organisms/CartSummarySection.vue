<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { CartLineItem } from '@/types/cart';
import { FREE_SHIPPING_THRESHOLD } from '@/constants/app';
import { formatCurrency } from '@/utils/formatCurrency';

withDefaults(
  defineProps<{
    items: CartLineItem[];
    subtotal: number;
    checkout?: boolean;
  }>(),
  { checkout: false },
);
</script>

<template>
  <aside class="order-summary">
    <h2>ORDER SUMMARY</h2>
    <div v-if="checkout" class="checkout-summary-items">
      <div v-for="item in items" :key="item.id" class="summary-row">
        <span>{{ item.product.title }} · {{ item.variant.size }} × {{ item.quantity }}</span>
        <strong>{{ formatCurrency(item.variant.price * item.quantity) }}</strong>
      </div>
    </div>
    <div v-else class="summary-row">
      <span>Subtotal</span><strong>{{ formatCurrency(subtotal) }}</strong>
    </div>
    <p v-if="checkout" class="text-muted summary-note">
      Shipping and taxes calculated after connection to the backend.
    </p>
    <p v-else class="text-muted summary-note">
      {{ subtotal >= FREE_SHIPPING_THRESHOLD
        ? 'You qualify for free shipping.'
        : `${formatCurrency(FREE_SHIPPING_THRESHOLD - subtotal)} away from free shipping.` }}
      Shipping and taxes are calculated at checkout.
    </p>
    <div class="summary-row summary-row--total">
      <span>{{ checkout ? 'SUBTOTAL' : 'ESTIMATED TOTAL' }}</span>
      <span>{{ formatCurrency(subtotal) }}</span>
    </div>
    <RouterLink v-if="!checkout" to="/checkout" class="btn btn-primary summary-checkout">
      PROCEED TO CHECKOUT
    </RouterLink>
  </aside>
</template>
