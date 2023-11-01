import './ByCategories.scss';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import phonesCategory from './images/category-phones.png';
import tabletsCategory from './images/category-tablets.png';
import accessoriesCategory from './images/category-accessories.png';

type Props = {
  isLoading: boolean;
};

export const ByCategories: React.FC<Props> = ({ isLoading }) => (
  <section className="section section-by-category">
    <h2 className="section-by-category__title">
      {isLoading ? <Skeleton /> : 'Shop by category'}
    </h2>

    <div className="section-by-category__cards">
      <div className="category_container grid-1">
        <div className="section-by-category__card category-card">
          {isLoading ? (
            <Skeleton height={361} />
          ) : (
            <NavLink
              to="/catalog?category=phones"
              className="section-by-category__link"
            >
              <img
                className="category-card__image"
                src={phonesCategory}
                alt="Phones"
              />
              <h4 className="category-card__title">Mobile phones</h4>
            </NavLink>
          )}

          <p className="category-card__subtitle">
            {isLoading ? <Skeleton /> : '95 models'}
          </p>
        </div>
      </div>

      <div className="category_container grid-2">
        <div className="section-by-category__card category-card">
          {isLoading ? (
            <Skeleton height={361} />
          ) : (
            <NavLink
              to="/catalog?category=tablets"
              className="section-by-category__link"
            >
              <img
                className="category-card__image"
                src={tabletsCategory}
                alt=""
              />
              <h4 className="category-card__title">Tablets</h4>
            </NavLink>
          )}
          <p className="category-card__subtitle">
            {isLoading ? <Skeleton /> : '24 models'}
          </p>
        </div>
      </div>

      <div className="category_container grid-3">
        <div className="section-by-category__card category-card">
          {isLoading ? (
            <Skeleton height={361} />
          ) : (
            <NavLink
              to="/catalog?category=accessories"
              className="section-by-category__link"
            >
              <img
                className="category-card__image"
                src={accessoriesCategory}
                alt=""
              />
              <h4 className="category-card__title">Accessories</h4>
            </NavLink>
          )}
          <p className="category-card__subtitle">
            {isLoading ? <Skeleton /> : '100 models'}
          </p>
        </div>
      </div>
    </div>
  </section>
);
