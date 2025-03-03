"use client";
import { useState, useEffect } from "react";
import { Rate } from 'antd';
import "./feedback.scss";
import { useTranslations } from "next-intl";

export default function FeedbackCustmer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2.5;
  const cardWidth = 1110 / visibleCount;
  const t = useTranslations ("feedback")


  const feedback = [
    { id: 1, name: t("reviews.0.name"), image: "./imgs/feedback1.png", rating: 4.5, review: t("reviews.0.review") },
    { id: 2, name: t("reviews.1.name"), image: "./imgs/feedback1.png", rating: 4, review: t("reviews.1.review") },
    { id: 3, name: t("reviews.2.name"), image: "./imgs/feedback1.png", rating: 2.5, review: t("reviews.2.review") },
    { id: 4, name: t("reviews.3.name"), image: "./imgs/feedback1.png", rating: 3.5, review: t("reviews.3.review") },
    { id: 5, name: t("reviews.4.name"), image: "./imgs/feedback1.png", rating: 1.8, review: t("reviews.4.review") }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= feedback.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedback.length - visibleCount : prevIndex - 1
    );
  };

  return (
    <>
      <section id="clients">
        <div className="myContainer">
          <div className="feedback">
            <div className="feedback-header">
              <div className="feedback-header_text">
                <h2> {t ("customers-feedback")} </h2>
                <p> {t ("our-trust")} </p>
              </div>
              <div className="controls">
                <button className="feedback-header_previous" onClick={prevSlide}> {t("previous")} </button>
                <button className="feedback-header_next" onClick={nextSlide}>{t("next")}</button>
              </div>
            </div>

            <div className="feedback-carousel">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * cardWidth}px)`,
                }}
              >
                {feedback.map((item, index) => (
                  <div
                    className={`testimonial-card ${index >= currentIndex && index < currentIndex + visibleCount ? "active" : ""}`}
                    key={item.id}
                  >
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
        </div>
      </section>
    </>
  );
}