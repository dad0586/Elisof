"use client";
import "./seller-card.scss";
import Image from "next/image";

const Card = () => {
  return (
    <div className="best-seller-card">
      <div className="best-seller-card_img">
        <Image
          src="/tshirt 2.png"
          alt="T-shirt green"
          width={223}
          height={223}
          className="product-image"
        />
      </div>
      <div className="best-seller-card_mini_img">
        <div className="best-seller-card_img_eye">
          <Image src="/eye.png" alt="View" width={16} height={16} />
        </div>
        <div className="best-seller-card_img_docs">
          <Image src="/docs.png" alt="Docs" width={16} height={16} />
        </div>
      </div>
      <p className="best-seller-card_text">T-shirt green</p>
    </div>
  );
};

export default Card;
