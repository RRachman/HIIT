<script setup lang="ts">
import AppButton from '@/components/atoms/AppButton.vue';
import Breadcrumb from '@/components/molecules/Breadcrumb.vue';
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
  <section class="section-spacing page-width">
    <Breadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: product.title }]" />
    <div class="product-detail-grid product-detail-layout">
      <ProductGallery :images="product.images" :title="product.title" />
      <div class="product-detail-info">
        <p class="eyebrow">{{ product.type }}</p>
        <h1 class="product-detail-title">{{ product.title }}</h1>
        <div class="product-detail-price">
          {{ formatCurrency(activeVariant?.price ?? product.price) }}
          <del v-if="activeVariant?.compareAtPrice ?? product.compareAtPrice">
            {{ formatCurrency((activeVariant?.compareAtPrice ?? product.compareAtPrice)!) }}
          </del>
        </div>
        <p class="text-muted product-description">{{ product.description }}</p>

        <div class="selector-block">
          <div class="selector-title"><span>COLOR</span><span>{{ selectedColor }}</span></div>
          <div class="swatch-list" role="group" aria-label="Select a color">
            <button
              v-for="color in availableColors"
              :key="color"
              type="button"
              class="swatch-button"
              :class="{ 'is-active': color === selectedColor }"
              :aria-pressed="color === selectedColor"
              @click="emit('update:selectedColor', color)"
            >
              {{ color }}
            </button>
          </div>
        </div>

        <div class="selector-block">
          <div class="selector-title"><span>SIZE</span><span>SIZE GUIDE</span></div>
          <SizeSelector
            :model-value="selectedSize"
            :sizes="product.sizes"
            :unavailable-sizes="unavailableSizes"
            @update:model-value="emit('update:selectedSize', $event)"
          />
        </div>

        <p class="stock-status" :class="activeVariant?.available ? 'text-muted' : 'form-message--error'">
          {{ activeVariant?.available ? 'IN STOCK — READY TO SHIP' : 'THIS VARIANT IS CURRENTLY UNAVAILABLE' }}
        </p>
        <div class="selector-block">
          <div class="selector-title">QUANTITY</div>
          <QuantitySelector
            :model-value="quantity"
            @update:model-value="emit('update:quantity', $event)"
          />
        </div>
        <div class="product-actions">
          <AppButton :disabled="!activeVariant?.available" @click="emit('addToCart')">
            ADD TO CART
          </AppButton>
          <AppButton
            variant="secondary"
            :disabled="!activeVariant?.available"
            @click="emit('buyNow')"
          >
            BUY NOW
          </AppButton>
        </div>
        <details class="product-details">
          <summary class="form-label">FABRIC &amp; PERFORMANCE</summary>
          <p class="text-muted product-description">{{ product.fabricDetails }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
