import { FC } from "react";
import Container from "../../../../components/Container";
import Navigation from "./Navigation";

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

          <div className="absolute inset-0 isolate h-full w-full overflow-hidden">
            <img
              src={image}
              alt=""
              className="absolute left-4 w-full object-cover"
            />
          </div>

          {/*  */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
