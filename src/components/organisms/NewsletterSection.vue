<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '@/components/atoms/AppButton.vue';
import AppInput from '@/components/atoms/AppInput.vue';

const email = ref('');
const submitted = ref(false);
function subscribe() {
  submitted.value = true;
  email.value = '';
}
</script>

<template>
  <section class="newsletter-section" aria-labelledby="newsletter-title">
    <div class="newsletter-content">
      <div class="eyebrow" style="color: rgba(255,255,255,.6);">COMMUNITY FIRST</div>
      <h2 id="newsletter-title" class="newsletter-headline">JOIN THE HIIT COMMUNITY.</h2>
      <p class="newsletter-subtext">
        Stay connected with new collections, releases, and running inspiration.
      </p>
      <form class="newsletter-form" @submit.prevent="subscribe">
        <AppInput
          id="newsletter-email"
          v-model="email"
          aria-label="Email address"
          type="email"
          placeholder="Your email address"
          autocomplete="email"
          required
        />
        <AppButton type="submit" variant="white">SUBSCRIBE</AppButton>
      </form>
      <p v-if="submitted" class="form-message" role="status">
        Thanks for your interest. Newsletter sign-up is a demo until connected to the backend.
      </p>
    </div>
  </section>
</template>
