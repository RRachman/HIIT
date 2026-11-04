import { API_ENDPOINTS } from '@/constants/app';
import { mockProducts } from '@/data/mockProducts';
import type { Product } from '@/types/product';
import type { ApiResponse } from '@/types/api';
import { apiClient, hasApiBaseUrl } from './api';

export async function getProducts(): Promise<Product[]> {
  if (!hasApiBaseUrl) return mockProducts;

  const { data } = await apiClient.get<ApiResponse<Product[]> | Product[]>(API_ENDPOINTS.products);
  return Array.isArray(data) ? data : data.data;
}

export async function getProduct(id: number): Promise<Product | undefined> {
  if (!hasApiBaseUrl) return mockProducts.find((product) => product.id === id);

  const { data } = await apiClient.get<ApiResponse<Product> | Product>(`${API_ENDPOINTS.products}/${id}`);
  return 'data' in data ? data.data : data;
}
