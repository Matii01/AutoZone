import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function PhotoSlider({ images }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 xl:p-0">
      <div className="pt-20 pb-10">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".swiperPagination",
          }}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden pb-20 h-10 mx-auto md:flex ">
        <div className="swiperPagination flex justify-center"></div>
      </div>
    </div>
  );
}

export default PhotoSlider;
