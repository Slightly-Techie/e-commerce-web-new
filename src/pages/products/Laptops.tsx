import { ScrollArea } from "@/components/ui/scroll-area";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import chevronRightIcon from "../../assets/icons/chevronRight.svg";
import Acer from "../../assets/images/products/Acer.png";
import Asus from "../../assets/images/products/Asus.png";
import Dell from "../../assets/images/products/Dell.png";
import Mac from "../../assets/images/products/Macbook.png";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";

const LaptopDeals = [
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
];

const Laptops = () => {
  return (
    <div className="mt-[4.3125rem]">
      <div className="mb-[2.125rem] flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#111111] lg:text-[1.75rem]">
          Laptops
        </h3>

        <Button label="View All" ghost icon={chevronRightIcon} invert />
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="mb-4 flex w-max space-x-8 lg:space-x-12">
          {LaptopDeals.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
        <Scrollbar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Laptops;
