import { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import ButtonUp from '../ButtonUp/ButtonUp';
import { PromoSlider } from '../PromoSlider/PromoSlider';
import { Slider } from '../Slider/Slider';
import { ByCategories } from '../byCategoriesSection/ByCategories';
import './home.scss';
import { getPhonesByParams } from '../../api/api';
import { Product } from '../../types/Product';
import { HomeSkeletonLoader } from './HomeSkeletonLoader';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [brandNewModels, setBrandNewModels] = useState<Product[]>([]);
  const [hotPrices, setHotPrices] = useState<Product[]>([]);

  const newProductsParam = '/new';
  const discountProductsParam = '/discount';

  useEffect(() => {
    setIsLoading(true);

    getPhonesByParams(newProductsParam)
      .then(setBrandNewModels)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    getPhonesByParams(discountProductsParam)
      .then(setHotPrices)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return isLoading ? (
    <HomeSkeletonLoader isLoading={isLoading} />
  ) : (
    <>
      <div className="wallpaper">
        <div className="container-home">
          <h1 className="container-home__h1">Welcome to Nice Gadgets store!</h1>

          <div className="container-home__slider">
            <Slider />
          </div>
          <div className="container-home__promo-slider">
            <PromoSlider
              title="Brand new models"
              phones={brandNewModels}
              isLoading={isLoading}
            />
          </div>
          <div className="container-home__by-categories">
            <ByCategories />
          </div>
          <div className="container-home__promo-slider">
            <PromoSlider
              title="Hot prices"
              phones={hotPrices}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <div className="container-home__buttonUp">
        <ButtonUp />
      </div>
    </>
  );
};
