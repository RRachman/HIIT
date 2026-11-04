<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="hero-section" aria-labelledby="home-hero-title">
    <div class="hero-media-wrapper">
      <img
        class="hero-image"
        src="/images/hero-running.jpg"
        alt="Runner moving through a forest trail"
        fetchpriority="high"
        width="2400"
        height="1350"
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
