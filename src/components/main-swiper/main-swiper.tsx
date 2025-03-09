"use client";
import "./main-swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Tarjima uchun import
import ContactUs from "../button/contact-us/contact-us";

const MySwiper = () => {
  const t = useTranslations("swiper");

  return (
    <>
      <section>
        <div className="mt-20 pt-5">
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
                      src="/imgs/image.png"
                      alt="T-shirts"
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="main-swiper_text">
                    {t("title")} <br />
                    {t("subtitle")}
                    <div className="main-swiper_text_button">
                      <ContactUs />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="main-swiper myContainer">
                  <div className="main-swiper_img">
                    <Image
                      src="/imgs/image.png"
                      alt="T-shirts"
                      width={600}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="main-swiper_text">
                    {t("title")} <br />
                    {t("subtitle")}
                    <div className="main-swiper_text_button">
                      <ContactUs />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="main-swiper_background"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySwiper;
