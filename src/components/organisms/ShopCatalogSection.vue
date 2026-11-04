<script setup lang="ts">
import ProductGrid from '@/components/organisms/ProductGrid.vue';
import type { Product } from '@/types/product';

defineProps<{
  categories: string[];
  selectedCategory: string;
  sortBy: string;
  products: Product[];
  loading: boolean;
  error: string;
  query: string;
  searchLabel: string;
}>();

const emit = defineEmits<{
  'update:selectedCategory': [category: string];
  'update:sortBy': [sort: string];
}>();
</script>

<template>
  <section aria-label="Shop running apparel">
    <div class="product-toolbar">
      <div class="product-filters" aria-label="Filter by category">
        <button
          v-for="category in categories"
          :key="category"
          class="filter-button"
          :class="{ 'is-active': selectedCategory === category }"
          type="button"
          :aria-pressed="selectedCategory === category"
          @click="emit('update:selectedCategory', category)"
        >
          {{ category === 'All' ? 'ALL GEAR' : category }}
        </button>
      </div>
      <label class="form-field" for="shop-sort">
        <span class="form-label">SORT</span>
        <select
          id="shop-sort"
          class="sort-control"
          :value="sortBy"
          @change="emit('update:sortBy', ($event.target as HTMLSelectElement).value)"
        >
          <option value="featured">Featured</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-descending">Price, high to low</option>
        </select>
      </label>
    </div>

    <p v-if="query" class="text-muted search-results-label" aria-live="polite">
      Search results for “{{ searchLabel }}”
    </p>
    <ProductGrid
      :products="products"
      :loading="loading"
      :error="error"
      empty-message="No running products found in this category."
    />
  </section>
</template>
