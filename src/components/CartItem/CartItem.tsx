import { useState } from 'react';
import { Phone } from '../../types/Phone';
import CloseIcon from '../CartMenu/images/close-gray.svg';
import CounterPlus from '../CartMenu/images/counter-plus.svg';
import CounterMinus from '../CartMenu/images/counter-minus.svg';
import './CartItem.scss';

type Props = {
  product: Phone;
  removeFromCart: (product: Phone) => void;
};

export const CartItem: React.FC<Props> = ({ product, removeFromCart }) => {
  const [count, setCount] = useState(1);

  const cartItemCountIncrement = () => {
    setCount(prev => prev + 1);
  };

  const cartItemCountDecrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
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
          src={product.image}
          alt={product.name}
          className="cart-card__photo"
        />

        <p className="cart-card__text">{product.name}</p>
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
          {count >= 1 ? `$${+product.price * count}` : 0}
        </p>
      </div>
    </div>
  );
};
