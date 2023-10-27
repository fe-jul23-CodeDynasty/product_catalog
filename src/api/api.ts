const API_URL = 'https://product-catalog-be-qps4.onrender.com/products';

export function getPhones() {
  return fetch(API_URL).then(response => response.json());
}
