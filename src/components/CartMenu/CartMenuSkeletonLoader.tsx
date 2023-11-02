import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './CartMenu.scss';
import './CartMenu-skeleton.scss';

import { Link } from 'react-router-dom';
import BackIcon from './images/back.svg';
import { StorageContext } from '../StorageContext/StorageContext';

export const CartMenuSkeletonLoader: React.FC = () => {
  const { cart } = useContext(StorageContext);

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
                <Skeleton width={250} />
              </h1>

              {cart.length ? (
                <div className="cards-container">
                  <section className="cards">
                    {Array.from({ length: 4 }).map((_, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div className="cart-card-skeleton" key={index}>
                        <Skeleton height={117} />
                      </div>
                    ))}
                  </section>

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
                </div>
              ) : (
                <p className="empty-cart-text">
                  <Skeleton />
                </p>
              )}
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </>
  );
};
