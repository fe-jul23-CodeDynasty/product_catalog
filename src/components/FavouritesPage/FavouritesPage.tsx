import './FavouritesPage.scss';
import '../../App.scss';
import { useState, useEffect, useContext } from 'react';
import { Card } from '../Card/card';
import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import { StorageContext } from '../StorageContext/StorageContext';
import { FavouritesPageSkeletonLoader } from './FavouritesPageSkeletonLoader';
import { GoShopping } from '../GoShoppingSection/GoShopping';

export const FavouritesPage = () => {
  const { favorites, favoritesCounter } = useContext(StorageContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return isLoading ? (
    <FavouritesPageSkeletonLoader />
  ) : (
    <div className="favourite-page ">
      <div className="container">
        <div className="favourite-page__body">
          <div className="favourite-page__top">
            <a href="#back" className="link--favourites noselect">
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
            {favoritesCounter ? (
              <>
                <h1 className="title">Favorites</h1>
                <p className="items-count">{`${favoritesCounter} items`}</p>
              </>
            ) : (
              <GoShopping message="Favorites not selected yet" />
            )}
          </div>

          <section className="cards">
            {favorites?.map(favorite => (
              <div key={favorite.id} className="card__container">
                <Card product={favorite} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
