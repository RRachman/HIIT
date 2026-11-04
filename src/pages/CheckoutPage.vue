<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import CartSummarySection from '@/components/organisms/CartSummarySection.vue';
import CheckoutFormSection from '@/components/organisms/CheckoutFormSection.vue';
import { useCart } from '@/composables/useCart';
import { hasApiBaseUrl } from '@/services/api';
import { submitCheckout } from '@/services/checkoutService';
import type { CustomerDetails, ShippingAddress, CreateOrderRequest } from '@/types/order';

const { items, subtotal, store } = useCart();
const customer = reactive<CustomerDetails>({ firstName: '', lastName: '', email: '', phone: '' });
const address = reactive<ShippingAddress>({
  address: '',
  apartment: '',
  city: '',
  region: '',
  postalCode: '',
  country: 'United States',
});
const submitting = ref(false);
const message = ref('');
const error = ref(false);

async function submitOrder() {
  if (!hasApiBaseUrl) {
    error.value = false;
    message.value = 'Demo checkout only. No order has been placed and no payment has been processed.';
    return;
  }
  submitting.value = true;
  message.value = '';
  try {
    const request: CreateOrderRequest = {
      customer: { ...customer },
      shippingAddress: { ...address },
      items: items.value,
      paymentMethod: 'pending',
    };
    const order = await submitCheckout(request);
    store.clearCart();
    message.value = `Order ${order.id} was submitted. Payment status: ${order.status}.`;
    error.value = false;
  } catch (caught) {
    error.value = true;
    message.value = caught instanceof Error ? caught.message : 'Checkout could not be completed.';
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <section class="section-spacing page-width">
    <header class="page-heading"><h1 class="page-title">CHECKOUT.</h1></header>
    <div v-if="!items.length" class="cart-empty">
      <p class="text-muted empty-cart-message">Your bag is currently empty.</p>
      <RouterLink to="/shop" class="btn btn-primary">SHOP RUNNING GEAR</RouterLink>
    </div>
    <div v-else class="checkout-layout">
      <CheckoutFormSection
        :customer="customer"
        :address="address"
        :submitting="submitting"
        :api-connected="hasApiBaseUrl"
        :message="message"
        :error="error"
        @update:customer="Object.assign(customer, $event)"
        @update:address="Object.assign(address, $event)"
        @submit="submitOrder"
      />
      <CartSummarySection :items="items" :subtotal="subtotal" checkout />
    </div>
  </section>
</template>
