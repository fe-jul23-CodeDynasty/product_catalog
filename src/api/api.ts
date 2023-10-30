/* eslint-disable max-len */

export const API_URL = 'https://product-catalog-be-qps4.onrender.com/products';
export const BASE_URL
  = 'https://product-catalog-be-qps4.onrender.com/products/apple-iphone-11-pro-64gb-gold';

export function getPhones() {
  return fetch(API_URL).then(response => response.json());
}

export function getPhonesById() {
  return fetch(BASE_URL).then(response => response.json());
}
