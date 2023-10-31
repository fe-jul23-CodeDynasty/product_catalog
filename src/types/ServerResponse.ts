import { Product } from './Product';

export type ServerResponse = {
  currentPage: number;
  products: Product[];
  totalItems: number;
  totalPages: number;
};
