import { BsTruck } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearch, IoTimerOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { TfiMoreAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

import Avatar from "../assets/Avatar.png";

export default function Sidebar() {
  const favorite = 0;
  return (
    <aside className="fixed hidden h-screen w-[260px] flex-col justify-between rounded-md bg-white p-4 md:flex">
      <ul className="flex flex-col gap-4 font-medium text-gray600">
        <li>
          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-md border border-gray200 bg-gray-100 p-2 font-product-sans font-bold text-black"
                : "font-product-medium flex items-center gap-2"
            }
          >
            <HiOutlineShoppingBag size={22} />
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/explore"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-md border border-gray200 bg-gray-100 p-2 font-product-sans font-bold text-black"
                : "flex items-center gap-2"
            }
          >
            <IoSearch size={22} />
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/favorite"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-md border border-gray200 bg-gray100 p-2 font-product-sans font-bold text-black"
                : "flex items-center gap-2"
            }
          >
            <MdFavoriteBorder size={22} />
            Favorite
            {favorite > 0 && (
              <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-error600 text-white">
                {favorite}
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-md border border-gray200 bg-gray-100 p-2 font-product-sans font-bold text-black"
                : "flex items-center gap-2"
            }
          >
            <BsTruck size={22} />
            Track orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-md border border-gray200 bg-gray-100 p-2 font-product-sans font-bold text-black"
                : "flex items-center gap-2"
            }
          >
            <IoTimerOutline size={22} />
            Order history
          </NavLink>
        </li>
      </ul>

      <article className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Avatar} alt="Avatar" className="h-11 w-11 rounded-full" />
          <div className="flex flex-col gap-2 font-medium">
            <span className="text-sm">Michael Mensah</span>
            <span className="rounded-xl bg-warning200 py-1 text-center text-[12px] text-[#6F4400]">
              ST Member
            </span>
          </div>
        </div>
        <TfiMoreAlt className="rotate-90 cursor-pointer text-gray400" />
      </article>
    </aside>
  );
}
