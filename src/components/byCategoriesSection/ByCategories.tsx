import './ByCategories.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import phonesCategory from './images/category-phones.png';
import tabletsCategory from './images/category-tablets.png';
import accessoriesCategory from './images/category-accessories.png';

export const ByCategories: React.FC = () => (
  <section className="section section-by-category">
    <h2 className="section-by-category__title">Shop by category</h2>

    <div className="section-by-category__cards">
      <div className="category_container grid-1">
        <div className="section-by-category__card category-card">
          <NavLink to="/catalog/phones" className="section-by-category__link">
            <img
              className="category-card__image"
              src={phonesCategory}
              alt="Phones"
            />
            <h4 className="category-card__title">Mobile phones</h4>
          </NavLink>

          <p className="category-card__subtitle">95 models</p>
        </div>
      </div>

      <div className="category_container grid-2">
        <div className="section-by-category__card category-card">
          <NavLink to="/catalog/tablets" className="section-by-category__link">
            <img
              className="category-card__image"
              src={tabletsCategory}
              alt=""
            />
            <h4 className="category-card__title">Tablets</h4>
          </NavLink>

          <p className="category-card__subtitle">24 models</p>
        </div>
      </div>

      <div className="category_container grid-3">
        <div className="section-by-category__card category-card">
          <NavLink
            to="/catalog/accessories"
            className="section-by-category__link"
          >
            <img
              className="category-card__image"
              src={accessoriesCategory}
              alt=""
            />
            <h4 className="category-card__title">Accessories</h4>
          </NavLink>

          <p className="category-card__subtitle">100 models</p>
        </div>
      </div>
    </div>
  </section>
);
