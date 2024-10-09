import QuantityControl from "@/pages/cart/QuantityControl";
import { useCartStore } from "@/store/cartStore";
import { ButtonType } from "@/types";
import { FC, useEffect, useState } from "react";
import FlagIcon from "../../../../assets/icons/Flag.svg";
import starIcon from "../../../../assets/icons/star.svg";
import truckIcon from "../../../../assets/icons/truck.svg";
import Button from "../../../../components/Button";

interface CardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const Card: FC<CardProps> = ({ id, name, price, image, quantity }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addItem);
  const isAdded = useCartStore((state) => state.isAdded);

  const cartITem = cart.find((cartItem) => cartItem.id === id);

  const addToCartHandler = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    setAddedToCart(isAdded(id));
  };

  useEffect(() => {
    setAddedToCart(isAdded(id));
  }, [id, isAdded]);

  useEffect(() => {
    setAddedToCart(cartITem ? true : false);
  }, [cartITem]);

  return (
    <>
      <div className="rounded-xl border border-gray200 bg-white p-4 shadow-custom md:p-6 lg:p-8 1280:w-[450px]">
        <div className="mb-6 border-b border-gray200 pb-6">
          <h3 className="mb-6 text-xl font-bold sm:text-2xl lg:text-[1.75rem]">
            {name}
          </h3>

          <div className="flex items-center gap-4">
            <Button
              label={quantity > 0 ? "In Stock" : "Out of Stock"}
              className="pointer-events-none rounded-full bg-[#FDF0D5] px-2.5 py-1.5 text-xs font-semibold text-warning700"
            />

            <div className="flex items-center gap-1.5">
              <img src={truckIcon} alt="" className="h-[18px] w-[18px]" />
              <span className="text-xs font-semibold">Delivery to Accra</span>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
          <div>
            <span className="text-[#757575]">Price</span>
            <span className="mt-4 block text-[1.75rem] text-xl font-bold sm:text-2xl">
              ₵{price}
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="flex items-center gap-[0.3125rem]">
              <img src={starIcon} alt="" className="h-4 w-4" />
              <span className="font-bold">4.7</span>
            </div>
            <span className="text-[#757575]">54 reiviews</span>
          </div>
        </div>

        {!addedToCart ? (
          <Button
            label="Add to cart"
            className="w-full"
            onClick={addToCartHandler}
          />
        ) : (
          <QuantityControl
            id={id}
            amount={cartITem?.quantity || quantity}
            btn
          />
        )}
      </div>

      <Button
        label="Question about this product?"
        icon={FlagIcon}
        underline
        btnType={ButtonType.ghost}
        className="mt-6 w-fit text-gray600"
      />
    </>
  );
};

export default Card;
