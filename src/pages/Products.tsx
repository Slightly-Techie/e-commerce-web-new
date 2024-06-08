import Acer from "../assets/Acer.png";
import Asus from "../assets/Asus.png";
import Dell from "../assets/Dell.png";
import Phone from "../assets/GooglePixel.png";
import Mac from "../assets/Macbook.png";
import PS from "../assets/PS5.png";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import Sidebar from "../components/Sidebar";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";

const TopDeals = [
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
    image: PS,
    favorite: true,
  },
  {
    name: "Google Pixel 8pro 32GB",
    discount: 20,
    price: "GHc 7000.00",
    discountedPrice: "GHc 8000.00",
    quantity: 10,
    image: Phone,
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

const Laptops = [
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
    name: "W70031T Asus Pro art",
    discount: 0,
    price: "GHc 49,000.00",
    discountedPrice: "GHc 49,000.00",
    quantity: 10,
    image: Asus,
    favorite: false,
  },
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
    name: "2022 Dell XPS 16” 32GB",
    discount: 0,
    price: "GHc 10,500.00",
    discountedPrice: "GHc 10,500.00",
    quantity: 1,
    image: Dell,
    favorite: false,
  },
];

export default function Products() {
  return (
    <div className="flex gap-6 bg-gray100">
      <Sidebar />
      <main className="flex-1 bg-white px-6 py-4 md:pl-[260px]">
        <section className="mx-auto xl:w-[85%]">
          <Header title="Top Deals" discount={90} />
          <ScrollArea className="w-full md:w-[42rem] lg:w-[62rem]">
            <article className="mb-4 mt-8 flex gap-4 lg:justify-between">
              {TopDeals.map((product, index) => {
                return <ProductItem key={index} {...product} />;
              })}
            </article>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
        <section className="mx-auto mt-8 xl:w-[85%]">
          <Header title="Laptops" discount={0} />
          <ScrollArea className="w-[62rem]">
            <article className="mb-4 mt-8 flex gap-4 lg:justify-between">
              {Laptops.map((product, index) => {
                return <ProductItem key={index} {...product} />;
              })}
            </article>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </main>
    </div>
  );
}
