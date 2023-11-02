import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.scss';

import { Pagination, Navigation } from 'swiper/modules';

import './Slider.scss';

import firstBannerMob from './images/Banner-mob.png';
import secondBannerMob from './images/banner-phones_slider.png';
import thirdBannerMob from './images/banner-tablets1200_slider.png';

import firstBanner from './images/Banner.png';
import secondBanner from './images/banner-tablets1200.png';
import thirdBanner from './images/banner-phones.png';

export function Slider() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation
      loop
      modules={[Pagination, Navigation]}
      className="header-swiper noselect"
    >
      <SwiperSlide>
        <div className="swiper__slide slide">
          <img
            className="slide__banner-mob"
            src={firstBannerMob}
            alt="iPhone 14 Pro"
          />

          <img
            className="slide__banner-desktop"
            src={firstBanner}
            alt="iPhone 14 Pro"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper__slide slide">
          <img
            className="slide__banner-mob"
            src={secondBannerMob}
            alt="iPhone 15"
          />

          <img
            className="slide__banner-desktop"
            src={secondBanner}
            alt="iPhone 15 Price"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper__slide slide">
          <img
            className="slide__banner-mob"
            src={thirdBannerMob}
            alt="iPhone 14 Pro"
          />

          <img
            className="slide__banner-desktop"
            src={thirdBanner}
            alt="iPhone 14 Pro"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
