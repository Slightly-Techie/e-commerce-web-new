import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/icons/navbar/close.svg";
import personIcon from "../../assets/icons/navbar/person.svg";
import Heart from "../../assets/icons/sidebar/heart.svg?react";
import logo from "../../assets/logo.svg";
import Backdrop from "../Backdrop";
import Button from "../Button";
import NotificationBadge from "../NotificationBadge";
import Balance from "./Balance";

interface MobileMenuProps {
  isAuthenticated: boolean;
  isOpen: boolean;
  closeMenu: () => void;
}

const dropdownLinks = [
  { link: "/profile", name: "Profile", id: 1 },
  { link: "/referrals", name: "Referrals", id: 2 },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  isAuthenticated,
  isOpen,
  closeMenu,
}) => {
  const navigationRef = useRef<HTMLDivElement>(null);

  const closeMenuHandler = () => {
    closeMenu();
  };

  useEffect(() => {
    if (isOpen) {
      if (navigationRef.current) {
        navigationRef.current.style.left = "0";
        navigationRef.current.style.transition = "300ms linear";
      }
    } else {
      if (navigationRef.current) {
        navigationRef.current.style.left = "-100%";
        navigationRef.current.style.transition = "300ms linear";
      }
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {isOpen && <Backdrop closeMenu={closeMenuHandler} />}

      <div
        className="fixed top-0 z-[999] flex h-screen w-[80%] max-w-sm flex-col bg-white p-4"
        ref={navigationRef}
      >
        <div className="mb-12 flex items-center justify-between">
          <Link to="/" onClick={closeMenuHandler}>
            <img src={logo} alt="logo image" className="w-10" />
          </Link>

          <img
            src={closeIcon}
            alt="close menu"
            onClick={closeMenuHandler}
            className="w-3.5"
          />
        </div>

        <div className="mb-8 grid gap-2">
          {isAuthenticated && <Balance />}
          {!isAuthenticated && <Button label="Sign In" icon={personIcon} />}
        </div>

        <Link
          to="/favorites"
          className="relative flex gap-4 text-lg"
          onClick={closeMenuHandler}
        >
          <Heart /> <span>Favorites</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <NotificationBadge counter="6" small />
          </div>
        </Link>

        <div className="mt-3 flex flex-col space-y-2">
          {dropdownLinks.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="self-center text-lg"
              onClick={closeMenuHandler}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
