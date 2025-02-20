"use client";
import { useState, useEffect } from "react";
import Card from "../seller-card/seller-card";
import "./best-seller.scss";

const BestSeller = () => {
    const cards = Array.from({ length: 8 });
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize(); 
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const toggleCards = () => setShowAll(prev => !prev);
    const visibleCards = isMobile && !showAll ? cards.slice(0, 3) : cards;

    return (
        <div className="myContainer">
            <h2 className="best-seller_title">Best Seller Items</h2>
            <div className="best-seller_cards">
                {visibleCards.map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
            {isMobile && (
                <button className="see-more-btn" onClick={toggleCards}>
                    {showAll ? "See Less" : "See More"}
                </button>
            )}
        </div>
    );
};

export default BestSeller;
