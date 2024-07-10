import Laptops from "./Laptops";
import TopDeals from "./TopDeals";

const Products = () => {
  return (
    <section className="rounded-tl-2xl rounded-tr-2xl bg-white px-6 py-[1.625rem] lg:ml-[276px]">
      <TopDeals />
      <Laptops />
    </section>
  );
};

export default Products;
