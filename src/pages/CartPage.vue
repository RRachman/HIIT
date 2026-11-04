<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CartContentsSection from '@/components/organisms/CartContentsSection.vue';
import CartSummarySection from '@/components/organisms/CartSummarySection.vue';
import { useCart } from '@/composables/useCart';

const { items, subtotal, store } = useCart();
</script>

<template>
  <section class="section-spacing page-width">
    <header class="page-heading"><h1 class="page-title">YOUR CART.</h1></header>
    <div v-if="!items.length" class="cart-empty">
      <p class="text-muted empty-cart-message">Your bag is currently empty.</p>
      <RouterLink to="/shop" class="btn btn-primary">CONTINUE SHOPPING</RouterLink>
    </div>
    <div v-else class="cart-layout">
      <CartContentsSection
        :items="items"
        @update-quantity="store.updateQuantity"
        @remove-item="store.removeItem"
      />
      <CartSummarySection :items="items" :subtotal="subtotal" />
    </div>
  </section>
</template>
