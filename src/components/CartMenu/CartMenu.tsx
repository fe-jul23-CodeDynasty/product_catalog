import React, { useContext, useState } from 'react';
import './CartMenu.scss';

import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BackIcon from './images/back.svg';
import { CartItem } from '../CartItem/CartItem';
import { CartModal } from '../CartModal/CartModal';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { StorageContext } from '../StorageContext/StorageContext';
import { Product } from '../../types/Product';

export const CartMenu: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);

  const {
    cart,
    setCart,
    totalCost,
    setTotalCost,
    removeFromCart,
    setTotalItemsCounter,
    totalItemsCounter,
  } = useContext(StorageContext);

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="page__body">
            <Link to=".." className="back--link">
              <img src={BackIcon} alt="back-icon" className="back--icon" />
              Back
            </Link>

            <h1 className="cart-title">Cart</h1>

            {cart.length ? (
              <div className="cards-container">
                <section className="cards">
                  {cart.map((product: Product) => (
                    <CartItem
                      key={product.id}
                      product={product}
                      removeFromCart={removeFromCart}
                      setTotalCost={setTotalCost}
                      setTotalItemsCounter={setTotalItemsCounter}
                      setCart={setCart}
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
                    onClick={() => {
                      setModalActive(true);
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              <p className="empty-cart-text">No added products in cart</p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
      <CartModal
        active={modalActive}
        setActive={setModalActive}
        setCart={setCart}
      />
      <NotFoundPage />
    </>
  );
};
