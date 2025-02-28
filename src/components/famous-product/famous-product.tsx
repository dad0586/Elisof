"use client";
import { useState } from "react";
import ContactUs from "../button/contact-us/contact-us";
import "./famous-product.scss";

const bs_cards = ["./imgs/tshirt2 1.png", "./imgs/tshirt 2.png", "./imgs/tshirt2 1.png", "./imgs/tshirt 2.png"];

const FamouProduct = () => {
    const [mainImage, setMainImage] = useState("./imgs/tshirt 2.png");

    return (
        <>
            <section>

                
                <div className="famous-product">
                    <div className="myContainer">
                        <div className="famous-product_main">
                            <div className="famous-product_img">
                                <img src={mainImage} alt="T-shirts" />
                            </div>
                            <div className="famous-product_about">
                                <button>Famous product</button>
                                <p className="famous-product_about_title">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio,
                                    non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.
                                </p>
                                <ContactUs />
                                <div className="bs_card">
                                    {bs_cards.map((imgSrc, index) => (
                                        <img
                                            src={imgSrc}
                                            alt="T-shirts"
                                            key={index}
                                            onClick={() => setMainImage(imgSrc)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FamouProduct;
