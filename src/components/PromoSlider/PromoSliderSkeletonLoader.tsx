import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PromoSlider.scss';
import { Navigation } from 'swiper/modules';

type Props = {
  isLoading: boolean;
};

export const PromoSliderSkeletonLoader: React.FC<Props> = ({ isLoading }) => {
  return (
    <div className="promo-slider">
      <h3 className="promo-title">
        <Skeleton />
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
        {Array.from({ length: 4 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <Skeleton height={530} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
