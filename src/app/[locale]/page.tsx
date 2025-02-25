'use client';

import FamouProduct from '@/components/famous-product/famous-product'
import MySwiper from '@/components/main-swiper/main-swiper'
import BestSeller from '@/components/seller/best-seller/best-seller'
import React from 'react'
import AboutUs from '../../components/about/page'
import NewsPage from '../../components/news/page'
import SendRequest from '@/components/send-request/send-request'
import Link from 'next/link'
import FeedbackCustmer from '@/components/feedback/feedback';



const Page = () => {

  
  return (

    <>
      <MySwiper />
      <BestSeller />
      <FamouProduct />
      <AboutUs />
      <FeedbackCustmer />
      <NewsPage />
      <SendRequest />
    </>
  )
}

export default Page;
