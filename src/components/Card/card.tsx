import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';
import '../../App.scss';

import { Product } from '../../types/Product';
import { ButtonCart } from '../Buttons/ButtonCart/ButtonCart';
import { ButtonFavourite } from '../Buttons/ButtonFavourite/ButtonFavourite';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const {
    category,
    image,
    name,
    itemId,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = product;

  return (
    <div className="card">
      <Link to={`/catalog/${category}/${itemId}`}>
        <img
          src={`https://product-catalog-be-qps4.onrender.com/${image}`}
          alt={itemId}
          className="card__img card-image noselect"
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
      <div className="card__buttons noselect">
        <ButtonCart product={product} />

        <ButtonFavourite product={product} />
      </div>
    </div>
  );
};
