import React from "react";
import { Link } from "react-router-dom";
import bellIcon from "../../assets/icons/navbar/bell.svg";
import { cn } from "../../lib";

type MobileNavItemProps = {
  closeMenu?: () => void;
  icon: string;
  label: string;
  count?: number;
} & React.ComponentProps<"a">;

const MobileNavItem = ({
  closeMenu,
  className,
  label,
  icon,
  count = 0,
  href,
  ...rest
}: MobileNavItemProps) => {
  return (
    <Link
      to={href as string}
      className={cn(
        "relative flex items-center gap-4 rounded-lg bg-gray100 p-2.5",
        className,
      )}
      onClick={closeMenu}
    >
      <img src={icon} alt="" />
      <span className="font-medium text-[#111111] lg:hidden">{label}</span>
      {count > 0 && (
        <span className="absolute right-2.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-error600 text-xs leading-none text-white lg:right-1 lg:top-1">
          {count}
        </span>
      )}
    </Link>
  );
};

export default MobileNavItem;
