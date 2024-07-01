import React from "react";
import { Link } from "react-router-dom";
import bagIcon from "../../assets/icons/navbar/cart.svg";
import NotificationBadge from "../NotificationBadge";

interface CartIconProps {
  closeMenu?: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ closeMenu }) => {
  return (
    <Link
      to="/cart"
      className="relative rounded-lg p-3 bg-gray100 w-[44px]"
      onClick={closeMenu}
    >
      <img src={bagIcon} alt="" className="w-[24px]"/>
      <span className="absolute right-1 top-1 lg:right-[6px] lg:top-1.5">
        <NotificationBadge counter="2" small/>
      </span>
    </Link>
  );
};

export default CartIcon;
