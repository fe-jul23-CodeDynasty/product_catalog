import { useState, useEffect, useContext } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { PromoSlider } from '../PromoSlider/PromoSlider';
import { Slider } from '../Slider/Slider';
import { ByCategories } from '../byCategoriesSection/ByCategories';
import './home.scss';
import { getPhonesByParams } from '../../api/api';
import { Product } from '../../types/Product';
import { HomeSkeletonLoader } from './HomeSkeletonLoader';
import { StorageContext } from '../StorageContext/StorageContext';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [brandNewModels, setBrandNewModels] = useState<Product[]>([]);
  const [hotPrices, setHotPrices] = useState<Product[]>([]);

  const newProductsParam = '/new';
  const discountProductsParam = '/discount';

  const { errorNotify } = useContext(StorageContext);

  useEffect(() => {
    setIsLoading(true);

    getPhonesByParams(newProductsParam)
      .then(setBrandNewModels)
      .catch(() => errorNotify('No new product information found'));

    getPhonesByParams(discountProductsParam)
      .then(setHotPrices)
      .catch(() => errorNotify('No product discount information found'))
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
    </>
  );
};
