import { API_ENDPOINTS } from '@/constants/app';
import type { ApiResponse } from '@/types/api';
import type { CreateOrderRequest, Order } from '@/types/order';
import { apiClient, hasApiBaseUrl } from './api';

export async function createOrder(request: CreateOrderRequest): Promise<Order> {
  if (!hasApiBaseUrl) {
    throw new Error('Checkout is in demo mode. No order has been placed or payment processed.');
  }

  const { data } = await apiClient.post<ApiResponse<Order> | Order>(API_ENDPOINTS.orders, request);
  return 'data' in data ? data.data : data;
}
