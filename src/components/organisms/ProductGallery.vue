<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{ images: string[]; title: string }>();
const selectedIndex = ref(0);
const selectedImage = computed(() => props.images[selectedIndex.value] ?? props.images[0]);
watch(() => props.images, () => { selectedIndex.value = 0; });
</script>

<template>
  <div class="product-gallery">
    <div class="product-gallery-main">
      <img :src="selectedImage" :alt="title" width="1000" height="1250">
    </div>
    <div v-if="images.length > 1" class="product-gallery-thumbs" aria-label="Product images">
      <button
        v-for="(image, index) in images"
        :key="image"
        type="button"
        class="product-gallery-thumb"
        :class="{ 'is-active': selectedIndex === index }"
        :aria-label="`View image ${index + 1} of ${images.length}`"
        :aria-pressed="selectedIndex === index"
        @click="selectedIndex = index"
      >
        <img :src="image" :alt="`${title}, view ${index + 1}`" loading="lazy">
      </button>
    </div>
  </div>
</template>
