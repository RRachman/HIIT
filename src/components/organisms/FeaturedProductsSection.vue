<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AppSpinner from '@/components/atoms/AppSpinner.vue';
import ProductGrid from '@/components/organisms/ProductGrid.vue';
import type { Product } from '@/types/product';

defineProps<{
  products: Product[];
  loading: boolean;
  error: string;
}>();
</script>

<template>
  <section class="section-spacing page-width" aria-labelledby="new-arrivals-title">
    <header class="section-heading">
      <div>
        <p class="eyebrow">SEASON 2026</p>
        <h2 id="new-arrivals-title" class="section-title">NEW ARRIVALS.</h2>
      </div>
      <RouterLink to="/shop" class="nav-link">SHOP ALL</RouterLink>
    </header>
    <AppSpinner v-if="loading && !products.length" />
    <div v-else-if="error" class="status-panel" role="alert">{{ error }}</div>
    <ProductGrid v-else :products="products" />
  </section>
</template>
