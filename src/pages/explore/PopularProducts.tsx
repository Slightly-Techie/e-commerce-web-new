import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import chevronRightIcon from "../../assets/icons/chevronRight.svg";
import Dell from "../../assets/images/products/Dell.png";
import GooglePixel from "../../assets/images/products/GooglePixel.png";
import PS5 from "../../assets/images/products/PS5.png";
import Airpods from "../../assets/images/products/airpods.png";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";

const PopularProductDeals = [
  {
    id: "1",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "2",
    name: "Google Pixel 8pro 32GB",
    discount: 20,
    price: "7000",
    discountedPrice: "8000",
    quantity: 10,
    image: GooglePixel,
    favorite: false,
  },
  {
    id: "3",
    name: "PS5 Standard",
    discount: 90,
    price: "7500",
    discountedPrice: "1200",
    quantity: 0,
    image: PS5,
    favorite: true,
  },
  {
    id: "4",
    name: "Airpods pro",
    discount: 0,
    price: "2200",
    discountedPrice: null,
    quantity: 0,
    image: Airpods,
    favorite: true,
  },
];

const PopularProducts = () => {
  return (
    <div className="mt-[4.3125rem]">
      <div className="mb-[2.125rem] flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#111111] lg:text-[1.75rem]">
          Popular Products
        </h3>

        <Button label="View All" ghost icon={chevronRightIcon} invert />
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="mb-4 flex w-max space-x-8 lg:space-x-12">
          {PopularProductDeals.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default PopularProducts;
