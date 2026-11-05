<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    variant?: 'default' | 'sale';
  }>(),
  { variant: 'default' },
);
</script>

<template>
  <span class="product-badge" :class="{ 'product-badge--sale': variant === 'sale' }">{{ label }}</span>
</template>
