import React, { useContext, useState, useEffect } from 'react';
import './CartMenu.scss';
import './CartMenu-skeleton.scss';
import { Link } from 'react-router-dom';
import BackIcon from './images/back.svg';
import { CartItem } from '../CartItem/CartItem';
import { CartModal } from '../CartModal/CartModal';
import { StorageContext } from '../StorageContext';
import { Product } from '../../types/Product';
import { CartMenuSkeletonLoader } from './CartMenuSkeletonLoader';
import { GoShopping } from '../GoShoppingSection/GoShopping';

export const CartMenu: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    cart,
    setCart,
    totalCost,
    setTotalCost,
    removeFromCartInCart,
    setTotalItemsCounter,
    totalItemsCounter,
  } = useContext(StorageContext);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return isLoading ? (
    <CartMenuSkeletonLoader />
  ) : (
    <>
      <div className="page">
        <div className="container">
          <div className="page__body">
            <Link to=".." className="back--link noselect">
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
                      removeFromCartInCart={removeFromCartInCart}
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
                    className="button-checkout total-cost__button noselect"
                    onClick={() => setModalActive(true)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              <GoShopping message="No added products in cart" />
            )}
          </div>
        </div>
      </div>
      <CartModal
        active={modalActive}
        setActive={setModalActive}
        setCart={setCart}
      />
    </>
  );
};
