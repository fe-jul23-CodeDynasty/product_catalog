import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '../CartMenu/images/close-gray.svg';
import CounterPlus from '../CartMenu/images/counter-plus.svg';
import CounterMinus from '../CartMenu/images/counter-minus.svg';
import '../../App.scss';
import './CartItem.scss';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
  removeFromCartInCart: (product: Product) => void;
  setTotalCost: React.Dispatch<React.SetStateAction<number>>;
  setTotalItemsCounter: React.Dispatch<React.SetStateAction<number>>;
  setCart: any;
};

export const CartItem: React.FC<Props> = ({
  product,
  removeFromCartInCart,
  setTotalCost,
  setTotalItemsCounter,
  setCart,
}) => {
  const { name: productName, image, price, itemId, category } = product;
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

  const totalPrice = useMemo(() => {
    return +price * count;
  }, [price, count]);

  return (
    <div className="cart-card">
      <div className="cart-card__top">
        <button
          type="button"
          className="cart-card__button button-delete noselect"
          onClick={() => {
            setTotalItemsCounter((prev: number) => prev - count);
            removeFromCartInCart(product);
          }}
        >
          <img src={CloseIcon} alt="close-icon" className="cart-card__close" />
        </button>

        <Link to={`/catalog/${category}/${itemId}`}>
          <img
            src={`https://product-catalog-be-qps4.onrender.com/${image}`}
            alt={productName}
            className="cart-card__photo noselect"
          />
        </Link>

        <Link
          to={`/catalog/${category}/${itemId}`}
          relative="path"
          className="cart-card__text"
        >
          {productName}
        </Link>
      </div>

      <div className="cart-card__bottom">
        <div className="cart-card__counter noselect">
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

        <p className="cart-card__price">{count >= 1 ? `$${totalPrice}` : 0}</p>
      </div>
    </div>
  );
};
