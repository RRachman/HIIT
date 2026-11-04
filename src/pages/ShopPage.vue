<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from '@/components/molecules/Breadcrumb.vue';
import ShopCatalogSection from '@/components/organisms/ShopCatalogSection.vue';
import { useProducts } from '@/composables/useProducts';

const route = useRoute();
const { store, products, loading, error } = useProducts();
const selectedCategory = ref('All');
const sortBy = ref('featured');
const query = computed(() => String(route.query.q ?? '').trim().toLowerCase());
const categories = computed(() => ['All', ...new Set(products.value.map((product) => product.type))]);

watch(
  () => route.query.category,
  (category) => {
    selectedCategory.value = typeof category === 'string' ? category : 'All';
  },
  { immediate: true },
);

const visibleProducts = computed(() => {
  const filtered = products.value.filter((product) => {
    const matchesCategory = selectedCategory.value === 'All' || product.type === selectedCategory.value;
    const matchesQuery =
      !query.value ||
      `${product.title} ${product.type} ${product.description}`.toLowerCase().includes(query.value);
    return matchesCategory && matchesQuery;
  });
  if (sortBy.value === 'price-ascending') return [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy.value === 'price-descending') return [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy.value === 'title-ascending') return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  return filtered;
});

onMounted(() => {
  void store.fetchProducts().catch(() => undefined);
});
</script>

<template>
  <section class="section-spacing page-width">
    <Breadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Shop' }]" />
    <header class="page-heading shop-page-heading">
      <p class="page-kicker">ALL RUNNING APPAREL</p>
      <h1 class="page-title">SHOP HIIT.</h1>
      <p class="text-muted shop-page-description">
        Technical essentials built for movement, training, and every mile in between.
      </p>
    </header>
    <ShopCatalogSection
      v-model:selected-category="selectedCategory"
      v-model:sort-by="sortBy"
      :categories="categories"
      :products="visibleProducts"
      :loading="loading && !products.length"
      :error="error"
      :query="query"
      :search-label="String(route.query.q ?? '')"
    />
  </section>
</template>
