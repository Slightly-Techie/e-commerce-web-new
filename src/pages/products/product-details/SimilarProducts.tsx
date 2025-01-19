import Acer from "../../../assets/images/products/Acer.png";
import Asus from "../../../assets/images/products/Asus.png";
import Dell from "../../../assets/images/products/Dell.png";
import Mac from "../../../assets/images/products/Macbook.png";
import Container from "../../../components/Container";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../../../components/ProductItem";

const similarProducts = [
  {
    id: "17",
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "2500",
    discountedPrice: "2100",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    id: "18",
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "49000",
    discountedPrice: null,
    quantity: 10,
    image: Asus,
    favorite: false,
  },
  {
    id: "19",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "20",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "21",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "22",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
];

const SimilarProducts = () => {
  return (
    <div className="mt-16 px-4 md:mt-[8.125rem] md:px-8 lg:px-12">
      <Container>
        <Carousel>
          <div className="mb-4 flex items-center justify-between md:mb-6">
            <h3 className="text-xl font-bold md:text-2xl">Similar Products</h3>

            <div className="flex gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>

          <CarouselContent>
            {similarProducts.map((product, index) => (
              <CarouselItem key={index} className="basis-auto">
                <ProductItem {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default SimilarProducts;
