"use client";
import { useState, useEffect } from "react";
import { Rate } from "antd";
import "./feedback.scss";
import { useTranslations } from "next-intl";

export default function FeedbackCustomer() {
  const [offset, setOffset] = useState(0);
  const [speed, setSpeed] = useState(1);
  const t = useTranslations("feedback");
  const cardWidth = 1110 ;
  const baseSpeed = 1; 

  const feedback = [
    { id: 1, name: t("reviews.0.name"), image: "./imgs/feedback1.png", rating: 4.5, review: t("reviews.0.review") },
    { id: 2, name: t("reviews.1.name"), image: "./imgs/feedback1.png", rating: 4, review: t("reviews.1.review") },
    { id: 3, name: t("reviews.2.name"), image: "./imgs/feedback1.png", rating: 2.5, review: t("reviews.2.review") },
    { id: 4, name: t("reviews.3.name"), image: "./imgs/feedback1.png", rating: 3.5, review: t("reviews.3.review") },
    { id: 5, name: t("reviews.4.name"), image: "./imgs/feedback1.png", rating: 1.8, review: t("reviews.4.review") },
  ];

  const duplicatedFeedback = [...feedback, ...feedback];

  useEffect(() => {
    const animationFrame = () => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + speed;
        const totalWidth = feedback.length * cardWidth;

        if (newOffset >= totalWidth) {
          return newOffset - totalWidth;
        }
        return newOffset;
      });


      setSpeed((prevSpeed) => {
        if (prevSpeed < baseSpeed) {
          return Math.min(prevSpeed + 0.05, baseSpeed); 
        }
        return prevSpeed;
      });

      requestAnimationFrame(animationFrame);
    };

    const animationId = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const nextSlide = () => {
    setOffset((prevOffset) => prevOffset + cardWidth);
    setSpeed(0.2); 
  };

  const prevSlide = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset - cardWidth;
      return newOffset < 0 ? feedback.length * cardWidth + newOffset : newOffset;
    });
    setSpeed(0.2); 
  };

  return (
    <section>
      <div className="myContainer">
        <div className="feedback">
          <div className="feedback-header">
            <div id="clients" className="feedback-header_text">
              <h2>{t("customers-feedback")}</h2>
              <p>{t("our-trust")}</p>
            </div>
            <div className="controls">
              <button className="feedback-header_previous" onClick={prevSlide}>
                {t("previous")}
              </button>
              <button className="feedback-header_next" onClick={nextSlide}>
                {t("next")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback-carousel">
        <div className="feedback-carousel1">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "none",
            }}
          >
            {duplicatedFeedback.map((item, index) => (
              <div className="testimonial-card" key={`${item.id}-${index}`}>
                <div className="card-header">
                  <img src={item.image} alt={item.name} />
                  <Rate allowHalf defaultValue={item.rating} />
                </div>
                <h3 className="feedback-card_name">{item.name}</h3>
                <p className="feedback-card_comment">{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}