<script setup lang="ts">
import { RouterLink } from 'vue-router';
import hiitLogo from '@/assets/images/image-removebg-preview.png';
</script>

<template>
  <footer class="footer">
    <div class="page-width">
      <div class="footer-grid">
        <div>
          <RouterLink to="/" aria-label="HIIT Running home">
            <img class="brand-mark brand-mark--footer" :src="hiitLogo" alt="Logo HIIT">
          </RouterLink>
          <p class="text-muted" style="max-width: 22rem; margin-top: 1rem;">
            Performance apparel designed for movement. Find your pace and make every run count.
          </p>
        </div>
        <div>
          <h2 class="footer-heading">EXPLORE</h2>
          <ul class="footer-links">
            <li><RouterLink to="/shop">Shop all</RouterLink></li>
            <li><RouterLink to="/about">Our story</RouterLink></li>
            <li><RouterLink to="/faq">FAQ</RouterLink></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-heading">SUPPORT</h2>
          <ul class="footer-links">
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li><RouterLink to="/faq">Shipping & returns</RouterLink></li>
            <li><RouterLink to="/cart">Your cart</RouterLink></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-heading">GET IN TOUCH</h2>
          <ul class="footer-links">
            <li><a href="mailto:support@hiitrunning.com">support@hiitrunning.com</a></li>
            <li>Monday – Friday, 9 AM – 6 PM EST</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} HIIT RUNNING. ALL RIGHTS RESERVED.</span>
        <span>BUILT TO MOVE.</span>
      </div>
    </div>
  </footer>
</template>
