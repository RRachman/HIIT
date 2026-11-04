<script setup lang="ts">
import AppButton from '@/components/atoms/AppButton.vue';
import AppInput from '@/components/atoms/AppInput.vue';
import type { CustomerDetails, ShippingAddress } from '@/types/order';

const props = defineProps<{
  customer: CustomerDetails;
  address: ShippingAddress;
  submitting: boolean;
  apiConnected: boolean;
  message: string;
  error: boolean;
}>();

const emit = defineEmits<{
  'update:customer': [value: CustomerDetails];
  'update:address': [value: ShippingAddress];
  submit: [];
}>();

function updateCustomer<K extends keyof CustomerDetails>(key: K, value: CustomerDetails[K]) {
  emit('update:customer', { ...props.customer, [key]: value });
}

function updateAddress<K extends keyof ShippingAddress>(key: K, value: ShippingAddress[K]) {
  emit('update:address', { ...props.address, [key]: value });
}
</script>

<template>
  <form class="checkout-form" @submit.prevent="emit('submit')">
    <section class="checkout-section">
      <h2>CONTACT INFORMATION</h2>
      <div class="form-grid">
        <AppInput id="first-name" :model-value="customer.firstName" label="First name" autocomplete="given-name" required @update:model-value="updateCustomer('firstName', $event)" />
        <AppInput id="last-name" :model-value="customer.lastName" label="Last name" autocomplete="family-name" required @update:model-value="updateCustomer('lastName', $event)" />
        <AppInput id="checkout-email" :model-value="customer.email" label="Email" type="email" autocomplete="email" required @update:model-value="updateCustomer('email', $event)" />
        <AppInput id="checkout-phone" :model-value="customer.phone" label="Phone" type="tel" autocomplete="tel" required @update:model-value="updateCustomer('phone', $event)" />
      </div>
    </section>
    <section class="checkout-section">
      <h2>SHIPPING ADDRESS</h2>
      <div class="form-grid">
        <AppInput id="shipping-address" :model-value="address.address" label="Address" autocomplete="address-line1" required @update:model-value="updateAddress('address', $event)" />
        <AppInput id="shipping-apartment" :model-value="address.apartment ?? ''" label="Apartment, suite, etc. (optional)" autocomplete="address-line2" @update:model-value="updateAddress('apartment', $event)" />
        <AppInput id="shipping-city" :model-value="address.city" label="City" autocomplete="address-level2" required @update:model-value="updateAddress('city', $event)" />
        <AppInput id="shipping-region" :model-value="address.region" label="State / region" autocomplete="address-level1" required @update:model-value="updateAddress('region', $event)" />
        <AppInput id="shipping-postal" :model-value="address.postalCode" label="Postal code" autocomplete="postal-code" required @update:model-value="updateAddress('postalCode', $event)" />
        <AppInput id="shipping-country" :model-value="address.country" label="Country" autocomplete="country-name" required @update:model-value="updateAddress('country', $event)" />
      </div>
    </section>
    <section class="checkout-section">
      <h2>PAYMENT</h2>
      <div class="status-panel">
        <strong>Payment method placeholder</strong>
        <p class="text-muted payment-note">
          {{ apiConnected ? 'Payment processing is not configured in this frontend.' : 'Demo mode: no payment will be collected.' }}
        </p>
      </div>
    </section>
    <AppButton type="submit" :disabled="submitting">
      {{ submitting ? 'SUBMITTING…' : apiConnected ? 'SUBMIT ORDER' : 'CONTINUE DEMO CHECKOUT' }}
    </AppButton>
    <p v-if="message" class="form-message" :class="error ? 'form-message--error' : 'form-message--success'" role="status">
      {{ message }}
    </p>
  </form>
</template>
