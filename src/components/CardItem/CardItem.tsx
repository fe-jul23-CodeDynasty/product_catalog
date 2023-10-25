import './CardItem.scss';
import cardImage from './card-image/slider-photo1.svg';
import centerImage from './card-image/iphoneGold.jpg';

function CardItem() {
  return (
    <main>
      <div className="card__container">
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
              <p className="available__text">Available colors</p>
              <div className="button__available">
                <button
                  type="button"
                  className="available__brown"
                  aria-label="send"
                />
                <button
                  type="button"
                  className="available__brown"
                  aria-label="send"
                />
                <button
                  type="button"
                  className="available__brown"
                  aria-label="send"
                />
                <button
                  type="button"
                  className="available__brown"
                  aria-label="send"
                />
              </div>
            </div>

            <div className="card__right--capacity">
              <p className="available__text">Select capacity</p>
              <div className="capacity__container">
                <div className="capacity__container--button">64 GB</div>
                <div className="capacity__container--button">256 GB</div>
                <div className="capacity__container--button">512 GB</div>
              </div>
            </div>

            <div className="card__prices">
              <div className="card__prices--amount">
                <span className="amount--main">$799</span>
                <span className="amount--cross">1199</span>
              </div>
              <div className="prices__button">
                <button type="submit" className="add__button">
                  Add to card
                </button>

                <button type="submit" className="favorite__button">
                  <p className="favorite__button--sign">&#10085;</p>
                </button>
              </div>
            </div>

            <div className="card__information">
              <div className="card__information--screen">
                <p className="information__type">Screen</p>
                <p className="information__value">6.5” OLED</p>
              </div>
              <div className="card__information--screen">
                <p className="information__type">Screen</p>
                <p className="information__value">6.5” OLED</p>
              </div>
              <div className="card__information--screen">
                <p className="information__type">Screen</p>
                <p className="information__value">6.5” OLED</p>
              </div>
              <div className="card__information--screen">
                <p className="information__type">Screen</p>
                <p className="information__value">6.5” OLED</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about__container">
          <section className="about">
            <h3 className="about__title">About</h3>
            <div className="about__title--content">
              <p className="content__title">And then there was Pro</p>
              <p className="content__text">
                A transformative triple‑camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>

            <div className="about__title--content">
              <p className="content__title">And then there was Pro</p>
              <p className="content__text">
                A transformative triple‑camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>

            <div className="about__title--content">
              <p className="content__title">And then there was Pro</p>
              <p className="content__text">
                A transformative triple‑camera system that adds tons of
                capability without complexity. An unprecedented leap in battery
                life. And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
              </p>
            </div>
          </section>

          <div className="tech">
            <h3 className="about__title">Tech specs</h3>

            <div className="tech__content">
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
              <div className="tech__content--item">
                <p className="item--type">Screen</p>
                <p className="item--value">6.5” OLED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CardItem;
