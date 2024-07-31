import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import starIcon from "../../../../assets/icons/star.svg";
import ReviewCard from "../../../../components/ReviewCard";
import useSwiper from "../../../../hooks/useSwiper";

import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../../../components/SwiperButton";

const reviews = [0, 1, 2, 3, 4, 5, 6, 7];

const Slider = () => {
  const { isPrevDisabled, isNextDisabled, prevRef, nextRef, swiperRef } =
    useSwiper();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-end gap-2 md:gap-2.5">
          <div className="flex items-end gap-2 md:gap-2.5">
            <img src={starIcon} alt="" className="h-4 w-4 md:h-6 md:w-6" />
            <span className="text-[1.875rem] font-bold leading-[0.8] md:text-[2.25rem] lg:text-[3rem]">
              4.7
            </span>
          </div>
          <span className="text-[1rem] leading-none text-[#757575] md:text-[1.125rem]">
            54 reiviews
          </span>
        </div>

        <div className="flex gap-3">
          <SwiperButton ref={prevRef} disabled={isPrevDisabled} />
          <SwiperButton ref={nextRef} disabled={isNextDisabled} right />
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView="auto"
        className="mySwiper"
      >
        {reviews.map((_, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "100%" }}
            className="mr-8 max-w-[366px] last:mr-0"
          >
            <ReviewCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
