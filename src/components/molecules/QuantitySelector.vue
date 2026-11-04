<script setup lang="ts">
withDefaults(defineProps<{ modelValue: number; min?: number }>(), { min: 1 });
const emit = defineEmits<{ 'update:modelValue': [value: number] }>();
</script>

<template>
  <div class="quantity-selector" aria-label="Quantity">
    <button
      type="button"
      :aria-label="`Decrease quantity to ${Math.max(min, modelValue - 1)}`"
      :disabled="modelValue <= min"
      @click="emit('update:modelValue', Math.max(min, modelValue - 1))"
    >
      <span aria-hidden="true">−</span>
    </button>
    <output aria-live="polite">{{ modelValue }}</output>
    <button
      type="button"
      :aria-label="`Increase quantity to ${modelValue + 1}`"
      @click="emit('update:modelValue', modelValue + 1)"
    >
      <span aria-hidden="true">+</span>
    </button>
  </div>
</template>
