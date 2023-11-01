import React, { useContext, useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './CartMenu.scss';
import './CartMenu-skeleton.scss';

import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BackIcon from './images/back.svg';
import { CartItem } from '../CartItem/CartItem';
import { CartModal } from '../CartModal/CartModal';
import { StorageContext } from '../StorageContext/StorageContext';
import { Product } from '../../types/Product';
import ButtonUp from '../ButtonUp/ButtonUp';

export const CartMenu: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    cart,
    setCart,
    totalCost,
    setTotalCost,
    removeFromCart,
    setTotalItemsCounter,
    totalItemsCounter,
  } = useContext(StorageContext);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="page__body">
            <Link to=".." className="back--link">
              <img src={BackIcon} alt="back-icon" className="back--icon" />
              Back
            </Link>

            <SkeletonTheme baseColor="#161827" highlightColor="#323542">
              <h1 className="cart-title">
                {isLoading ? <Skeleton width={250} /> : 'Cart'}
              </h1>

              {cart.length ? (
                <div className="cards-container">
                  <section className="cards">
                    {isLoading
                      ? Array.from({ length: 4 }).map((_, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="cart-card-skeleton" key={index}>
                          <Skeleton height={117} />
                        </div>
                      ))
                      : cart.map((product: Product) => (
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

                  {isLoading ? (
                    <div className="total-cost-skeleton">
                      <p className="total-cost__price">
                        <Skeleton />
                      </p>
                      <p className="total-cost__items">
                        <Skeleton />
                      </p>

                      <Skeleton
                        className="
                        button-checkout-skeleton
                        total-cost-skeleton__button"
                      />
                    </div>
                  ) : (
                    <div className="total-cost">
                      <p className="total-cost__price">{`$${totalCost}`}</p>

                      <p className="total-cost__items">
                        {`Total for ${totalItemsCounter} items`}
                      </p>

                      <button
                        type="button"
                        className="button-checkout total-cost__button"
                        onClick={() => setModalActive(true)}
                      >
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="empty-cart-text">No added products in cart</p>
              )}
              <div className="container-home__buttonUp">
                <ButtonUp />
              </div>
            </SkeletonTheme>
          </div>
        </div>
      </div>
      <ToastContainer />
      <CartModal
        active={modalActive}
        setActive={setModalActive}
        setCart={setCart}
      />
    </>
  );
};
