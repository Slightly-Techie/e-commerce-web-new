import { useLocation } from "react-router-dom";
import Description from "./Description";
import SimilarProducts from "./SimilarProducts";
import Card from "./header/Card";
import Header from "./header/Header";
import Slider from "./header/Slider";
import Reviews from "./reviews/Reviews";

const ProductDetails = () => {
  const { state: details } = useLocation();

  return (
    <section className="overflow-x-hidden bg-white pb-20 pt-[166px] md:pt-[6.25rem]">
      <Header details={details} />

      <div className="md:hidden mt-6  mx-4">
        <Slider />
      </div>

      <div className="mx-4">
        <div className="mx-auto mt-8 max-w-[640px] md:mt-32 1280:hidden">
          <Card
            name={details.name}
            price={details.price}
            quantity={details.quantity}
          />
        </div>
      </div>

      <Description />
      <Reviews />
      <SimilarProducts />
    </section>
  );
};

export default ProductDetails;
