import './CardItemSkeletonLoader.scss';
import '../../App.scss';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { PromoSliderSkeletonLoader } from '../PromoSlider';

type Props = {
  IsLoading: boolean;
};

export const CardItemSkeletonLoader: React.FC<Props> = ({ IsLoading }) => {
  return (
    <main>
      <SkeletonTheme baseColor="#161827" highlightColor="#323542">
        <div className="item-skeleton">
          <h2 className="item-skeleton__title">
            <Skeleton width={516} />
          </h2>

          <div className="item-skeleton__top">
            <div className="item-skeleton__top--container noselect">
              <div className="item-skeleton__top-left">
                <Skeleton width={100} height={430} />
              </div>

              <div className="item-skeleton__top-center">
                <Skeleton width={370} height={430} />
              </div>
            </div>

            <div className="item-skeleton__top-right">
              <div className="item-skeleton__right--available">
                <span className="item-skeleton__available--text">
                  <Skeleton width={100} />
                </span>

                <div className="item-skeleton__button--available noselect">
                  <Skeleton height={80} width={558} />
                </div>
              </div>

              <div className="item-skeleton__right--capacity">
                <span className="item-skeleton__available--text">
                  <Skeleton width={100} />
                </span>

                <div className="item-skeleton__capacity-container noselect">
                  <Skeleton height={80} width={558} />
                </div>
              </div>

              <div className="item-skeleton__prices">
                <Skeleton height={162} width={558} />
              </div>
            </div>
          </div>

          <div className="about-skeleton">
            <section className="about-skeleton__container">
              <h3 className="about-skeleton__title">
                <Skeleton width={100} />
              </h3>

              <div className="about-skeleton__title--content">
                <Skeleton height={430} width={512} />
              </div>
            </section>

            <div className="tech-skeleton">
              <h3 className="tech-skeleton__title">
                <Skeleton width={100} />
              </h3>

              <div className="tech-skeleton__content">
                <Skeleton height={430} width={560} />
              </div>
            </div>
          </div>
          <div className="container-home__promo-slider">
            <PromoSliderSkeletonLoader isLoading={IsLoading} />
          </div>
        </div>
      </SkeletonTheme>
    </main>
  );
};
