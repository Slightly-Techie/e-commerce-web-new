import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";

const useSwiper = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current as Swiper;
      swiper.params.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
      swiper.navigation.init();
      swiper.navigation.update();

      swiper.on("slideChange", () => {
        setIsPrevDisabled(swiper.isBeginning);
        setIsNextDisabled(swiper.isEnd);
      });

      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    }
  }, []);

  return {
    isPrevDisabled,
    isNextDisabled,
    prevRef,
    nextRef,
    swiperRef,
  };
};

export default useSwiper;
