import { Swiper, SwiperSlide } from "swiper/react";
import Acer from "../../../assets/images/products/Acer.png";
import Asus from "../../../assets/images/products/Asus.png";
import Dell from "../../../assets/images/products/Dell.png";
import Mac from "../../../assets/images/products/Macbook.png";
import Container from "../../../components/Container";
import SwiperButton from "../../../components/SwiperButton";
import useSwiper from "../../../hooks/useSwiper";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../../components/ProductItem";

const similarProducts = [
  {
    id: "1",
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "GHc 2,500.00",
    discountedPrice: "GHc 2,100.00",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    id: "2",
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "GHc 49,000.00",
    discountedPrice: null,
    quantity: 10,
    image: Asus,
    favorite: false,
  },
  {
    id: "3",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "GHc 10,500.00",
    discountedPrice: "GHc 500.00",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "4",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "GHc 10,500.00",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "5",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "GHc 10,500.00",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "6",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "GHc 10,500.00",
    discountedPrice: "GHc 500.00",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
];

const SimilarProducts = () => {
  const { isPrevDisabled, isNextDisabled, prevRef, nextRef, swiperRef } =
    useSwiper();

  return (
    <div className="mt-16 px-4 md:mt-[8.125rem] md:px-8 lg:px-12">
      <Container>
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <h3 className="text-xl font-bold md:text-2xl">Similar Products</h3>

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
          {similarProducts.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "auto" }}
              className="mr-4 md:mr-8 lg:mr-12 last:mr-0"
            >
              <ProductItem {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default SimilarProducts;
