"use client";
import { useState } from "react";
import ContactUs from "../button/contact-us/contact-us";
import "./famous-product.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";

const bs_cards: string[] = [
  "/imgs/tshirt21.png",
  "/imgs/tshirt2.png",
  "/imgs/tshirt21.png",
  "/imgs/tshirt2.png",
];

const FamousProduct: React.FC = () => {
  const [mainImage, setMainImage] = useState<string>("/imgs/tshirt2.png");
  const t = useTranslations("famous-product");

  return (
    <section>
      <div className="famous-product">
        <div className="myContainer">
          <div className="famous-product_main">
            <div className="famous-product_img">
              <Image
                src={mainImage}
                alt="T-shirts"
                width={450} 
                height={450} 
                className="famous-product_img_inner" 
              />
            </div>
            <div className="famous-product_about">
              <button>{t("button")}</button>
              <p className="famous-product_about_title">{t("title")}</p>
              <ContactUs />
              <div className="bs_card">
                {bs_cards.map((imgSrc: string, index: number) => (
                  <Image
                    key={index}
                    src={imgSrc}
                    alt="T-shirts"
                    width={70}
                    height={70}
                    className="bs_card_img" 
                    onClick={() => setMainImage(imgSrc)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamousProduct;