import './CartMenu.scss';

import BackIcon from './images/back.svg';
import CloseIcon from './images/close-gray.svg';
import PhoneOne from './images/phone-1.svg';
import PhoneTwo from './images/phone-2.svg';
import PhoneThree from './images/phone-3.svg';
import CounterPlus from './images/counter-plus.svg';
import CounterMinus from './images/counter-minus.svg';

export const CartMenu = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="page__body">
          <a href="#back" className="back--link">
            <img src={BackIcon} alt="back-icon" className="back--icon" />
            Back
          </a>
          <h1 className="title">Cart</h1>

          <div className="cards-container">
            <section className="cards">
              <div className="cart-card">
                <div className="cart-card__top">
                  <button
                    type="button"
                    className="cart-card__button button-delete"
                  >
                    <img
                      src={CloseIcon}
                      alt="close-icon"
                      className="cart-card__close"
                    />
                  </button>

                  <img
                    src={PhoneOne}
                    alt="Phone-one"
                    className="cart-card__photo"
                  />

                  <p className="cart-card__text">
                    Apple iPhone 14 Pro 128GB Silver (MQ023)
                  </p>
                </div>

                <div className="cart-card__bottom">
                  <div className="cart-card__counter">
                    <button
                      type="button"
                      className="button-counter cart-card__counter--minus"
                    >
                      <img src={CounterMinus} alt="counter-icon" />
                    </button>

                    <p className="cart-card__counter--count">1</p>

                    <button
                      type="button"
                      className="button-counter cart-card__counter--plus"
                    >
                      <img src={CounterPlus} alt="counter-icon" />
                    </button>
                  </div>

                  <p className="cart-card__price">$999</p>
                </div>
              </div>

              <div className="cart-card">
                <div className="cart-card__top">
                  <button
                    type="button"
                    className="cart-card__button button-delete"
                  >
                    <img
                      src={CloseIcon}
                      alt="close-icon"
                      className="cart-card__close"
                    />
                  </button>

                  <img
                    src={PhoneTwo}
                    alt="Phone-one"
                    className="cart-card__photo"
                  />

                  <p className="cart-card__text">
                    Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)
                  </p>
                </div>

                <div className="cart-card__bottom">
                  <div className="cart-card__counter">
                    <button
                      type="button"
                      className="button-counter cart-card__counter--minus"
                    >
                      <img src={CounterMinus} alt="counter-icon" />
                    </button>
                    <p className="cart-card__counter--count">1</p>
                    <button
                      type="button"
                      className="button-counter cart-card__counter--plus"
                    >
                      <img src={CounterPlus} alt="counter-icon" />
                    </button>
                  </div>

                  <p className="cart-card__price">$859</p>
                </div>
              </div>

              <div className="cart-card">
                <div className="cart-card__top">
                  <button
                    type="button"
                    className="cart-card__button button-delete cart-card__close"
                  >
                    <img src={CloseIcon} alt="close-icon" />
                  </button>

                  <img
                    src={PhoneThree}
                    alt="Phone-one"
                    className="cart-card__photo"
                  />

                  <p className="cart-card__text">
                    Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
                  </p>
                </div>

                <div className="cart-card__bottom">
                  <div className="cart-card__counter">
                    <button
                      type="submit"
                      className="button-counter cart-card__counter--minus"
                    >
                      <img src={CounterMinus} alt="counter-icon" />
                    </button>
                    <p className="cart-card__counter--count">1</p>
                    <button
                      type="button"
                      className="button-counter cart-card__counter--plus"
                    >
                      <img src={CounterPlus} alt="counter-icon" />
                    </button>
                  </div>

                  <p className="cart-card__price">$799</p>
                </div>
              </div>
            </section>

            <div className="total-cost">
              <p className="total-cost__price">$2657</p>

              <p className="total-cost__items">Total for 3 items</p>

              <button
                type="button"
                className="button-checkout total-cost__button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
