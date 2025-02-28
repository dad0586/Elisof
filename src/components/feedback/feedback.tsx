"use client";
import { useState, useEffect } from "react";
import { Rate } from 'antd';
import "./feedback.scss";

const feedback = [
  { id: 1, name: "Floyd Miles", image: "./feedback1.png", rating: 4.5, review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
  { id: 2, name: "Ronald Richards", image: "./feedback1.png", rating: 4, review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
  { id: 3, name: "Jane Cooper", image: "./feedback1.png", rating: 2.5, review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
  { id: 4, name: "Jacob Jones", image: "./feedback1.png", rating: 3.5, review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
  { id: 5, name: "Leslie Alexander", image: "./feedback1.png", rating: 1.8, review: "Eng zo‘r xizmat!" }
];

export default function FeedbackCustmer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2.5; // 2 ta to'liq + 3-card yarmi
  const cardWidth = 1110 / visibleCount; // Har bir card taxminan 444px

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
                <h2>Our Customers’ Feedback</h2>
                <p>Trust our customers</p>
              </div>
              <div className="controls">
                <button className="feedback-header_previous" onClick={prevSlide}>Previous</button>
                <button className="feedback-header_next" onClick={nextSlide}>Next</button>
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