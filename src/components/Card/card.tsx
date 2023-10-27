import './card.scss';

import { useEffect, useState } from 'react';
import PhoneImage from './images/phone-1.svg';
import HeartIcon from './images/heart-red.svg';
import { Phone } from '../../types/Phone';

export const Card = () => {
  const [favoriteItems, setFavoriteItems] = useState<Phone[] | []>([]);

  useEffect(() => {
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    const storedFavorites = favoritesFromLocalStorage
      ? JSON.parse(favoritesFromLocalStorage) : null;

    if (storedFavorites) {
      setFavoriteItems(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addFavoritesItem = (item: Phone) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  // const removeFavoriteItem = (item) => {
  //   // const updatedFavorites = favoriteItems
  //   //   .filter((oneItem) => oneItem.id !== item.id);
  //   setFavoriteItems(prevState => prevState
  //     .filter(oneItem => oneItem.id !== item.id));
  // };

  const iphone: Phone = {
    id: 63,
    category: 'phones',
    phoneId: null,
    itemId: 'apple-iphone-11-pro-max-512gb-gold',
    name: 'Apple iPhone 11 Pro Max 512GB Gold',
    fullPrice: 2020,
    price: 1930,
    screen: "6.5' OLED",
    capacity: '512GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.webp',
  };

  return (
    <div className="card">
      <img
        src={PhoneImage}
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        className="card__img"
      />

      <h2 className="card__name">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h2>

      <div className="card__price">
        <div className="card__price__discount">$799</div>

        <div className="card__price__real">$899</div>
      </div>

      <hr className="card__hr" />

      <div className="card__properties">
        <ul className="card__properties__list">
          <li className="card__properties__item">
            <p className="card__properties__item__property">Screen</p>

            <p>5.8&quot;OLED</p>
          </li>

          <li className="card__properties__item">
            <p className="card__properties__item__property">Capacity</p>

            <p>64 GB</p>
          </li>

          <li className="card__properties__item">
            <p className="card__properties__item__property">RAM</p>

            <p>4 GB</p>
          </li>
        </ul>
      </div>
      <div className="card__buttons">
        <button type="button" className="card__buttons__button">
          Add to cart
        </button>

        <button
          onClick={() => {
            addFavoritesItem(iphone);
          }}
          type="button"
          className="card__buttons__heart"
        >
          <img
            src={HeartIcon}
            alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
            className="icon--heart"
          />
        </button>
      </div>
    </div>
  );
};
