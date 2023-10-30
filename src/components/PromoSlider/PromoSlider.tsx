/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PromoSlider.scss';
import { Navigation } from 'swiper/modules';

import { Card } from '../Card/card';
import { getPhones } from '../../api/api';
import { Phone } from '../../types/Phone';

type Props = {
  title: string;
};

export const PromoSlider: React.FC<Props> = ({ title }) => {
  const [phones, setPhones] = useState<Phone[]>();

  useEffect(() => {
    getPhones()
      .then(res => {
        setPhones(res.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
        {phones?.map(phone => (
          <SwiperSlide>
            <Card phone={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
