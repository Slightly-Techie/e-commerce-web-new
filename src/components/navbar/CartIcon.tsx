import { useCartStore } from "@/store/cartStore";
import React from "react";
import { Link } from "react-router-dom";
import bagIcon from "../../assets/icons/navbar/cart.svg";
import NotificationBadge from "../NotificationBadge";

interface CartIconProps {
  closeMenu?: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ closeMenu }) => {
  const cart = useCartStore((state) => state.cart);

  const itemsQuantity = cart.reduce((acc, item) => {
    return acc + (item.quantity ?? 0);
  }, 0);

  return (
    <Link
      to="/cart"
      className="relative w-[44px] rounded-lg bg-gray100 p-3"
      onClick={closeMenu}
    >
      <img src={bagIcon} alt="" className="w-[24px]" />
      <span className="absolute right-1 top-1 lg:right-[6px] lg:top-1.5">
        {itemsQuantity > 0 && (
          <NotificationBadge counter={itemsQuantity} small />
        )}
      </span>
    </Link>
  );
};

export default CartIcon;
