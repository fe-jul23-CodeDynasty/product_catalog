import { PromoSlider } from '../PromoSlider/PromoSlider';
import { Slider } from '../Slider/Slider';
import { ByCategories } from '../byCategoriesSection/ByCategories';
import './home.scss';

export const Home = () => {
  return (
    <>
      <div className="wallpapper">
        <div className="container-home">
          <h1 className="container-home__h1">Welcome to Nice Gadgets store!</h1>
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
    </>
  );
};
