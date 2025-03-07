import React, { useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import FeedbackCard from './feedback-card';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl';

const Feedback1: React.FC = () => {
    const t = useTranslations("feedback");
    const swiperRef = useRef<SwiperRef>(null);
    const oldinga = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const orqaga = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <>
            <div className="myContainer">
                <div className="feedback-header">
                    <div className='feedback-text'>
                        <h2 id='clients'>{t("customers-feedback")}</h2>
                        <p>{t("our-trust")}</p>
                    </div>
                    <div className="navigation-buttons">
                        <button onClick={orqaga} className='feedback_button-orqaga' >
                            Previous
                        </button>
                        <button onClick={oldinga} className='feedback_button-oldinga'>
                            Next
                        </button>
                    </div>
                </div>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={false}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Feedback1;