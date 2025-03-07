'use client';

import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';
import './feedback.scss';
import { useTranslations } from 'next-intl';

const FeedbackCard = () => {
    const t = useTranslations("feedback-card")
    return (
        <div className="feedback-card">
            <div className="feedback-card_people">
                <Image src="/imgs/feedback1.png" alt="Feedback img" width={60} height={60} className="feedback-card_img" />
                <div className="feedback-card_rating">
                    <Rate allowHalf defaultValue={3.5} />
                </div>
            </div>
            <h3 className="feedback-card_name"> {t ("names")} </h3>
            <p className="feedback-card_comment"> {t ("comment")} </p>
        </div>
    );
};

export default FeedbackCard;
