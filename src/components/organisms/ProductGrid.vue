<script setup lang="ts">
import ProductCard from '@/components/molecules/ProductCard.vue';
import AppSpinner from '@/components/atoms/AppSpinner.vue';
import type { Product } from '@/types/product';

withDefaults(
  defineProps<{
    products: Product[];
    loading?: boolean;
    error?: string;
    emptyMessage?: string;
    badgeLabel?: string;
    badgeVariant?: 'default' | 'sale';
  }>(),
  { loading: false, error: '', emptyMessage: 'No products found.', badgeVariant: 'default' },
);
</script>

<template>
  <AppSpinner v-if="loading" />
  <div v-else-if="error" class="status-panel" role="alert">{{ error }}</div>
  <div v-else-if="!products.length" class="empty-area text-muted">{{ emptyMessage }}</div>
  <div v-else class="product-grid">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :badge-label="badgeLabel"
      :badge-variant="badgeVariant"
    />
  </div>
</template>
