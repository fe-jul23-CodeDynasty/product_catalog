import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './CartMenu.scss';

import { Link } from 'react-router-dom';
import BackIcon from './images/back.svg';
import { Phone } from '../../types/Phone';
import { CartItem } from '../CartItem/CartItem';

export const CartMenu: React.FC = () => {
  const [cart, setCart] = useLocalStorage('cart', [
    {
      id: 1,
      category: 'phones',
      phoneId: null,
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.webp',
    },
    {
      id: 2,
      category: 'phones',
      phoneId: null,
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.webp',
    },
    {
      id: 3,
      category: 'phones',
      phoneId: null,
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.webp',
    },
  ]);

  const startTotalCost = cart.reduce((acc, curr) => acc + curr.price, 0);

  const [totalCost, setTotalCost] = useState(startTotalCost);
  const [totalItemsCounter, setTotalItemsCounter] = useState(cart.length);

  // const addToCart = (product:Phone) => {
  //   const updatedCart = [...cart, product];

  //   setCart(updatedCart);
  // };

  const removeFromCart = (product: Phone) => {
    const updatedCart = cart.filter(item => item !== product);

    setCart(updatedCart);

    const newTotalCost = updatedCart.reduce((acc, curr) => acc + curr.price, 0);

    setTotalCost(newTotalCost);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page__body">
          <Link to=".." className="back--link">
            <img src={BackIcon} alt="back-icon" className="back--icon" />
            Back
          </Link>

          <h1 className="cart-title">Cart</h1>

          <div className="cards-container">
            <section className="cards">
              {cart.map((product: Phone) => (
                <CartItem
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                  setTotalCost={setTotalCost}
                  setTotalItemsCounter={setTotalItemsCounter}
                />
              ))}
            </section>

            <div className="total-cost">
              <p className="total-cost__price">{`$${totalCost}`}</p>

              <p className="total-cost__items">
                {`Total for ${totalItemsCounter} items`}
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
