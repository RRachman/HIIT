<script setup lang="ts">
import { computed } from 'vue';
import { ArrowRight, Check, Menu, Minus, Plus, Search, ShoppingBag, X } from '@lucide/vue';

const props = withDefaults(
  defineProps<{
    name: 'search' | 'bag' | 'menu' | 'close' | 'arrow-right' | 'plus' | 'minus' | 'check';
    size?: number;
  }>(),
  { size: 20 },
);

const icons = {
  search: Search,
  bag: ShoppingBag,
  menu: Menu,
  close: X,
  'arrow-right': ArrowRight,
  plus: Plus,
  minus: Minus,
  check: Check,
};
const icon = computed(() => icons[props.name]);
</script>

<template>
  <component :is="icon" :size="size" aria-hidden="true" />
</template>
