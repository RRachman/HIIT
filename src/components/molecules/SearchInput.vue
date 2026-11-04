<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppIcon from '@/components/atoms/AppIcon.vue';

const props = defineProps<{ modelValue?: string }>();
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();
const router = useRouter();
const query = ref(props.modelValue ?? '');

function search() {
  const searchQuery = query.value.trim();
  emit('update:modelValue', searchQuery);
  void router.push({ name: 'shop', query: searchQuery ? { q: searchQuery } : {} });
}
</script>

<template>
  <form class="search-form" role="search" @submit.prevent="search">
    <label class="visually-hidden" for="store-search">Search products</label>
    <input
      id="store-search"
      v-model="query"
      class="form-control"
      type="search"
      placeholder="Search products"
    >
    <button class="icon-button" type="submit" aria-label="Search">
      <AppIcon name="search" />
    </button>
  </form>
</template>
