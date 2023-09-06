import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import SaleCard from './SalesCard';
import { Navigation } from 'swiper/modules';

export default function CarouselComponent() {
  return (
    <Swiper
      slidesPerView={1}
      shortSwipes
      navigation={true}
      loop={true}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="text-white">
        <SaleCard title="주점 DIVE 매출" number={1000000} />
      </SwiperSlide>
      <SwiperSlide>
        <SaleCard title="주점 HELP 매출" number={2000000} />
      </SwiperSlide>
      <SwiperSlide>
        <SaleCard title="주점 HELP 매출" number={2000000} />
      </SwiperSlide>

      {/* ... */}
    </Swiper>
  );
}
