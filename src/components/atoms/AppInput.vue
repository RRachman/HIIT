<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    modelValue: string;
    label?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
    ariaLabel?: string;
    required?: boolean;
    error?: string;
  }>(),
  { type: 'text', required: false },
);

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <div class="form-field">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :aria-label="ariaLabel"
      :required="required"
      :aria-invalid="Boolean(error)"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="form-control"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <span v-if="error" :id="`${id}-error`" class="form-message form-message--error">
      {{ error }}
    </span>
  </div>
</template>
