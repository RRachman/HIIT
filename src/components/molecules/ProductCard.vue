<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AppBadge from '@/components/atoms/AppBadge.vue';
import type { Product } from '@/types/product';
import { formatCurrency } from '@/utils/formatCurrency';

defineProps<{ product: Product }>();
</script>

<template>
  <article class="product-card">
    <RouterLink class="product-link" :to="{ name: 'product', params: { id: product.id } }">
      <div class="product-card-media">
        <img
          class="product-card-image"
          :src="product.featuredImage"
          :alt="product.title"
          loading="lazy"
          width="800"
          height="1067"
        >
        <img
          v-if="product.images.length > 1"
          class="product-card-image product-card-image--alternate"
          :src="product.images[1]"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width="800"
          height="1067"
        >
        <AppBadge v-if="product.badge" :label="product.badge" />
      </div>
      <div class="product-card-info">
        <span class="eyebrow">{{ product.type }}</span>
        <h3 class="product-card-title">{{ product.title }}</h3>
        <div class="product-card-meta">
          <span class="product-price">{{ formatCurrency(product.price) }}</span>
          <span v-if="product.compareAtPrice" class="product-price-compare">
            {{ formatCurrency(product.compareAtPrice) }}
          </span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>
