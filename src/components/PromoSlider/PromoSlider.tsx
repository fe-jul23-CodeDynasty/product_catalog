import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PromoSlider.scss';
import { Navigation } from 'swiper/modules';

import { Card } from '../Card/card';

type Props = {
  title: string;
};

export const PromoSlider: React.FC<Props> = ({ title }) => {
  return (
    <div className="promo-slider">
      <h3 className="promo-title">{title}</h3>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.5}
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        navigation
        pagination
        className="promo-swiper swiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
