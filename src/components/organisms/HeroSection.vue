<script setup lang="ts">
import { RouterLink } from 'vue-router';
import heroImage from '@/assets/images/0621dfdc-d0f0-42a4-b44e-e27d8e52c651.png';
</script>

<template>
  <section class="hero-section" aria-labelledby="home-hero-title">
    <div class="hero-media-wrapper">
      <img
        class="hero-image"
        :src="heroImage"
        alt="Runner moving through a forest trail"
        fetchpriority="high"
        width="1672"
        height="941"
      >
      <div class="hero-overlay"></div>
    </div>
    <div class="page-width hero-content">
      <h1 id="home-hero-title" class="hero-headline">
        <span>ELEVATE YOUR</span>
        <span>PERFORMANCE.</span>
      </h1>
      <div class="hero-buttons">
        <RouterLink to="/shop" class="btn btn-white hero-button">SHOP ALL</RouterLink>
        <RouterLink to="/shop?category=Long%20Sleeve" class="btn btn-outline-white hero-button">
          SHOP RUNNING
        </RouterLink>
      </div>
    </div>
  </section>
</template>
