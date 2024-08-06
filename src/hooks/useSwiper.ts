import { useEffect, useRef, useState } from "react";

const useSwiper = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
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
