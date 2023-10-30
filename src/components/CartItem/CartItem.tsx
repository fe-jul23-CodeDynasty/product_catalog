import React, { useState } from 'react';
import { Phone } from '../../types/Phone';
import CloseIcon from '../CartMenu/images/close-gray.svg';
import CounterPlus from '../CartMenu/images/counter-plus.svg';
import CounterMinus from '../CartMenu/images/counter-minus.svg';
import './CartItem.scss';

type Props = {
  product: Phone;
  removeFromCart: (product: Phone) => void;
  setTotalCost: React.Dispatch<React.SetStateAction<number>>;
  setTotalItemsCounter: React.Dispatch<React.SetStateAction<number>>;
  setCart: any;
};

export const CartItem: React.FC<Props> = ({
  product,
  removeFromCart,
  setTotalCost,
  setTotalItemsCounter,
  setCart,
}) => {
  const { name: productName, image, price } = product;
  const [count, setCount] = useState(product.count ? product.count : 1);

  const cartItemCountIncrement = () => {
    setCount(prev => prev + 1);
    setTotalItemsCounter(prev => prev + 1);
    setTotalCost((prev: number) => prev + +price);
    setCart((prev: any) => {
      const currentProd = prev.find((el: any) => el.id === product.id) || null;

      if (!currentProd) {
        return prev;
      }

      currentProd.count = currentProd.count ? currentProd.count + 1 : 2;

      return [...prev];
    });
  };

  const cartItemCountDecrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
      setTotalItemsCounter(prev => prev - 1);
      setTotalCost((prev: number) => prev - +price);
      setCart((prev: any) => {
        const currentProd
          = prev.find((el: any) => el.id === product.id) || null;

        if (!currentProd) {
          return prev;
        }

        currentProd.count = currentProd.count ? currentProd.count - 1 : 2;

        return [...prev];
      });
    }
  };

  return (
    <div className="cart-card">
      <div className="cart-card__top">
        <button
          type="button"
          className="cart-card__button button-delete"
          onClick={() => removeFromCart(product)}
        >
          <img src={CloseIcon} alt="close-icon" className="cart-card__close" />
        </button>

        <img
          src={`https://product-catalog-be-qps4.onrender.com/${image}`}
          alt={productName}
          className="cart-card__photo"
        />

        <p className="cart-card__text">{productName}</p>
      </div>

      <div className="cart-card__bottom">
        <div className="cart-card__counter">
          <button
            type="button"
            className="button-counter cart-card__counter--minus"
            onClick={cartItemCountDecrement}
          >
            <img src={CounterMinus} alt="counter-icon" />
          </button>

          <p className="cart-card__counter--count">{count}</p>

          <button
            type="button"
            className="button-counter cart-card__counter--plus"
            onClick={cartItemCountIncrement}
          >
            <img src={CounterPlus} alt="counter-icon" />
          </button>
        </div>

        <p className="cart-card__price">
          {count >= 1 ? `$${+price * count}` : 0}
        </p>
      </div>
    </div>
  );
};
