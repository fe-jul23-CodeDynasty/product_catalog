import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { PromoSliderSkeletonLoader } from '../PromoSlider';
import './home.scss';
import { ByCategoriesSkeletonLoader } from '../byCategoriesSection';

type Props = {
  isLoading: boolean;
};

export const HomeSkeletonLoader: React.FC<Props> = ({ isLoading }) => {
  return (
    <>
      <div className="wallpaper">
        <div className="container-home">
          <SkeletonTheme baseColor="#161827" highlightColor="#323542">
            <h1 className="container-home__h1">
              <Skeleton width={800} />
            </h1>

            <div className="container-home__slider">
              <Skeleton height={360} />
            </div>
            <div className="container-home__promo-slider">
              <PromoSliderSkeletonLoader isLoading={isLoading} />
            </div>
            <div className="container-home__by-categories">
              <ByCategoriesSkeletonLoader />
            </div>
            <div className="container-home__promo-slider">
              <PromoSliderSkeletonLoader isLoading={isLoading} />
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </>
  );
};
