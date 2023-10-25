import './card.scss';

export const Card = () => {
  return (
    <div className="card">
      <img
        src="./images/iPhoneXS.png"
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        className="card__img"
      />

      <h2 className="card__name">
        Apple iPhone Xs 64GB Silver
        <br />
        (iMT9G2FS/A)
      </h2>

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

        <button type="button" className="card__buttons__heart">
          H
        </button>
      </div>
    </div>
  );
};
