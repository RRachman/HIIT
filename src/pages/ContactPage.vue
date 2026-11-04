<script setup lang="ts">
import { ref } from 'vue';
import ContactInfoSection from '@/components/organisms/ContactInfoSection.vue';
import ContactFormSection from '@/components/organisms/ContactFormSection.vue';

const name = ref('');
const email = ref('');
const orderNumber = ref('');
const message = ref('');
const submitted = ref(false);

function submitContact() {
  submitted.value = true;
  name.value = '';
  email.value = '';
  orderNumber.value = '';
  message.value = '';
}
</script>

<template>
  <div class="section-spacing page-width">
    <div class="contact-layout">
      <ContactInfoSection />
      <ContactFormSection
        v-model:name="name"
        v-model:email="email"
        v-model:order-number="orderNumber"
        v-model:message="message"
        :submitted="submitted"
        @submit="submitContact"
      />
    </div>
  </div>
</template>
