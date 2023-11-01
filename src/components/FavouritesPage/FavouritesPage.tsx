import './FavouritesPage.scss';
import { useState, useEffect, useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Card } from '../Card/card';

import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import { StorageContext } from '../StorageContext/StorageContext';

export const FavouritesPage = () => {
  const { favorites, favoritesCounter } = useContext(StorageContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="favourite-page">
      <div className="container">
        <SkeletonTheme baseColor="#161827" highlightColor="#323542">
          <div className="favourite-page__body">
            <div className="favourite-page__top">
              <a href="#back" className="link--favourites">
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
                Favourites
              </a>
              <h1 className="title">
                {favorites.length
                  ? 'Favorites'
                  : 'Favorites not selected yet'
                }
              </h1>
              <h1 className="title">
                {isLoading && (
                  <Skeleton width={250} />
                )}
              </h1>

              <p className="items-count">
                {isLoading ? (
                  <Skeleton width={50} />
                ) : (
                  `${favoritesCounter} items`
                )}
              </p>
            </div>

            <section className="cards">
              {isLoading
                ? Array.from({ length: 8 }).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="card__container" key={index}>
                    <Skeleton height={530} />
                  </div>
                ))
                : favorites?.map(favorite => (
                  <div key={favorite.id} className="card__container">
                    <Card product={favorite} />
                  </div>
                ))}
            </section>
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
};
