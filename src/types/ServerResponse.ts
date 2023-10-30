import { Phone } from './Phone';

export type ServerResponse = {
  currentPage: number,
  products: Phone[],
  totalItems: number,
  totalPages: number,
};
