'use client';

import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';
import './feedback.scss';

const FeedbackCard = () => {
    return (
        <div className="feedback-card">
            <div className="feedback-card_people">
                <Image src="/imgs/feedback1.png" alt="Feedback img" width={60} height={60} className="feedback-card_img" />
                <div className="feedback-card_rating">
                    <Rate allowHalf defaultValue={3.5} />
                </div>
            </div>
            <h3 className="feedback-card_name">Floyd Miles</h3>
            <p className="feedback-card_comment">
                Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud
                amet. Amet minim mollit non deserunt ullamco
                est sit aliqua dolor do amet sint. Velit officia
            </p>
        </div>
    );
};

export default FeedbackCard;
