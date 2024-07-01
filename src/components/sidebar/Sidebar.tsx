import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import IndicatorIcon from "../../assets/icons/sidebar/Indicator.svg";
import { SIDEBAR_LINKS } from "../../constants";
import { cn } from "../../lib";
import NotificationBadge from "../NotificationBadge";
import STMember from "./STMember";

const Sidebar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 z-20 flex max-h-[896px] w-full bg-white p-4 font-product-sans shadow-custom lg:bottom-auto lg:left-auto lg:top-auto lg:h-custom-height lg:w-[260px] lg:flex-col lg:rounded-2xl lg:shadow-none",
      )}
    >
      <ul className="mx-auto flex w-full max-w-lg justify-between lg:max-w-none lg:flex-col lg:gap-3">
        {SIDEBAR_LINKS.map(({ route, label, label2, icon }, index) => {
          if (windowWidth < 1024 && label === "Favorites") return;

          return (
            <li key={index} className="relative">
              <NavLink
                to={route}
                className={({ isActive }) =>
                  cn(
                    isActive
                      ? "font-bold text-[#181C20] lg:rounded-xl lg:border-gray200 lg:bg-gray100"
                      : "text-gray500",
                    "flex flex-col items-center gap-2.5 border-transparent lg:flex-row lg:border lg:p-3",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {icon}
                    <span className="text-sm md:text-base">
                      {windowWidth > 1024 ? label2 : null} {label}
                    </span>
                    <img
                      src={IndicatorIcon}
                      alt=""
                      className={cn(
                        "lg:hidden",
                        !isActive ? "invisible" : "visible",
                      )}
                    />
                  </>
                )}
              </NavLink>

              {label === "Favorites" && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <NotificationBadge counter="6" />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-auto hidden lg:block">
        <STMember />
      </div>
    </div>
  );
};

export default Sidebar;
