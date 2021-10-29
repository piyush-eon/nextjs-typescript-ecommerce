import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { trending } from "../../data/data";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";

const Carousel = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-2xl h-[80vh]">
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        className="h-full"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {trending.map((trend) => (
          <SwiperSlide
            key={trend.name}
            className="flex justify-evenly p-10 flex-col-reverse md:flex-row gap-5 md:gap-0"
          >
            <div className="flex flex-col gap-5 md:gap-10 text-white justify-center w-full md:w-2/4 font-extrabold">
              <span className="text-4xl sm:text-5xl md:text-7xl">
                {trend.name}
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl">
                ₹ {trend.price}
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={trend.image}
              alt={trend.name}
              className="h-2/3 object-contain md:h-full rounded-full bg-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
