import React from "react";
import { cn } from "../lib";

interface ButtonProps {
  className?: string;
  label: string;
  icon?: string;
  secondary?: boolean;
  ghost?: boolean;
  invert?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  icon,
  secondary,
  ghost,
  invert,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2.5 rounded-lg bg-[#111111] font-medium text-white hover:opacity-90",
        secondary && "bg-gray100",
        secondary && "text-[#111111]",
        !ghost ? "px-4 py-2.5" : "px-0 py-0",
        ghost && "bg-transparent text-gray-500",
        invert && "flex-row-reverse",
        className,
      )}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" />} {label}
    </button>
  );
};

export default Button;
