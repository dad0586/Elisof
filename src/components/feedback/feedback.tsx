"use client";
import { useState, useEffect } from "react";
import { Rate } from "antd";
import "./feedback.scss";
import { useTranslations } from "next-intl";

export default function FeedbackCustomer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2.5; // Bir vaqtda ko‘rinadigan kartalar soni
  const cardWidth = 1110 / visibleCount; // Har bir kartaning kengligi
  const t = useTranslations("feedback");

  const feedback = [
    { id: 1, name: t("reviews.0.name"), image: "./imgs/feedback1.png", rating: 4.5, review: t("reviews.0.review") },
    { id: 2, name: t("reviews.1.name"), image: "./imgs/feedback1.png", rating: 4, review: t("reviews.1.review") },
    { id: 3, name: t("reviews.2.name"), image: "./imgs/feedback1.png", rating: 2.5, review: t("reviews.2.review") },
    { id: 4, name: t("reviews.3.name"), image: "./imgs/feedback1.png", rating: 3.5, review: t("reviews.3.review") },
    { id: 5, name: t("reviews.4.name"), image: "./imgs/feedback1.png", rating: 1.8, review: t("reviews.4.review") },
  ];

  // Kartalarni ikki marta takrorlaymiz, uzluksiz aylanish uchun
  const duplicatedFeedback = [...feedback, ...feedback];

  // Avtomatik harakatlanish uchun useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        // Agar asl feedback uzunligiga yetib kelsak, boshiga qaytaramiz
        if (newIndex >= feedback.length) {
          return 0;
        }
        return newIndex;
      });
    }, 3000); // Har 3 soniyada bir marta siljiydi (tezlikni o‘zgartirish mumkin)

    return () => clearInterval(interval); // Komponent o‘chirilganda intervalni tozalaymiz
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= feedback.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return feedback.length - 1;
      }
      return newIndex;
    });
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
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            transition: "transform 0.8s ease-in-out", // Sekin va chiroyli o‘tish
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
    </section>
  );
}