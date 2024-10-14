import { useState } from "react";
import { Link } from "react-router-dom";
import personIcon from "../../assets/icons/navbar/person.svg";
import starsImg from "../../assets/images/stars.png";
import logo from "../../assets/logo.svg";
import Button from "../Button.tsx";
import Container from "../Container.tsx";
import Balance from "./Balance.tsx";
import CartIcon from "./CartIcon.tsx";
import MobileMenu from "./MobileMenu.tsx";
import NotificationIcon from "./NotificationIcon.tsx";
import SearchBar from "./SearchBar.tsx";
import userImg from "/assets/user.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openMobileMenuHandler = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenuHandler = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full">
      <nav className="flex w-full items-center justify-between rounded-bl-2xl rounded-br-2xl bg-white p-4 md:rounded-bl-none md:rounded-br-none">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:w-full md:max-w-sm md:gap-8 lg:max-w-[540px] xl:max-w-5xl">
              <Link to="/">
                <img src={logo} alt="logo image" className="w-10" />
              </Link>

              <div className="hidden w-full md:block">
                <SearchBar />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <NotificationIcon />
              <CartIcon />
              <img
                src={userImg}
                alt=""
                className="h-[44px] w-[44px] rounded-full object-cover md:hidden"
                onClick={openMobileMenuHandler}
              />
              <div className="hidden md:block">
                {isAuthenticated ? (
                  <Balance />
                ) : (
                  <Button label="Sign In" icon={personIcon} />
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 md:hidden">
            <SearchBar />
          </div>
        </Container>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          isAuthenticated={isAuthenticated}
          closeMenu={closeMobileMenuHandler}
        />
      </nav>

      {!isAuthenticated && (
        <div className="hidden place-items-center bg-[#FCF5E3] px-4 py-5 text-[#726031] md:grid">
          <div className="flex items-center gap-2.5 font-semibold">
            <img src={starsImg} alt="" /> Hi, there, lets set you up quickly{" "}
            <button className="rounded-full bg-[#111] p-2 font-bold text-white hover:opacity-90">
              Set me up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
