"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.scss";
import ContactUs from "@/components/button/contact-us/contact-us";
import { useTranslations } from "next-intl";

const images = [
  "/tshirt 2.png",
  "/tshirt2 1.png",
  "/tshirt 2.png",
  "/tshirt2 1.png",
  "/tshirt 2.png",
  "/tshirt2 1.png",
];

const AboutUs = () => {
  const t = useTranslations("About-us");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section id="about-us"> {/* ID qo'shildi */}
        <div className="myContainer">
          <div className="about-container">
            <h2>{t("section-name")}</h2>
            <div className="content">
              <div className="text-section">
                <h3>{t ("title")}</h3>
                <p> {t ("paragraph")} </p>
              </div>

              <div className="image-slider">
                <Slider {...settings}>
                  {images.map((src, index) => (
                    <div key={index}>
                      <Image src={src} alt={`Slide ${index + 1}`} width={600} height={320} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="mini-img_contern">
              {images.map((src, index) => (
                <div key={index} className="mini-img_contern_x">
                  <Image src={src} alt={`Thumbnail ${index + 1}`} width={80} height={80} />
                </div>
              ))}
            </div>

            <div className="about-contactUs_btn">
              <ContactUs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;