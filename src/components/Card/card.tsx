import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

import classNames from 'classnames';
import HeartIcon from './images/heart-red.svg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import { StorageContext } from '../StorageContext/StorageContext';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { category, image, name, itemId, price, fullPrice, screen, capacity, ram }
    = product;

  const { addToCart, addToFavorites, favorites } = useContext(StorageContext);

  const isProductFavorite = favorites.some(
    oneProduct => oneProduct.id === product.id,
  );

  return (
    <div className="card">
      <Link to={`/catalog/${category}/${itemId}`}>
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
          }}
          type="button"
          className="card__buttons__button"
        >
          Add to cart
        </button>

        <button
          onClick={() => addToFavorites(product)}
          type="button"
          className={classNames('card__buttons__heart', {
            'card__buttons__heart--active': isProductFavorite,
          })}
        >
          <img
            src={isProductFavorite ? HeartIcon : favourites_heart_like}
            alt="heart-icon"
            className="icon--heart"
          />
        </button>
      </div>
    </div>
  );
};
