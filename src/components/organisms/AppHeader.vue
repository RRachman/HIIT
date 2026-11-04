<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import AppIcon from '@/components/atoms/AppIcon.vue';
import SearchInput from '@/components/molecules/SearchInput.vue';
import { useCart } from '@/composables/useCart';
import hiitLogo from '@/assets/images/image-removebg-preview.png';

const route = useRoute();
const { itemCount } = useCart();
const menuOpen = ref(false);
const searchOpen = ref(false);
const isScrolled = ref(false);

function updateScrollState() {
  isScrolled.value = window.scrollY > 24;
}

function closePanels() {
  menuOpen.value = false;
  searchOpen.value = false;
}

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState);
});
</script>

<template>
  <div v-if="route.name !== 'home' && route.name !== 'product'" class="announcement-bar" role="region" aria-label="Announcement">
    FREE SHIPPING ON SELECTED ORDERS OVER Rp 100
  </div>
  <header
    class="header-wrapper"
    :class="{
      'header-wrapper--hero': route.name === 'home',
      'header-wrapper--product': route.name === 'product',
      'header-wrapper--scrolled': isScrolled,
    }"
  >
    <div class="page-width header-container">
      <div class="header-logo">
        <button
          class="icon-button mobile-menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          :aria-expanded="menuOpen"
          @click="menuOpen = true"
        >
          <AppIcon name="menu" />
        </button>
        <RouterLink to="/" class="brand-link brand-link--navbar" aria-label="HIIT Running home" @click="closePanels">
          <img class="brand-mark brand-mark--navbar" :src="hiitLogo" alt="Logo HIIT">
        </RouterLink>
      </div>

      <nav class="header-nav" aria-label="Main navigation">
        <RouterLink to="/" class="nav-link" :class="{ active: route.name === 'home' }">HOME</RouterLink>
        <RouterLink to="/shop" class="nav-link" :class="{ active: route.name === 'shop' }">SHOP</RouterLink>
        <RouterLink to="/about" class="nav-link" :class="{ active: route.name === 'about' }">ABOUT</RouterLink>
        <RouterLink to="/contact" class="nav-link" :class="{ active: route.name === 'contact' }">CONTACT</RouterLink>
      </nav>

      <div class="header-icons">
        <button
          class="header-icon-btn"
          type="button"
          :aria-label="searchOpen ? 'Close product search' : 'Open product search'"
          :aria-expanded="searchOpen"
          @click="searchOpen = !searchOpen"
        >
          <AppIcon :name="searchOpen ? 'close' : 'search'" />
        </button>
        <RouterLink to="/cart" class="header-icon-btn" :aria-label="`Shopping bag, ${itemCount} items`">
          <AppIcon name="bag" />
          <span v-if="itemCount" class="cart-count-badge" aria-hidden="true">{{ itemCount }}</span>
        </RouterLink>
      </div>
    </div>

    <div v-if="searchOpen" class="mobile-search">
      <SearchInput @update:model-value="searchOpen = false" />
    </div>

    <div v-if="menuOpen" class="mobile-nav-overlay" @click="menuOpen = false"></div>
    <aside v-if="menuOpen" class="mobile-nav-drawer" aria-label="Mobile navigation">
      <div>
        <div class="drawer-header">
          <RouterLink to="/" class="brand-link brand-link--navbar" aria-label="HIIT Running home" @click="closePanels">
            <img class="brand-mark brand-mark--navbar" :src="hiitLogo" alt="Logo HIIT">
          </RouterLink>
          <button class="icon-button" type="button" aria-label="Close menu" @click="menuOpen = false">
            <AppIcon name="close" />
          </button>
        </div>
        <nav class="mobile-nav-links">
          <RouterLink to="/" @click="closePanels">HOME</RouterLink>
          <RouterLink to="/shop" @click="closePanels">SHOP ALL</RouterLink>
          <RouterLink to="/about" @click="closePanels">OUR STORY</RouterLink>
          <RouterLink to="/contact" @click="closePanels">CONTACT</RouterLink>
          <RouterLink to="/faq" @click="closePanels">FAQ</RouterLink>
        </nav>
      </div>
      <div class="text-muted">
        <strong>HIIT RUNNING APPAREL</strong>
        <p>Performance apparel designed for movement.</p>
      </div>
    </aside>
  </header>
</template>
