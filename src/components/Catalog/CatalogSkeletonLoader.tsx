import './CatalogSkeletonLoader.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';

type Props = {
  itemsOnPage: number;
  categoryTitle: string;
};

export const CatalogSkeletonLoader: React.FC<Props> = ({
  itemsOnPage,
  categoryTitle,
}) => {
  return (
    <div className="phones-skeleton">
      <div className="container">
        <div className="phones-page-skeleton">
          <SkeletonTheme baseColor="#161827" highlightColor="#323542">
            <div className="phones-page-skeleton__top">
              <Link to="/" className="link--favourites-skeleton">
                <img
                  src={HomeIcon}
                  alt="home-icon"
                  className="icon--home link--favourites__icon"
                />
                <img
                  src={ArrowRightIcon}
                  alt="arrow-right-icon"
                  className="icon--arrow-right link--favourites__icon"
                />
                {categoryTitle}
              </Link>
              <h1 className="title-phones-skeleton">
                <Skeleton width={500} />
              </h1>
              <p className="items-count-skeleton">
                <Skeleton width={80} height={21} />
              </p>
            </div>

            <div className="phones-page-skeleton__wrapper">
              <div className="sort-buttons-skeleton catalog-buttons-skeleton">
                <Skeleton width={176} height={18} />
                <Skeleton width={176} height={18} />
              </div>

              <div className="sort-buttons-skeleton">
                <Skeleton width={176} height={38} />
                <Skeleton width={176} height={38} />
              </div>

              <section className="cards">
                {Array.from({ length: itemsOnPage }).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="card-container" key={index}>
                    <Skeleton height={530} />
                  </div>
                ))}
              </section>

              <div className="phones-page-skeleton__bottom">
                <Skeleton width={380} height={60} />
              </div>
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};
