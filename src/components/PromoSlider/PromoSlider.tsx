import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PromoSlider.scss';
import '../../App.scss';
import { Navigation } from 'swiper/modules';
import { Card } from '../Card/card';
import { Product } from '../../types/Product';

type Props = {
  title: string;
  phones: Product[];
  isLoading: boolean;
};

export const PromoSlider: React.FC<Props> = ({ title, phones, isLoading }) => {
  return (
    <div className="promo-slider">
      <h3 className="promo-title noselect">
        {isLoading ? <Skeleton /> : title}
      </h3>

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
        navigation={!isLoading}
        pagination
        className="promo-swiper swiper"
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <Skeleton height={530} />
            </SwiperSlide>
          ))
          : phones.map(phone => (
            <SwiperSlide key={phone.id}>
              <Card product={phone} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
