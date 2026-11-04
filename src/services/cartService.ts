import { API_ENDPOINTS } from '@/constants/app';
import { apiClient } from './api';
import type { CartLineItem } from '@/types/cart';
import type { ApiResponse } from '@/types/api';

export async function fetchCart(): Promise<CartLineItem[]> {
  const { data } = await apiClient.get<ApiResponse<CartLineItem[]>>(API_ENDPOINTS.cart);
  return data.data;
}

export async function addCartItem(item: Pick<CartLineItem, 'variant' | 'quantity'>): Promise<void> {
  await apiClient.post(API_ENDPOINTS.cart, item);
}

export async function updateCartItem(variantId: number, quantity: number): Promise<void> {
  await apiClient.patch(`${API_ENDPOINTS.cart}/${variantId}`, { quantity });
}

export async function removeCartItem(variantId: number): Promise<void> {
  await apiClient.delete(`${API_ENDPOINTS.cart}/${variantId}`);
}
