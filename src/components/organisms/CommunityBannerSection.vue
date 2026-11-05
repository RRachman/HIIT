<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="community-banner" aria-labelledby="community-banner-title">
    <img
      class="community-banner__image"
      src="/images/editorial-running.jpg"
      alt="Runner preparing for a run on a forest trail"
      loading="lazy"
    >
    <div class="community-banner__overlay"></div>
    <div class="community-banner__content page-width">
      <p class="community-banner__eyebrow">MORE THAN THE MILES</p>
      <h2 id="community-banner-title" class="community-banner__title">RUN WITH<br>YOUR PEOPLE.</h2>
      <p class="community-banner__description">Find your pace. Share the miles. Be part of the HIIT running community.</p>
      <RouterLink to="/about" class="btn btn-white community-banner__button">OUR COMMUNITY</RouterLink>
    </div>
  </section>
</template>
