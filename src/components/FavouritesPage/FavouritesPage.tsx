/* eslint-disable no-console */
import './FavouritesPage.scss';
import { useState, useEffect } from 'react';
import { Card } from '../Card/card';

import ArrowRightIcon from './images/arrow-right.svg';
import HomeIcon from './images/home.svg';
import { getPhones } from '../../api/api';
import { Phone } from '../../types/Phone';

export const FavouritesPage = () => {
  const [phones, setPhones] = useState<Phone[]>();

  useEffect(() => {
    getPhones()
      .then(res => {
        setPhones(res.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
            {phones?.slice(0, 6)?.map(phone => (
              <div className="card__container">
                <Card phone={phone} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
