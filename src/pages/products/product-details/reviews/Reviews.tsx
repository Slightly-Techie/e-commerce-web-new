import Container from "../../../../components/Container";
import Slider from "./Slider";

const Reviews = () => {
  return (
    <Container>
      <div className="mx-4 mt-16 md:mt-[8.125rem] md:mx-8 lg:mx-12">
        <h3 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Reviews</h3>
        <Slider />
      </div>
    </Container>
  );
};

export default Reviews;
