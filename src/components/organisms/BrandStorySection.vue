<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  kicker: string;
  title: string;
  paragraphs: string[];
  buttonLabel: string;
  buttonTo: string;
  imageAlt: string;
}>();
</script>

<template>
  <section class="section-spacing page-width">
    <div class="image-with-text-grid">
      <div class="image-with-text-media">
        <img
          src="/images/editorial-running.jpg"
          :alt="imageAlt"
          loading="lazy"
          width="1400"
          height="1100"
        >
      </div>
      <div class="image-with-text-content">
        <p class="eyebrow">{{ kicker }}</p>
        <h2 class="brand-story-title">{{ title }}</h2>
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="paragraph"
          class="brand-story-copy"
          :class="{ 'brand-story-copy--last': index === paragraphs.length - 1 }"
        >
          {{ paragraph }}
        </p>
        <div>
          <RouterLink :to="buttonTo" class="btn btn-primary">{{ buttonLabel }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
