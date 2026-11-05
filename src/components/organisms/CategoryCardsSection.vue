<script setup lang="ts">
import { RouterLink } from 'vue-router';

const categories = [
  {
    name: 'Tops',
    image: '/images/product-1.jpg',
    alt: 'Black long-sleeve running top',
  },
  {
    name: 'Bottoms',
    image: '/images/editorial-running.jpg',
    alt: 'Runner wearing performance bottoms on a forest trail',
  },
  {
    name: 'Accessories',
    image: '/images/hero-running.jpg',
    alt: 'Runner on a forest road wearing running gear',
  },
];
</script>

<template>
  <section class="category-section page-width" aria-labelledby="category-section-title">
    <header class="category-section__header">
      <p class="page-kicker">FIND YOUR KIT</p>
      <h2 id="category-section-title" class="category-section__title">SHOP BY CATEGORY</h2>
    </header>

    <div class="category-grid">
      <RouterLink
        v-for="category in categories"
        :key="category.name"
        :to="{ name: 'shop', query: { category: category.name } }"
        class="category-card"
      >
        <img :src="category.image" :alt="category.alt" class="category-card__image" loading="lazy">
        <span class="category-card__overlay"></span>
        <span class="category-card__content">
          <span class="category-card__name">{{ category.name }}</span>
          <span class="category-card__link">SHOP NOW <span aria-hidden="true">→</span></span>
        </span>
      </RouterLink>
    </div>
  </section>
</template>
