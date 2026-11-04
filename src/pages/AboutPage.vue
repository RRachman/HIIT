<script setup lang="ts">
import BrandStorySection from '@/components/organisms/BrandStorySection.vue';
import BrandBenefitsSection from '@/components/organisms/BrandBenefitsSection.vue';
</script>

<template>
  <BrandStorySection
    kicker="PURPOSE &amp; PROGRESS"
    title="MOVE BETTER. GO FURTHER."
    :paragraphs="[
      'HIIT is built for movement and designed for runners. We make thoughtful performance essentials for the training miles, the everyday miles, and every step in between.',
      'Find your pace, make every run count, and keep moving forward.',
    ]"
    button-label="EXPLORE THE COLLECTION"
    button-to="/shop"
    image-alt="Runner on a forest trail"
  />
  <BrandBenefitsSection class="brand-benefits--about" />
</template>
