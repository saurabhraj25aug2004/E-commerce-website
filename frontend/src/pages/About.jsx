import React from 'react'
import Title from '../components/Title'
import { assets } from './../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever Company, your trusted destination for premium quality products that are built to last. We believe that excellence isn’t just an option — it’s a promise. Our goal is to bring you a seamless and satisfying shopping experience, offering a wide range of curated products that meet your needs and exceed your expectations.</p>
          <p>Forever Company was founded with a simple yet powerful mission:
            To create an online shopping platform where quality, affordability, and customer satisfaction come first.</p>
          <b className='text-gray-800'>Our mission</b>
          <p>We’re a team of passionate professionals, designers, and technology enthusiasts who are constantly innovating to make your shopping journey smoother, faster, and more enjoyable.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>quality Assurance</b>
        <p className='text-gray-600'>At Forever Company, quality is not just a feature — it's a commitment. </p>
      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience</b>
        <p className='text-gray-600'>We ensure your products are packed securely to arrive in perfect condition.</p>
      </div>

      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>In the rare case of an issue, our hassle-free return policy has you covered.</p>
      </div>
    </div>
     <NewsletterBox />

    </div>
  )
}

export default About
