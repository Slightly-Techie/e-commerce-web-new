import { NavLink } from "react-router-dom";
import { SIDEBAR_LINKS } from "../../constants";
import { cn } from "../../lib";
import STMember from "./STMember";
import { useEffect, useState } from "react";
import IndicatorIcon from '../../assets/icons/sidebar/Indicator.svg'

const Sidebar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div
        className={cn(
          "fixed bottom-0 z-20 shadow-custom flex max-h-[896px] w-full lg:w-[260px] bg-white p-4 font-product-sans lg:left-auto lg:top-auto lg:h-custom-height lg:rounded-2xl lg:flex-col lg:bottom-auto lg:shadow-none",
        )}
      >
        <ul className="flex justify-between w-full max-w-lg mx-auto lg:max-w-none lg:flex-col lg:gap-3">
          {SIDEBAR_LINKS.map(({ route, label, label2, icon }, index) => {
           if(windowWidth < 1024 && label === 'Favorites') return

           return (
             <li key={index}>
               <NavLink
                 to={route}
                 className={({ isActive }) =>
                   cn(
                     isActive
                       ? "font-bold text-[#181C20] lg:rounded-xl lg:border-gray200 lg:bg-gray100"
                       : "text-gray500",
                     "flex flex-col items-center gap-2.5 lg:flex-row lg:border lg:p-3 border-transparent",
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
             </li>
           );
          })}
        </ul>

        <div className="hidden lg:block mt-auto">
        <STMember />
        </div>
      </div>
  );
};

export default Sidebar;
