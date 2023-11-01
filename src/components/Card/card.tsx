/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

import HeartIcon from './images/heart-red.svg';
import { StorageContext } from '../StorageContext/StorageContext';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { image, name, itemId, price, fullPrice, screen, capacity, ram }
    = product;

  const { addToCart, addToFavorites, setTotalItemsCounter }
    = useContext(StorageContext);

  return (
    <div className="card">
      <Link to={`../catalog/${itemId}`} relative="path">
        <img
          src={`https://product-catalog-be-qps4.onrender.com/${image}`}
          alt={itemId}
          className="card__img card-image"
        />
      </Link>

      <h2 className="card__name">{name}</h2>

      <div className="card__price">
        <div className="card__price__discount">{`$${price}`}</div>

        <div className="card__price__real">{`$${fullPrice}`}</div>
      </div>

      <hr className="card__hr" />

      <div className="card__properties">
        <ul className="card__properties__list">
          <li className="card__properties__item">
            <p className="card__properties__item__property">Screen</p>

            <p>{screen}</p>
          </li>

          <li className="card__properties__item">
            <p className="card__properties__item__property">Capacity</p>

            <p>{capacity}</p>
          </li>

          <li className="card__properties__item">
            <p className="card__properties__item__property">RAM</p>

            <p>{ram}</p>
          </li>
        </ul>
      </div>
      <div className="card__buttons">
        <button
          onClick={() => {
            addToCart(product);
            setTotalItemsCounter((prev: number) => prev + 1);
          }}
          type="button"
          className="card__buttons__button"
        >
          Add to cart
        </button>

        <button
          onClick={() => addToFavorites(product)}
          type="button"
          className="card__buttons__heart"
        >
          <img src={HeartIcon} alt="heart-icon" className="icon--heart" />
        </button>
      </div>
    </div>
  );
};
