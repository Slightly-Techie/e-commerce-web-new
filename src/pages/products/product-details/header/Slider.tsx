import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../../../assets/images/products/Acer.png";
import useSwiper from "../../../../hooks/useSwiper";

import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../../../components/SwiperButton";

const images = [0, 1, 2, 3, 4, 5, 6, 7];

const Slider = () => {
  const { isPrevDisabled, isNextDisabled, prevRef, nextRef, swiperRef } =
    useSwiper();

  return (
    <div className="flex items-center gap-4">
      <SwiperButton
        ref={prevRef}
        disabled={isPrevDisabled}
        className="hidden md:grid"
      />

      <div className="relative mx-auto w-full max-w-[640px] rounded-[20px] bg-white p-3 shadow-custom md:mx-0 md:ml-0 md:p-4 xl:max-w-[740px]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView="auto"
          className="mySwiper"
        >
          {images.map((_, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "auto" }}
              className="mr-3 last:mr-0 md:mr-4"
            >
              <div className="grid h-[100px] w-[100px] place-items-center rounded-xl bg-gray100 md:h-[120px] md:w-[120px] lg:h-[162px] lg:w-[162px]">
                <img
                  src={image}
                  alt=""
                  className="h-[70px] w-[90px] md:h-[80px] md:w-[110px] lg:h-[95px] lg:w-[142px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SwiperButton
        ref={nextRef}
        disabled={isNextDisabled}
        right
        className="hidden md:grid"
      />
    </div>
  );
};

export default Slider;
