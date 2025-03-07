import { useTranslations } from "next-intl";
import "./seller-card.scss";
import Image from "next/image";
import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const t = useTranslations("sellerCard");

  return (
    <div
      className={`best-seller-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="best-seller-card_img">
            <Image
              src="/imgs/tshirt2.png"
              alt={t("product_name")}
              width={223}
              height={223}
              className="product-image"
            />
          </div>
          <p className="best-seller-card_text">{t("product_name")}</p>
        </div>
        <div className="card-back">
          <h6>{t("product_name")}</h6>
          <p className="best-seller-card_info">{t("material")}</p>
          <p className="best-seller-card_info">{t("sizes")}</p>
          <p className="best-seller-card_info">{t("gender")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
