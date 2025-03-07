'use client';

import FamouProduct from '@/components/famous-product/famous-product'
import MySwiper from '@/components/main-swiper/main-swiper'
import BestSeller from '@/components/seller/best-seller/best-seller'
import React from 'react'
import AboutUs from '../../components/about/about'
import SendRequest from '@/components/send-request/send-request'
import Link from 'next/link'
import FeedbackCustmer from '@/components/feedback/feedback';
import NewsPage from '../../components/news/news';
import Feedback1 from '@/components/feedback/feed';



const Page = () => {


  return (

    <>
      <main>
        <MySwiper />
        <BestSeller />
        <FamouProduct />
        <AboutUs />
        {/* <FeedbackCustmer /> */}
        <Feedback1/>
        <NewsPage />
        <SendRequest />
      </main>
    </>
  )
}

export default Page;
