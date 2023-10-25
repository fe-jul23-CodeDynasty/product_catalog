import './FavouritesPage.scss';
import { Card } from '../Card/card';

import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';

export const FavouritesPage = () => {
  return (
    <div className="favourite-page">
      <div className="container">
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
            <h1 className="title">Favourites</h1>
            <p className="items-count">5 items</p>
          </div>

          <section className="cards">
            <div className="card__container">
              <Card />
            </div>
            <div className="card__container">
              <Card />
            </div>
            <div className="card__container">
              <Card />
            </div>
            <div className="card__container">
              <Card />
            </div>
            <div className="card__container">
              <Card />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
