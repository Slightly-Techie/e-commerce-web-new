import Acer from "@/assets/images/products/Acer.png";
import GooglePixel from "@/assets/images/products/GooglePixel.png";
import Mac from "@/assets/images/products/Macbook.png";
import PS5 from "@/assets/images/products/PS5.png";
import ProductItem from "@/components/ProductItem";

const TopProductDeals = [
  {
    id: "9",
    name: "2019 Macbook Pro, 16”",
    discount: 20,
    price: "10500",
    discountedPrice: "500",
    quantity: 1,
    image: Mac,
    favorite: true,
  },
  {
    id: "10",
    name: "PS5 Standard",
    discount: 90,
    price: "7500",
    discountedPrice: "1200",
    quantity: 0,
    image: PS5,
    favorite: true,
  },
  {
    id: "11",
    name: "Google Pixel 8pro 32GB",
    discount: 20,
    price: "7000",
    discountedPrice: "8000",
    quantity: 10,
    image: GooglePixel,
    favorite: false,
  },
  {
    id: "12",
    name: 'Acer 14" 32GB Chromebook...',
    discount: 5,
    price: "2500",
    discountedPrice: "2100",
    quantity: 10,
    image: Acer,
    favorite: false,
  },
];

const Favorite = () => {
  return (
    <section className="min-h-[40vw] rounded-tl-2xl rounded-tr-2xl bg-white px-6 py-[1.625rem] lg:ml-[276px]">
      <h1 className="text-[28px] font-bold text-darkPrimary">Saved Products</h1>
      <div className="mb-4 mt-8 flex flex-wrap gap-8 lg:gap-12">
        {TopProductDeals.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Favorite;
