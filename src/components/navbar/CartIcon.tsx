import React from "react";
import { Link } from "react-router-dom";
import bagIcon from "../../assets/icons/navbar/cart.svg";

interface CartIconProps {
  closeMenu?: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ closeMenu }) => {
  return (
    <Link
      to="/cart"
      className="lg:bg-gray100 relative flex items-center gap-4 rounded-lg p-3"
      onClick={closeMenu}
    >
      <img src={bagIcon} alt="" />
      <span className="font-medium text-[#111111] lg:hidden">Cart</span>
      <span className="bg-error600 absolute right-2.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-red-500 text-xs leading-none text-white lg:right-[6px] lg:top-1.5">
        2
      </span>
    </Link>
  );
};

export default CartIcon;
