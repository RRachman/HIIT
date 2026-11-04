<script setup lang="ts">
import FAQListSection from '@/components/organisms/FAQListSection.vue';

const questions = [
  {
    question: 'HOW DO I CHOOSE MY SIZE?',
    answer: 'HIIT performance gear is designed with an athletic ergonomic silhouette. Choose your standard size for a streamlined fit, or size up for extra room and layering.',
  },
  {
    question: 'HOW LONG DOES SHIPPING TAKE?',
    answer: 'Orders are processed on business days. Delivery times and shipping options will be confirmed at checkout when fulfillment is connected.',
  },
  {
    question: 'CAN I EXCHANGE AN ITEM?',
    answer: 'Unworn apparel with original tags may be eligible for an exchange. Contact our support team for help with a specific order.',
  },
  {
    question: 'HOW CAN I TRACK MY ORDER?',
    answer: 'When order fulfillment is connected, tracking details will be shared with you after your package ships.',
  },
  {
    question: 'WHAT PAYMENT METHODS ARE AVAILABLE?',
    answer: 'Payment methods have not yet been connected. Checkout currently runs as a demo and does not collect payment.',
  },
];
</script>

<template>
  <FAQListSection :questions="questions" />
</template>
