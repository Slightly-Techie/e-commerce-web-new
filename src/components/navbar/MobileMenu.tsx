import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import Backdrop from "../Backdrop";
import { Link } from "react-router-dom";
import Balance from "./Balance";
import Location from "./Location";
import Button from "../Button";
import closeIcon from "../../assets/icons/navbar/close.svg";
import personIcon from "../../assets/icons/navbar/person.svg";

interface MobileMenuProps {
  isAuthenticated: boolean;
  isOpen: boolean;
  closeMenu: () => void;
}

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
        className="absolute -left-full top-0 flex h-dvh w-[80%] max-w-sm flex-col bg-white p-4"
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

        <div className="grid gap-2">
          {isAuthenticated && <Balance />}
          {!isAuthenticated && <Button label="Sign In" icon={personIcon} />}
        </div>

        <div className="mt-auto">
          <Location />
          {!isAuthenticated && (
            <div className="mt-4">
              <Button label="Sign In" icon={personIcon} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
