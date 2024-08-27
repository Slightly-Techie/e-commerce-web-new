import FilterPageHeader from "@/components/FilterPageHeader";
import ProductItem from "@/components/ProductItem";
import { useState } from "react";
import Acer from "../assets/images/products/Acer.png";
import Asus from "../assets/images/products/Asus.png";
import Dell from "../assets/images/products/Dell.png";
import Mac from "../assets/images/products/Macbook.png";
import Filter from "./Filter";

const Laptops = [
  {
    id: "5",
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "2500",
    discountedPrice: "2100",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    id: "6",
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "49000",
    discountedPrice: null,
    quantity: 10,
    image: Asus,
    favorite: false,
  },
  {
    id: "7",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "8",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "5",
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "2500",
    discountedPrice: "2100",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    id: "6",
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "49000",
    discountedPrice: null,
    quantity: 10,
    image: Asus,
    favorite: false,
  },
  {
    id: "7",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "8",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "5",
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "2500",
    discountedPrice: "2100",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    id: "6",
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "49000",
    discountedPrice: null,
    quantity: 10,
    image: Asus,
    favorite: false,
  },
  {
    id: "7",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "8",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
  {
    id: "5",
    name: 'Acer 14" 32GB Chromebook....',
    discount: 5,
    price: "2500",
    discountedPrice: "2100",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
  {
    id: "6",
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "49000",
    discountedPrice: null,
    quantity: 10,
    image: Asus,
    favorite: false,
  },
  {
    id: "7",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "8",
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "10500",
    discountedPrice: null,
    quantity: 1,
    image: Dell,
    favorite: false,
  },
];

interface Props {
  filterState: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterPage() {
  const [filterSidebarState, setFilterSidebarState] = useState<boolean>(false);
  return (
    <section className={`${filterSidebarState ? "flex gap-6" : ""} `}>
      <article
        className={`mt-[10.5rem] min-h-[83vh] flex-col overflow-x-hidden md:mt-[6rem] ${filterSidebarState ? "w-full sm:ml-4 sm:w-[74%]" : "mx-auto w-full"} rounded-lg bg-white px-4 py-4 transition-all duration-500`}
      >
        <FilterPageHeader
          filterState={filterSidebarState}
          setState={setFilterSidebarState}
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-12 md:justify-start lg:gap-x-[15px] xl:gap-x-5">
          {Laptops.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </article>

      <MobileFilter
        filterState={filterSidebarState}
        setState={setFilterSidebarState}
      />
      <LargeScreenFilter
        filterState={filterSidebarState}
        setState={setFilterSidebarState}
      />
    </section>
  );
}

function MobileFilter({ filterState, setState }: Props) {
  return (
    <div
      className={`sm:hidden ${filterState ? "fixed translate-x-0" : "translate-x-[100%]"} mt-[10.5rem] h-[90vh] w-full rounded-lg bg-white p-4 transition-all duration-500`}
    >
      <Filter setState={setState} />
    </div>
  );
}

function LargeScreenFilter({ filterState, setState }: Props) {
  return (
    <div
      className={`${filterState ? "hidden translate-x-0 sm:block" : "hidden translate-x-[200%]"} mr-4 mt-[6rem] h-screen w-[400px] rounded-lg bg-white p-4 transition-all duration-500`}
    >
      <Filter setState={setState} />
    </div>
  );
}
