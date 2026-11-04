<script setup lang="ts">
import AppButton from '@/components/atoms/AppButton.vue';
import QuantitySelector from '@/components/molecules/QuantitySelector.vue';
import SizeSelector from '@/components/molecules/SizeSelector.vue';
import ProductGallery from '@/components/organisms/ProductGallery.vue';
import type { Product, ProductVariant } from '@/types/product';
import { formatCurrency } from '@/utils/formatCurrency';

defineProps<{
  product: Product;
  activeVariant?: ProductVariant;
  availableColors: string[];
  unavailableSizes: string[];
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}>();

const emit = defineEmits<{
  'update:selectedColor': [color: string];
  'update:selectedSize': [size: string];
  'update:quantity': [quantity: number];
  addToCart: [];
  buyNow: [];
}>();
</script>

<template>
  <section class="product-detail-page">
    <div class="product-detail-grid product-detail-layout">
      <ProductGallery :images="product.images" :title="product.title" />
      <div class="product-detail-info">
        <h1 class="product-detail-title">{{ product.title }}</h1>
        <div class="product-detail-price">
          {{ formatCurrency(activeVariant?.price ?? product.price) }}
          <del v-if="activeVariant?.compareAtPrice ?? product.compareAtPrice">
            {{ formatCurrency((activeVariant?.compareAtPrice ?? product.compareAtPrice)!) }}
          </del>
        </div>
        <div class="selector-block selector-block--sizes">
          <div class="selector-title"><span>UKURAN</span></div>
          <SizeSelector
            :model-value="selectedSize"
            :sizes="product.sizes"
            :unavailable-sizes="unavailableSizes"
            @update:model-value="emit('update:selectedSize', $event)"
          />
        </div>

        <div class="selector-block">
          <label class="selector-title" for="product-color">WARNA</label>
          <div class="product-color-select">
            <select
              id="product-color"
              :value="selectedColor"
              aria-label="Pilih warna"
              @change="emit('update:selectedColor', ($event.target as HTMLSelectElement).value)"
            >
              <option v-for="color in availableColors" :key="color" :value="color">
                {{ color }}
              </option>
            </select>
          </div>
        </div>

        <details class="product-details fit-guide">
          <summary class="form-label">PANDUAN UKURAN</summary>
          <p>Ukuran yang tersedia: {{ product.sizes.join(', ') }}.</p>
        </details>

        <p class="stock-status" :class="activeVariant?.available ? 'text-muted' : 'form-message--error'">
          {{ activeVariant?.available ? 'STOK TERSEDIA — SIAP DIKIRIM' : 'VARIAN INI SEDANG TIDAK TERSEDIA' }}
        </p>
        <div class="product-quantity-row">
          <span class="selector-title">JUMLAH</span>
          <QuantitySelector
            :model-value="quantity"
            @update:model-value="emit('update:quantity', $event)"
          />
        </div>
        <div class="product-actions product-detail-actions">
          <AppButton :disabled="!activeVariant?.available" @click="emit('addToCart')">
            TAMBAH KE KERANJANG
          </AppButton>
          <AppButton
            class="product-checkout-button"
            :disabled="!activeVariant?.available"
            @click="emit('buyNow')"
          >
            CHECKOUT SEKARANG
          </AppButton>
        </div>
      </div>
    </div>
    <div class="product-description-section">
      <div>
        <h2>DESKRIPSI PRODUK</h2>
        <p>{{ product.description }}</p>
      </div>
      <div>
        <h2>BAHAN &amp; PERFORMA</h2>
        <p>{{ product.fabricDetails }}</p>
      </div>
    </div>
  </section>
</template>
