import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules'
import Img1 from '../assets/img/gallery/img1.jpg'
import Img2 from '../assets/img/gallery/img2.jpg'
import Img3 from '../assets/img/gallery/img3.jpg'
import Img4 from '../assets/img/gallery/img4.jpg'

import "swiper/css"

function Slider() {
  return (
    <>
    <Swiper
        modules={[Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        
        <SwiperSlide>
            <img height={500} width="100%" src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img height={500} width="100%" src={Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img height={500} width="100%" src={Img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img height={500} width="100%" src={Img4} alt="" />
        </SwiperSlide>
        
    </Swiper>
    
    </>
  )
}

export default Slider