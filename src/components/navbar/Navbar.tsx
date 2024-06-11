import logo from "../../assets/logo.svg";
import NotificationIcon from "./NotificationIcon.tsx";
import CartIcon from "./CartIcon.tsx";
import Balance from "./Balance.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button.tsx";
import hamburgerIcon from "../../assets/icons/navbar/menu.svg";
import personIcon from "../../assets/icons/navbar/person.svg";
import MobileMenu from "./MobileMenu.tsx";
import SearchBar from "./SearchBar.tsx";
import Container from "../Container.tsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const openMobileMenuHandler = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenuHandler = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-white p-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex w-full max-w-2xl items-center gap-4 md:gap-8 xl:max-w-3xl">
            <Link to="/">
              <img src={logo} alt="logo image" className="w-10" />
            </Link>

            <div className="hidden w-full lg:block">
              <SearchBar />
            </div>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <NotificationIcon />
            <CartIcon />
            {isAuthenticated ? (
              <Balance />
            ) : (
              <Button label="Sign In" icon={personIcon} />
            )}
          </div>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            isAuthenticated={isAuthenticated}
            closeMenu={closeMobileMenuHandler}
          />

          <div className="lg:hidden" onClick={openMobileMenuHandler}>
            <img src={hamburgerIcon} alt="menu icon" className="w-8" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
