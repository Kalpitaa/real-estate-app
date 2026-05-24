import axios from 'axios';

// IMPORTANT: Use localhost:5000, not localhost:5173
const API_URL = import.meta.env.VITE_API_URL + '/api' || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add debug interceptor
api.interceptors.request.use(request => {
  console.log('🚀 API Request:', request.method.toUpperCase(), request.baseURL + request.url);
  console.log('📦 Request data:', request.data);
  return request;
});

api.interceptors.response.use(
  response => {
    console.log('✅ API Response:', response.status, response.data);
    return response;
  },
  error => {
    console.error('❌ API Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default api;