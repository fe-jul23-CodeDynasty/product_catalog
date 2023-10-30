/* eslint-disable no-shadow */
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import './card.scss';

import HeartIcon from './images/heart-red.svg';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const { image, name, itemId, price, fullPrice, screen, capacity, ram }
    = phone;

  return (
    <div className="card">
      <Link to={`../${itemId}`} relative="path">
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
        <button type="button" className="card__buttons__button">
          Add to cart
        </button>

        <button type="button" className="card__buttons__heart">
          <img src={HeartIcon} alt="heart-icon" className="icon--heart" />
        </button>
      </div>
    </div>
  );
};
