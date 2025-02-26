import "./seller-card.scss";
import Image from "next/image";
import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
              src="/tshirt 2.png"
              alt="T-shirt green"
              width={223}
              height={223}
              className="product-image"
            />
          </div>
          <p className="best-seller-card_text">T-shirt green</p>
        </div>
        <div className="card-back">
          <h6>
            T-shirt green
          </h6>
          <p className="best-seller-card_info">
            Material: Cotton 100%
          </p>
          <p className="best-seller-card_info">
            Available sizes: S; M; L
          </p>
          <p className="best-seller-card_info">
            For: Male and Female
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;