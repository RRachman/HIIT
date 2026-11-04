import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

export const hasApiBaseUrl = Boolean(apiBaseUrl);
export const apiClient = axios.create({
  baseURL: apiBaseUrl || '/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});
