'use client';

import FamouProduct from '@/components/famous-product/famous-product'
import MySwiper from '@/components/main-swiper/main-swiper'
import BestSeller from '@/components/seller/best-seller/best-seller'
import React from 'react'
import AboutUs from '../../components/about/page'
import SendRequest from '@/components/send-request/send-request'
import Link from 'next/link'
import FeedbackCustmer from '@/components/feedback/feedback';
import NewsPage from '../news/page';



const Page = () => {


  return (

    <>
      <main>
        <MySwiper />
        <BestSeller />
        <FamouProduct />
        <AboutUs />
        <FeedbackCustmer />
        <NewsPage />
        <SendRequest />
      </main>
    </>
  )
}

export default Page;
