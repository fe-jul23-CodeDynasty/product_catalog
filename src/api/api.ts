export const API_URL = 'https://product-catalog-be-qps4.onrender.com/products';

export function getPhonesByParams(params: string) {
  return fetch(API_URL + params).then(response => response.json());
}

export function getProductsByApi() {
  return fetch(`${API_URL}`).then(response => response.json());
}

export function getProductById(id: string) {
  return fetch(`${API_URL}/${id}`).then(response => response.json());
}
