import './Catalog.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import ButtonUp from '../ButtonUp/ButtonUp';

type Props = {
  itemsOnPage: number;
  categoryTitle: string;
};

export const CatalogSkeletonLoader: React.FC<Props> = ({
  itemsOnPage,
  categoryTitle,
}) => {
  return (
    <div className="phones">
      <div className="container">
        <div className="phones-page">
          <SkeletonTheme baseColor="#161827" highlightColor="#323542">
            <div className="phones-page__top">
              <Link to="/" className="link--favourites">
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
              <h1 className="title-phones">
                <Skeleton width={250} height={56} />
              </h1>
              <p className="items-count">
                <Skeleton width={50} height={21} />
              </p>
            </div>

            <div className="phones-page__wrapper">
              <div className="sort-buttons">
                <Skeleton width={176} height={57} />
                <Skeleton width={176} height={57} />
              </div>

              <section className="cards">
                {Array.from({ length: itemsOnPage }).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="card-container" key={index}>
                    <Skeleton height={530} />
                  </div>
                ))}
              </section>

              <div className="phones-page__bottom">
                <Skeleton width={380} height={60} />
              </div>
            </div>
            <div className="container-home__buttonUp">
              <ButtonUp />
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};
