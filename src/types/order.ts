import type { CartLineItem } from './cart';

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  address: string;
  apartment?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface CreateOrderRequest {
  customer: CustomerDetails;
  shippingAddress: ShippingAddress;
  items: CartLineItem[];
  paymentMethod: 'pending';
}

export interface Order {
  id: string;
  status: string;
  total: number;
}
