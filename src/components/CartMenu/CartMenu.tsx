import { useEffect, useState } from 'react';
import './CartMenu.scss';

import BackIcon from './images/back.svg';
import { API_URL } from '../../api/api';
import { Phone } from '../../types/Phone';
import { CartItem } from '../CartItem/CartItem';

function getSlicedPhones() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(items => items.products.slice(0, 6));
}

export const CartMenu: React.FC = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      getSlicedPhones()
        .then(setCart)
        .catch(error => {
          throw Error(error);
        });
    }
  }, []);

  // const addToCart = (product) => {
  //   const updatedCart = [...cart, product];

  //   setCart(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };

  const removeFromCart = (product: Phone) => {
    const updatedCart = cart.filter(item => item !== product);

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page__body">
          <a href="#back" className="back--link">
            <img src={BackIcon} alt="back-icon" className="back--icon" />
            Back
          </a>
          <h1 className="cart-title">Cart</h1>

          <div className="cards-container">
            <section className="cards">
              {cart.map((product: Phone) => (
                <CartItem
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                />
              ))}
            </section>

            <div className="total-cost">
              <p className="total-cost__price">$2657</p>

              <p className="total-cost__items">
                {`Total for ${cart.length} items`}
              </p>

              <button
                type="button"
                className="button-checkout total-cost__button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
