import './CardItem.scss';
import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import { Description, ProductFull } from '../../types/FullProduct';
import { BASE_URL } from '../../api/api';
import { ParamsCard } from '../../types/CardParams';

type Props = {
  product: ProductFull;
};

export const CardItem: React.FC<Props> = ({ product }) => {
  const { images } = product;
  const { description } = product;
  const [selectImg, setSelectImg] = useState<string>(images[0]);

  const baseUrl = new URL(BASE_URL);

  const jsonString: Description[] = JSON.parse(description);

  return (
    <main>
      <div className="item">
        <h2 key={product.id} className="item__title">
          {product.name}
        </h2>

        <div className="item__top">
          <div className="item__top--container">
            <div className="item__top-left">
              {images.map(image => (
                <button
                  key={image}
                  type="button"
                  className={classNames('item__image', {
                    'is-active': image === selectImg,
                  })}
                  onClick={() => setSelectImg(image)}
                >
                  <img
                    src={`${baseUrl.origin}/${image}`}
                    alt={`${baseUrl.origin}/${image}`}
                    className="item__image--blocks"
                  />
                </button>
              ))}
            </div>

            <div className="item__top-center">
              <img
                src={`${baseUrl.origin}/${selectImg}`}
                alt={`${baseUrl.origin}/${selectImg}`}
                className="item__image--center"
              />
            </div>
          </div>

          <div className="item__top-right">
            <div className="item__right--available">
              <p className="item__available--text">Available colors</p>

              <div className="item__button--available">
                <button
                  type="button"
                  className="item__available--brown"
                  aria-label="send"
                />

                <button
                  type="button"
                  className="item__available--brown"
                  aria-label="send"
                />

                <button
                  type="button"
                  className="item__available--brown"
                  aria-label="send"
                />

                <button
                  type="button"
                  className="item__available--brown"
                  aria-label="send"
                />
              </div>
            </div>

            <div className="item__right--capacity">
              <p className="item__available--text">Select capacity</p>

              <div className="item__capacity-container">
                <div className="item__capacity-container--button">64 GB</div>

                <div className="item__capacity-container--button">256 GB</div>

                <div className="item__capacity-container--button">512 GB</div>
              </div>
            </div>

            <div className="item__prices">
              <div className="item__prices--amount">
                <span className="item__amount--main">$799</span>

                <span className="item__amount--cross">1199</span>
              </div>

              <div className="item__prices__button">
                <button type="submit" className="item__add--button">
                  Add to card
                </button>

                <button type="submit" className="item__favorite--button">
                  <a className="item__favorite--button-sign" href="/">
                    <img src={favourites_heart_like} alt="heart like" />
                  </a>
                </button>
              </div>
            </div>

            <div className="item__information">
              <div className="item__information--screen">
                <p className="item__information--screen-type">Screen</p>

                <p className="item__information--screen-value">6.5” OLED</p>
              </div>
              <div className="item__information--screen">
                <p className="item__information--screen-type">Screen</p>

                <p className="item__information--screen-value">6.5” OLED</p>
              </div>
              <div className="item__information--screen">
                <p className="item__information--screen-type">Screen</p>

                <p className="item__information--screen-value">6.5” OLED</p>
              </div>
              <div className="item__information--screen">
                <p className="item__information--screen-type">Screen</p>

                <p className="item__information--screen-value">6.5” OLED</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <section className="about__container">
            <h3 className="about__title">About</h3>

            <div className="about__title--content">
              {jsonString.map(des => (
                <Fragment key={des.title}>
                  <h3 className="about__content--title">{des.title}</h3>

                  {des.text.map(tex => (
                    <div
                      key={tex.slice(0, 20)}
                      className="about__content--text"
                    >
                      {tex}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </section>

          <div className="tech">
            <h3 className="tech__title">Tech specs</h3>

            <div className="tech__content">
              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Display}</p>

                <p className="tech__item--value">{product.screen}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Resolution}</p>

                <p className="tech__item--value">{product.resolution}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Processor}</p>

                <p className="tech__item--value">{product.processor}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Ram}</p>

                <p className="tech__item--value">{product.ram}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Memory}</p>

                <p className="tech__item--value">{product.capacity}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Camera}</p>

                <p className="tech__item--value">{product.camera}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Zoom}</p>

                <p className="tech__item--value">{product.zoom}</p>
              </div>

              <div className="tech__content--item">
                <p className="tech__item--type">{ParamsCard.Cell}</p>

                <p className="tech__item--value">{product.cell.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardItem;
