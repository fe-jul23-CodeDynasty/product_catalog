import './CardItem.scss';
import '../../App.scss';
import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import favourites_heart_like from '../../images/favourites_heart_like.svg';
import { Description, ProductFull } from '../../types/FullProduct';
import { API_URL, getPhonesByParams } from '../../api/api';
import { ParamsCard } from '../../types/CardParams';
import { PromoSlider } from '../PromoSlider/PromoSlider';
import { Product } from '../../types/Product';

type Props = {
  product: ProductFull;
};

export const CardItem: React.FC<Props> = ({ product }) => {
  const { id, name, images, description, colorsAvailable, capacityAvailable }
    = product;
  const [selectImg, setSelectImg] = useState<string>(images[0]);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const recommendedProductsParams = `/${id}/recommended`;

  useEffect(() => {
    setIsLoading(true);

    getPhonesByParams(recommendedProductsParams)
      .then(setRecommended)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [product]);

  const baseUrl = new URL(API_URL);

  const normalizeParam = (param: string): string => {
    return param.split(' ').join('-');
  };

  useEffect(() => {
    setSelectImg(images[0]);
  }, [images]);

  const getLink = (newValue: string, type: 'capacity' | 'color') => {
    const paramsFromId = id.split('-');
    let position = 0;

    for (let i = paramsFromId.length - 1; i > 0; i--) {
      if (!Number.isNaN(parseInt(paramsFromId[i], 10))) {
        position = i;

        break;
      }
    }

    if (type === 'color') {
      position += 1;
      paramsFromId.splice(position);
    }

    const fixValue = normalizeParam(newValue);

    paramsFromId[position] = fixValue.toLowerCase();

    return `../${paramsFromId.join('-')}`;
  };

  const jsonString: Description[] = JSON.parse(description);

  return (
    <main>
      <div className="item">
        <h2 key={id} className="item__title">
          {name}
        </h2>

        <div className="item__top">
          <div className="item__top--container noselect">
            <div className="item__top-left">
              {images.map(image => (
                <button
                  key={image}
                  type="button"
                  className={classNames('item__image', {
                    'iss-active': image === selectImg,
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
              <span className="item__available--text">Available colors</span>

              <div className="item__button--available noselect">
                {colorsAvailable
                  .sort((a, b) => a.localeCompare(b))
                  .map(color => (
                    <Link
                      to={getLink(color, 'color')}
                      relative="path"
                      key={color}
                      type="button"
                      className={`item__available item__available--${normalizeParam(
                        color,
                      )}`}
                      aria-label="send"
                    />
                  ))}
              </div>
              {/* <div className="item__top--id">
                {product.id}
              </div> */}
            </div>

            <div className="item__right--capacity">
              <span className="item__available--text">Select capacity</span>

              <div className="item__capacity-container noselect">
                {capacityAvailable.map(capacity => (
                  <Link
                    to={getLink(capacity, 'capacity')}
                    relative="path"
                    className="item__capacity-container--button"
                  >
                    {capacity}
                  </Link>
                ))}
              </div>
            </div>

            <div className="item__prices">
              <div className="item__prices--amount">
                <span className="item__amount--main">
                  {product.priceDiscount}
                </span>

                <span className="item__amount--cross">
                  {product.priceRegular}
                </span>
              </div>

              <div className="item__prices__button noselect">
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
                <p className="item__information--screen-type">
                  {ParamsCard.Display}
                </p>

                <p className="item__information--screen-value">
                  {product.screen}
                </p>
              </div>
              <div className="item__information--screen">
                <p className="item__information--screen-type">
                  {ParamsCard.Resolution}
                </p>

                <p className="item__information--screen-value">
                  {product.resolution}
                </p>
              </div>
              <div className="item__information--screen">
                <p className="item__information--screen-type">
                  {ParamsCard.Processor}
                </p>

                <p className="item__information--screen-value">
                  {product.processor}
                </p>
              </div>
              <div className="item__information--screen">
                <p className="item__information--screen-type">
                  {ParamsCard.Ram}
                </p>

                <p className="item__information--screen-value">{product.ram}</p>
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
        <div className="container-home__promo-slider">
          <PromoSlider
            title="You may also like"
            phones={recommended}
            isLoading={isLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default CardItem;
