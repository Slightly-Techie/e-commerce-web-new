import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop";

interface SidebarProps {
  open: boolean;
}

const sidebarLinks = [
  {
    name: "All Products",
    route: "/",
  },
  {
    name: "Explore",
    route: "explore",
  },
  {
    name: "Favorite",
    route: "favorite",
  },
];

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <>
      <div className="hidden">
        <Backdrop closeMenu={() => {}} />
      </div>
      <div className="fixed -left-full top-[61px] z-20 flex h-dvh w-[80%] max-w-[260px] flex-col bg-white p-4 lg:left-auto lg:top-auto lg:rounded-tl-2xl lg:rounded-tr-2xl">
        <ul className="grid gap-3">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-xl border border-gray200 bg-gray100 p-3 font-bold"
                    : "block p-3"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
