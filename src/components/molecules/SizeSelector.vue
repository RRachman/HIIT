<script setup lang="ts">
defineProps<{
  sizes: string[];
  modelValue: string;
  unavailableSizes?: string[];
}>();
const emit = defineEmits<{ 'update:modelValue': [size: string] }>();
</script>

<template>
  <div class="size-list" role="group" aria-label="Pilih ukuran">
    <button
      v-for="size in sizes"
      :key="size"
      type="button"
      class="size-button"
      :class="{ 'is-active': size === modelValue }"
      :aria-pressed="size === modelValue"
      :disabled="unavailableSizes?.includes(size)"
      @click="emit('update:modelValue', size)"
    >
      {{ size }}
    </button>
  </div>
</template>
