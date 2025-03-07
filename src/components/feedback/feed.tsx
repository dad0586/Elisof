import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode  } from 'swiper/modules';
import FeedbackCard from './feedback-card';

const Feedback1 = ()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
            768: {
                width: 640,
                slidesPerView: 1
              },
            1024: {
                width: 900,
                slidesPerView: 2
              },
            1440: {
                width: 1200,
                slidesPerView: 3
              }
        }}
      >
        <SwiperSlide><FeedbackCard/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Feedback1;
