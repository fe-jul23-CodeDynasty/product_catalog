import './ByCategories.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

export const ByCategoriesSkeletonLoader: React.FC = () => (
  <section className="section section-by-category">
    <h2 className="section-by-category__title">
      <Skeleton />
    </h2>

    <div className="section-by-category__cards">
      <div className="category_container grid-1">
        <div className="section-by-category__card category-card">
          <Skeleton height={361} />

          <p className="category-card__subtitle">
            <Skeleton />
          </p>
        </div>
      </div>

      <div className="category_container grid-2">
        <div className="section-by-category__card category-card">
          <Skeleton height={361} />
          <p className="category-card__subtitle">
            <Skeleton />
          </p>
        </div>
      </div>

      <div className="category_container grid-3">
        <div className="section-by-category__card category-card">
          <Skeleton height={361} />
          <p className="category-card__subtitle">
            <Skeleton />
          </p>
        </div>
      </div>
    </div>
  </section>
);
