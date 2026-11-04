<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductPurchaseSection from '@/components/organisms/ProductPurchaseSection.vue';
import { useCart } from '@/composables/useCart';
import { useProducts } from '@/composables/useProducts';

const route = useRoute();
const router = useRouter();
const { store, products, loading, error } = useProducts();
const { store: cart } = useCart();
const selectedColor = ref('');
const selectedSize = ref('');
const quantity = ref(1);
const product = computed(() => products.value.find((item) => item.id === Number(route.params.id)));
const activeVariant = computed(() =>
  product.value?.variants.find(
    (variant) => variant.color === selectedColor.value && variant.size === selectedSize.value,
  ),
);
const availableSizes = computed(() =>
  product.value?.variants
    .filter((variant) => variant.color === selectedColor.value && variant.available)
    .map((variant) => variant.size) ?? [],
);
const unavailableSizes = computed(() =>
  product.value?.sizes.filter((size) => !availableSizes.value.includes(size)) ?? [],
);
const availableColors = computed(() =>
  product.value?.colors.filter((color) =>
    product.value?.variants.some((variant) => variant.color === color),
  ) ?? [],
);

function chooseProductDefaults() {
  if (!product.value) return;
  const firstAvailable = product.value.variants.find((variant) => variant.available);
  selectedColor.value = firstAvailable?.color ?? product.value.colors[0] ?? '';
  selectedSize.value = firstAvailable?.size ?? product.value.sizes[0] ?? '';
  quantity.value = 1;
}

watch(product, chooseProductDefaults, { immediate: true });

function addToCart(goToCheckout = false) {
  if (!product.value || !activeVariant.value?.available) return;
  cart.addItem(product.value, activeVariant.value, quantity.value);
  if (goToCheckout) {
    cart.isDrawerOpen = false;
    void router.push('/checkout');
  }
}

onMounted(() => {
  void store.fetchProducts().catch(() => undefined);
});
</script>

<template>
  <div v-if="loading && !products.length" class="loading-area product-page-state">
    <span class="spinner" aria-hidden="true"></span>
    <p>Memuat produk…</p>
  </div>
  <div v-else-if="error" class="status-panel product-page-state" role="alert">
    Produk gagal dimuat: {{ error }}
  </div>
  <div v-else-if="!product" class="status-panel product-page-state" role="status">
    <h1 class="page-title">PRODUK TIDAK DITEMUKAN</h1>
    <RouterLink class="btn btn-primary" to="/shop" style="margin-top:1.5rem;">LIHAT SEMUA PRODUK</RouterLink>
  </div>
  <ProductPurchaseSection
    v-else
    :product="product"
    :active-variant="activeVariant"
    :available-colors="availableColors"
    :unavailable-sizes="unavailableSizes"
    v-model:selected-color="selectedColor"
    v-model:selected-size="selectedSize"
    v-model:quantity="quantity"
    @add-to-cart="addToCart()"
    @buy-now="addToCart(true)"
  />
</template>
