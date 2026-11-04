<script setup lang="ts">
import AppFooter from '@/components/organisms/AppFooter.vue';
import AppHeader from '@/components/organisms/AppHeader.vue';
import CartDrawer from '@/components/organisms/CartDrawer.vue';
</script>

<template>
  <div class="site-shell">
    <a class="skip-to-content-link visually-hidden" href="#main-content">Skip to content</a>
    <AppHeader />
    <main id="main-content" class="store-main">
      <RouterView />
    </main>
    <AppFooter />
    <CartDrawer />
  </div>
</template>
