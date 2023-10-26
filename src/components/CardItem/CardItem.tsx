import './CardItem.scss';
// import React from 'react';
import cardImage from './card-image/slider-photo1.svg';
import centerImage from './card-image/iphoneGold.jpg';
import favourites_heart_like from '../../images/favourites_heart_like.svg';

export const CardItem = () => {
  return (
    <main>
      <div className="card">
        <h2 className="card__title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>
        <div className="card__top">
          <div className="card__top--container">
            <div className="card__top-left">
              <div className="card__image">
                <img
                  src={cardImage}
                  alt="card__image--blocks"
                  className="card__image--blocks"
                />
              </div>
              <div className="card__image">
                <img
                  src={cardImage}
                  alt="card__image--blocks"
                  className="card__image--blocks"
                />
              </div>
              <div className="card__image">
                <img
                  src={cardImage}
                  alt="card__image--blocks"
                  className="card__image--blocks"
                />
              </div>
              <div className="card__image">
                <img
                  src={cardImage}
                  alt="card__image--blocks"
                  className="card__image--blocks"
                />
              </div>
              <div className="card__image">
                <img
                  src={cardImage}
                  alt="card__image--blocks"
                  className="card__image--blocks"
                />
              </div>
            </div>
            <div className="card__top-center">
              <img
                src={centerImage}
                alt="card__image--blocks"
                className="card__image--center"
              />
            </div>
          </div>
          <div className="card__top-right">
            <div className="card__right--available">
              <p className="card__available--text">Available colors</p>
              <div className="card__button--available">
                <button
                  type="button"
                  className="card__available--brown"
                  aria-label="send"
                />
                <button
                  type="button"
                  className="card__available--brown"
                  aria-label="send"
                />
                <button
                  type="button"
                  className="card__available--brown"
                  aria-label="send"
                />
                <button
                  type="button"
                  className="card__available--brown"
                  aria-label="send"
                />
              </div>
            </div>

            <div className="card__right--capacity">
              <p className="card__available--text">Select capacity</p>
              <div className="card__capacity-container">
                <div className="card__capacity-container--button">64 GB</div>
                <div className="card__capacity-container--button">256 GB</div>
                <div className="card__capacity-container--button">512 GB</div>
              </div>
            </div>

            <div className="card__prices">
              <div className="card__prices--amount">
                <span className="card__amount--main">$799</span>
                <span className="card__amount--cross">1199</span>
              </div>
              <div className="card__prices__button">
                <button type="submit" className="card__add--button">
                  Add to card
                </button>

                <button type="submit" className="card__favorite--button">
                  <a className="card__favorite--button-sign" href="/">
                    <img src={favourites_heart_like} alt="heart like" />
                  </a>
                </button>
              </div>
            </div>

            <div className="card__information">
              <div className="card__information--screen">
                <p className="card__information--screen-type">Screen</p>
                <p className="card__information--screen-value">6.5” OLED</p>
              </div>
              <div className="card__information--screen">
                <p className="card__information--screen-type">Screen</p>
                <p className="card__information--screen-value">6.5” OLED</p>
              </div>
              <div className="card__information--screen">
                <p className="card__information--screen-type">Screen</p>
                <p className="card__information--screen-value">6.5” OLED</p>
              </div>
              <div className="card__information--screen">
                <p className="card__information--screen-type">Screen</p>
                <p className="card__information--screen-value">6.5” OLED</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <section className="about__container">
            <h3 className="about__title">About</h3>
            <div className="about__title--content">
              <p className="about__content--title">And then there was Pro</p>
              <p className="about__content--text">
                A transformative triple‑camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>

            <div className="about__title--content">
              <p className="about__content--title">And then there was Pro</p>
              <p className="about__content--text">
                A transformative triple‑camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>

            <div className="about__title--content">
              <p className="about__content--title">And then there was Pro</p>
              <p className="about__content--text">
                A transformative triple‑camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>
          </section>

          <div className="tech">
            <h3 className="tech__title">Tech specs</h3>

            <div className="tech__content">
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="tech__item--type">Screen</p>
                <p className="tech__item--value">6.5” OLED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardItem;
