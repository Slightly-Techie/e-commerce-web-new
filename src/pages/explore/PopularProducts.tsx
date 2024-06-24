import Button from "../../components/Button";
import chevronRightIcon from "../../assets/icons/chevronRight.svg";
import { ScrollArea, ScrollBar } from "../../components/ui/ScrollArea";
import Dell from '../../assets/images/products/Dell.png'
import PS5 from '../../assets/images/products/PS5.png'
import GooglePixel from '../../assets/images/products/GooglePixel.png'
import Airpods from '../../assets/images/products/airpods.png'
import ProductItem from "../../components/ProductItem";

const PopularProductDeals = [
  {
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "GHc 10,500.00",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    name: "Google Pixel 8pro 32GB",
    discount: 20,
    price: "GHc 7000.00",
    discountedPrice: "GHc 8000.00",
    quantity: 10,
    image: GooglePixel,
    favorite: false,
  },
  {
    name: "PS5 Standard",
    discount: 90,
    price: "GHc 7,500.00",
    discountedPrice: "GHc 1200.00",
    quantity: 0,
    image: PS5,
    favorite: true,
  },
  {
    name: "Airpods pro",
    discount: 0,
    price: "GHc 2,200.00",
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
        <div className="flex w-max space-x-8 lg:space-x-12 mb-4">
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
