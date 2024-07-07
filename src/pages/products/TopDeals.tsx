import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import chevronRightIcon from "../../assets/icons/chevronRight.svg";
import topDealIcon from "../../assets/icons/top-deal.svg";
import Acer from "../../assets/images/products/Acer.png";
import GooglePixel from "../../assets/images/products/GooglePixel.png";
import Mac from "../../assets/images/products/Macbook.png";
import PS5 from "../../assets/images/products/PS5.png";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";

const TopProductDeals = [
  {
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "GHc 10,500.00",
    discountedPrice: "GHc 500.00",
    quantity: 1,
    image: Mac,
    favorite: true,
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
    name: "Google Pixel 8pro 32GB",
    discount: 20,
    price: "GHc 7000.00",
    discountedPrice: "GHc 8000.00",
    quantity: 10,
    image: GooglePixel,
    favorite: false,
  },
  {
    name: 'Acer 14" 32GB Chromebook...',
    discount: 5,
    price: "GHc 2,500.00",
    discountedPrice: "GHc 2,100.00",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "GHc 2,500.00",
    discountedPrice: "GHc 2,100.00",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "GHc 2,500.00",
    discountedPrice: "GHc 2,100.00",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "GHc 2,500.00",
    discountedPrice: "GHc 2,100.00",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "GHc 2,500.00",
    discountedPrice: "GHc 2,100.00",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
];

const TopDeals = () => {
  return (
    <>
      <div className="mb-[2.125rem] flex items-center justify-between">
        <div className="flex flex-col items-center gap-[0.625rem] sm:flex-row">
          <h3 className="text-2xl font-bold text-[#111111] lg:text-[1.75rem]">
            Top Deals
          </h3>
          <img src={topDealIcon} alt="" />
        </div>

        <Button label="View All" ghost icon={chevronRightIcon} invert />
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="mb-4 flex w-max space-x-8 lg:space-x-12">
          {TopProductDeals.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default TopDeals;
