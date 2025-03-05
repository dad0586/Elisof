"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.scss";
import ContactUs from "@/components/button/contact-us/contact-us";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";


interface SliderSettings {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  // autoplay: boolean;
  // autoplaySpeed: number;
  arrows: boolean;
  beforeChange?: (current: number, next: number) => void;
}

const images: string[] = [
  "/svgs/Image.svg",
  "/svgs/Image (1).svg",
  "/svgs/Image (2).svg",
  "/svgs/Image (3).svg",
  "/svgs/Image (4).svg",
];

const AboutUs: React.FC = () => {
  const t = useTranslations("About-us");
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0); 

  const settings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next); 
    },
  };


  const handleMiniImageClick = (index: number): void => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); 
      setCurrentSlide(index);
    }
  };

  return (
    <section>
      <div id="about-us">
        <div className="myContainer">
          <div className="about-container">
            <h2>{t("section-name")}</h2>
            <div className="content">
              <div className="text-section">
                <h3>{t("title")}</h3>
                <p>{t("paragraph")}</p>
              </div>

              <div className="image-slider">
                <Slider {...settings} ref={sliderRef}>
                  {images.map((src, index) => (
                    <div key={index}>
                      <Image src={src} alt={`Slide ${index + 1}`} width={600} height={320} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="mini-img_container">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`mini-img_item ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleMiniImageClick(index)}
                >
                  <Image src={src} alt={`Thumbnail ${index + 1}`} width={80} height={80} />
                  <div className="active-bar"></div> 
                </div>
              ))}
            </div>

            <div className="about-contactUs_btn">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;