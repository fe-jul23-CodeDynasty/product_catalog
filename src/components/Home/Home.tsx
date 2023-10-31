import { useState, useEffect } from 'react';
import ButtonUp from '../ButtonUp/ButtonUp';
import Loader from '../Loader/Loader';
import { PromoSlider } from '../PromoSlider/PromoSlider';
import { Slider } from '../Slider/Slider';
import { ByCategories } from '../byCategoriesSection/ByCategories';
import './home.scss';

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="wallpaper">
          <div className="container-home">
            <h1 className="container-home__h1">
              Welcome to Nice Gadgets store!
            </h1>
            <div className="container-home__slider">
              <Slider />
            </div>
            <div className="container-home__promo-slider">
              <PromoSlider title="Brand new models" />
            </div>
            <div className="container-home__by-categories">
              <ByCategories />
            </div>
            <div className="container-home__promo-slider">
              <PromoSlider title="Hot prices" />
            </div>
          </div>
        </div>
      )}
      <div className="container-home__buttonUp">
        <ButtonUp />
      </div>
    </>
  );
};
