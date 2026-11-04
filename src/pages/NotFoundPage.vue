<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="section-spacing page-width cart-empty">
    <p class="page-kicker">404 — PAGE NOT FOUND</p>
    <h1 class="page-title">KEEP MOVING.</h1>
    <p class="text-muted" style="margin:1rem 0 2rem;">The page you’re looking for may have moved.</p>
    <RouterLink to="/" class="btn btn-primary">BACK TO HOME</RouterLink>
  </section>
</template>
