<script setup lang="ts">
const benefits = [
  {
    number: '01 — LIGHTWEIGHT',
    title: 'ENGINEERED COMFORT',
    description: 'Comfort-focused apparel designed for ease of movement and zero friction over long endurance miles.',
  },
  {
    number: '02 — FUNCTIONAL',
    title: 'PURPOSE-BUILT DETAILS',
    description: 'Practical silhouettes for running and active everyday life, featuring secure storage and thermal regulation.',
  },
  {
    number: '03 — OWN YOUR PACE',
    title: 'INDIVIDUAL PROGRESS',
    description: 'Every run is different. Find the pace that works for you and make consistency your highest standard.',
  },
];

</script>

<template>
  <section class="section-spacing page-width" aria-label="HIIT running benefits">
    <div class="brand-features-grid">
      <article v-for="benefit in benefits" :key="benefit.number" class="feature-column">
        <p class="feature-number">{{ benefit.number }}</p>
        <h2 class="feature-title">{{ benefit.title }}</h2>
        <p class="feature-desc">{{ benefit.description }}</p>
      </article>
    </div>
  </section>
</template>
