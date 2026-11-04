<script setup lang="ts">
import AppButton from '@/components/atoms/AppButton.vue';
import AppInput from '@/components/atoms/AppInput.vue';

const name = defineModel<string>('name', { required: true });
const email = defineModel<string>('email', { required: true });
const orderNumber = defineModel<string>('orderNumber', { required: true });
const message = defineModel<string>('message', { required: true });

defineProps<{ submitted: boolean }>();
defineEmits<{ submit: [] }>();
</script>

<template>
  <form class="contact-form" @submit.prevent="$emit('submit')">
    <h2>SEND US A MESSAGE</h2>
    <AppInput id="contact-name" v-model="name" label="Name" autocomplete="name" required />
    <AppInput id="contact-email" v-model="email" label="Email" type="email" autocomplete="email" required />
    <AppInput id="contact-order" v-model="orderNumber" label="Order number (optional)" placeholder="#HIIT-XXXX" />
    <div class="form-field">
      <label for="contact-message" class="form-label">MESSAGE</label>
      <textarea id="contact-message" v-model="message" class="form-control" rows="5" required></textarea>
    </div>
    <AppButton type="submit">SEND MESSAGE</AppButton>
    <p v-if="submitted" class="form-message" role="status">
      This contact form is a demo. No message was sent; connect the Laravel contact endpoint to enable delivery.
    </p>
  </form>
</template>
