import ProductCategories from "@/components/ProductCategories";
import PopularProducts from "./PopularProducts";

const Explore = () => {
  return (
    <section className="rounded-tl-2xl rounded-tr-2xl bg-white px-6 py-[1.625rem] lg:ml-[276px]">
      <ProductCategories />

      <PopularProducts />
    </section>
  );
};

export default Explore;
