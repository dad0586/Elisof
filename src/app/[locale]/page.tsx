import FamouProduct from '@/components/famous-product/famous-product'
import MySwiper from '@/components/main-swiper/main-swiper'
import BestSeller from '@/components/seller/best-seller/best-seller'
import React from 'react'
import AboutUs from '../about/page'
import TestimonialsCarousel from '@/components/feedback/feedback'
import NewsPage from '../news/page'
import SendRequest from '@/components/send-request/send-request'


const Page = () => {
  return (

    <>
      <MySwiper />
      <BestSeller />
      <FamouProduct />
      <AboutUs />
      <TestimonialsCarousel />
      <NewsPage />
      <SendRequest />
    </>
  )
}

export default Page;
