<script setup lang="ts">
import { onMounted } from 'vue';
import HeroSection from '@/components/organisms/HeroSection.vue';
import CategoryCardsSection from '@/components/organisms/CategoryCardsSection.vue';
import CommunityBannerSection from '@/components/organisms/CommunityBannerSection.vue';
import NewsletterSection from '@/components/organisms/NewsletterSection.vue';
import FeaturedProductsSection from '@/components/organisms/FeaturedProductsSection.vue';
import BrandStorySection from '@/components/organisms/BrandStorySection.vue';
import BrandBenefitsSection from '@/components/organisms/BrandBenefitsSection.vue';
import { useProducts } from '@/composables/useProducts';

const { store, products, loading, error } = useProducts();

onMounted(() => {
  void store.fetchProducts().catch(() => undefined);
});
</script>

<template>
  <HeroSection />
  <CategoryCardsSection />
  <CommunityBannerSection />
  <FeaturedProductsSection
    :products="products.slice(0, 4)"
    :loading="loading"
    :error="error"
  />
  <BrandStorySection
    kicker="PURPOSE &amp; PROGRESS"
    title="MOVE BETTER. GO FURTHER."
    :paragraphs="[
      'Built for movement, designed for runners. Discover apparel that moves with your pace and your everyday routine.',
    ]"
    button-label="DISCOVER HIIT"
    button-to="/about"
    image-alt="Runner preparing for a run on a forest trail"
  />
  <BrandBenefitsSection />
  <NewsletterSection />
</template>
