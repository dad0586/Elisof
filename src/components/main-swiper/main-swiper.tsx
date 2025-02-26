"use client";
import "./main-swiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const MySwiper = () => {
  return (
    <>
      <section>
        <div className="swiper-container_xxl">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            <SwiperSlide>

              <div className="main-swiper myContainer">
                <div className="main-swiper_img">
                  <Image
                    src="/image.png" // Static image files should be in the public folder
                    alt="T-shirts"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="main-swiper_text">
                  Get ready for Our <br />
                  stylist shirts
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main-swiper myContainer">
                <div className="main-swiper_img">
                  <Image
                    src="/image.png"
                    alt="T-shirts"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="main-swiper_text">
                  Get ready for Our <br />
                  stylist shirts
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="main-swiper_background"></div>
        </div>
      </section>
    </>
  );
};

export default MySwiper;
