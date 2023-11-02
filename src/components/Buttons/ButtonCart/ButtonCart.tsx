import React, { useContext } from 'react';
import { StorageContext } from '../../StorageContext/StorageContext';
import { Product } from '../../../types/Product';
import './ButtonCart.scss';

type Props = {
  product: Product;
};

export const ButtonCart: React.FC<Props> = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useContext(StorageContext);

  const isProductInCart = cart.some(oneProduct => oneProduct.id === product.id);

  return isProductInCart ? (
    <button
      onClick={() => {
        removeFromCart(product);
      }}
      type="button"
      className="button-cart-remove"
    >
      Added to cart
    </button>
  ) : (
    <button
      onClick={() => {
        addToCart(product);
      }}
      type="button"
      className="button-cart-add"
    >
      Add to cart
    </button>
  );
};
