<script setup lang="ts">
import QuantitySelector from '@/components/molecules/QuantitySelector.vue';
import type { CartLineItem } from '@/types/cart';
import { formatCurrency } from '@/utils/formatCurrency';

defineProps<{ items: CartLineItem[] }>();
const emit = defineEmits<{
  updateQuantity: [variantId: number, quantity: number];
  removeItem: [variantId: number];
}>();
</script>

<template>
  <section class="cart-contents" aria-label="Cart items">
    <header class="cart-list-header">
      <span>PRODUCT</span><span>TOTAL</span>
    </header>
    <article v-for="item in items" :key="item.id" class="cart-item">
      <img class="cart-item-image" :src="item.product.featuredImage" :alt="item.product.title">
      <div>
        <h2 class="cart-item-title">{{ item.product.title }}</h2>
        <p class="text-muted">{{ item.variant.color }} / {{ item.variant.size }}</p>
        <p class="cart-item-price">{{ formatCurrency(item.variant.price) }}</p>
        <div class="cart-item-controls">
          <QuantitySelector
            :model-value="item.quantity"
            @update:model-value="emit('updateQuantity', item.id, $event)"
          />
          <button class="text-button" type="button" @click="emit('removeItem', item.id)">REMOVE</button>
        </div>
      </div>
      <strong class="cart-item-total">{{ formatCurrency(item.variant.price * item.quantity) }}</strong>
    </article>
    <RouterLink to="/shop" class="nav-link continue-shopping">CONTINUE SHOPPING</RouterLink>
  </section>
</template>
