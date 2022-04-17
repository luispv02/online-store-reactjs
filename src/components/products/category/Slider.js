import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/images/slider1.jpg'
import slide2 from '../../../assets/images/slider2.jpg'
import slide3 from '../../../assets/images/slider3.jpg'

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="container-img"><img src={slide1}/></SwiperSlide>
        <SwiperSlide className="container-img"><img src={slide2}/></SwiperSlide>
        <SwiperSlide className="container-img"><img src={slide3}/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider