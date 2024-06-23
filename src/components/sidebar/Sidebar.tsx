import { Link, NavLink } from "react-router-dom";
import Backdrop from "../Backdrop";
import { SIDEBAR_LINKS } from "../../constants";
import { cn } from "../../lib";
import { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/icons/navbar/close.svg";
import STMember from "./STMember";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const openSidebarHandler = () => {
    sidebarRef.current!.style.transition = "300ms ease-in-out";
    setIsOpen(true);
  };

  const closeSidebarHandler = () => {
    if (window.innerWidth < 1024) {
      sidebarRef.current!.style.transition = "300ms ease-in-out";
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="lg:hidden">
          <Backdrop closeMenu={closeSidebarHandler} />
        </div>
      )}

      <div
        className="absolute right-5 top-16 z-20 lg:hidden"
        onClick={openSidebarHandler}
      >
        Open
      </div>

      <div
        className={cn(
          "fixed top-0 z-50 flex h-dvh max-h-[896px] w-[80%] max-w-[260px] flex-col bg-white p-4 font-product-sans lg:left-auto lg:top-auto lg:z-40 lg:h-custom-height lg:rounded-2xl",
          isOpen ? "left-0" : "-left-full",
        )}
        ref={sidebarRef}
      >
        <div className="mb-12 flex items-center justify-between lg:hidden">
          <Link to="/" onClick={closeSidebarHandler}>
            <img src={logo} alt="logo image" className="w-10" />
          </Link>

          <img
            src={closeIcon}
            alt="close menu"
            onClick={closeSidebarHandler}
            className="w-3.5"
          />
        </div>

        <ul className="grid gap-3">
          {SIDEBAR_LINKS.map(({ route, name, icon }, index) => (
            <li key={index}>
              <NavLink
                to={route}
                onClick={closeSidebarHandler}
                className={({ isActive }) =>
                  cn(
                    isActive
                      ? "block rounded-xl border border-gray200 bg-gray100 p-3 font-bold text-[#181C20]"
                      : "block p-3 text-gray500",
                    "flex gap-2.5",
                  )
                }
              >
                {icon}
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <STMember />
      </div>
    </>
  );
};

export default Sidebar;
