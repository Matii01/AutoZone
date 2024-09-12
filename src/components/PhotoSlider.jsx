import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const PhotoSlider = () => {
  const images = [
    "./img/car1.png",
    "./img/car2.png",
    "./img/car3.png",
    "./img/car3.png",
    "./img/car3.png",
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 xl:p-0">
      <div className="pt-20 pb-10">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
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

      <div className="w-full pb-20 h-10 mx-auto flex justify-center items-center">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default PhotoSlider;
