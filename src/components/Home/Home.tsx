import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import ButtonUp from '../ButtonUp/ButtonUp';
import { PromoSlider } from '../PromoSlider/PromoSlider';
import { Slider } from '../Slider/Slider';
import { ByCategories } from '../byCategoriesSection/ByCategories';
import './home.scss';
import { getPhonesByParams } from '../../api/api';
import { Product } from '../../types/Product';

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

  return (
    <>
      <div className="wallpaper">
        <div className="container-home">
          <SkeletonTheme baseColor="#161827" highlightColor="#323542">
            <h1 className="container-home__h1">
              {isLoading ? <Skeleton /> : 'Welcome to Nice Gadgets store!'}
            </h1>

            <div className="container-home__slider">
              {isLoading ? <Skeleton height={360} /> : <Slider />}
            </div>
            <div className="container-home__promo-slider">
              <PromoSlider
                title="Brand new models"
                phones={brandNewModels}
                isLoading={isLoading}
              />
            </div>
            <div className="container-home__by-categories">
              <ByCategories isLoading={isLoading} />
            </div>
            <div className="container-home__promo-slider">
              <PromoSlider
                title="Hot prices"
                phones={hotPrices}
                isLoading={isLoading}
              />
            </div>
          </SkeletonTheme>
        </div>
      </div>
      {/* <div className="container-home__buttonUp">
        <ButtonUp />
      </div> */}
    </>
  );
};
