// import { useLocation } from "react-router-dom";
import Container from "@/components/Container";
import Description from "./Description";
// import Header from "./header/Header";
import Card from "./header/Card";
import Header from "./header/Header";
import Slider from "./header/Slider";
import Reviews from "./reviews/Reviews";
import SimilarProducts from "./SimilarProducts";

const ProductDetails = () => {
  // const { state: details } = useLocation();

  const customDetail = {
    id: "1",
    name: "Acer Predator Helios 300",
    price: "1,199.99",
    image:
      "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quantity: 1,
  };

  return (
    <section className="bg-white pb-20">
      <Header details={customDetail} />
      <div className="mx-4 mt-6 min-[1180px]:hidden">
        <Slider />
      </div>
      <div className="mx-4 min-[1180px]:hidden">
        <div className="mx-auto mt-8 max-w-[640px] md:mt- 1280:hidden">
          <Card {...customDetail} />
        </div>
      </div>

      <Container>
        <div className="hidden -translate-y-16 justify-between min-[1180px]:flex">
          <div className="w-fit">
            <Slider />
            <Description />
          </div>
          <div className="w-fit min-[1180px]:mr-10">
            <Card {...customDetail} />
          </div>
        </div>
      </Container>

      <Reviews />
      <SimilarProducts />
    </section>
  );
};

export default ProductDetails;
