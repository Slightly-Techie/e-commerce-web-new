import { FC } from "react";
import Container from "../../../../components/Container";
import Card from "./Card";
import Navigation from "./Navigation";
import Slider from "./Slider";

interface HeaderProps {
  details: {
    id: string;
    name: string;
    price: string;
    image: string;
    quantity: number;
  };
}

const Header: FC<HeaderProps> = ({
  details: { id, name, image, price, quantity },
}) => {
  return (
    <div className="mx-4">
      <Container>
        <div className="relative aspect-[16/12] rounded-md bg-gradient-to-b from-black/30 to-white md:aspect-[16/9] lg:aspect-[16/6]">
          <Navigation />

          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <img
              src={image}
              alt=""
              className="absolute left-4 w-full md:w-[90%] lg:-top-20"
            />
          </div>

          <div className="absolute bottom-0 right-6 z-20 hidden translate-y-[76%] 1280:block">
            <Card
              id={id}
              name={name}
              price={price}
              quantity={quantity}
              image={image}
            />
          </div>
          <div className="absolute -bottom-5 z-20 hidden translate-y-1/2 md:bottom-0 md:left-1/2 md:block md:-translate-x-1/2 1280:left-6 1280:-translate-x-0">
            <Slider />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
