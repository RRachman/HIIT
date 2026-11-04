<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'white' | 'outline-white';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }>(),
  { variant: 'primary', type: 'button', disabled: false },
);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="btn"
    :class="`btn-${variant}`"
  >
    <slot />
  </button>
</template>
