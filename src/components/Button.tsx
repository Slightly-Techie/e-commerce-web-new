import React from "react";
import { cn } from "../lib";
import { ButtonType } from "../types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  icon?: string;
  secondary?: boolean;
  white?: boolean;
  ghost?: boolean;
  invert?: boolean;
  underline?: boolean;
  btnType?: ButtonType;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  icon: Icon,
  secondary,
  white,
  ghost,
  invert,
  onClick,
  underline,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-2.5 rounded-lg bg-[#111111] font-medium text-white hover:opacity-90",
        secondary && "bg-gray100",
        secondary && "text-[#111111]",
        white && "bg-white",
        white && "text-[#111111]",
        !ghost ? "px-4 py-2.5" : "px-0 py-0",
        ghost && "bg-transparent text-gray-500",
        invert && "flex-row-reverse",
        className,
      )}
      onClick={onClick}
    >
      <img src={Icon} alt="" />
      <span
        className={cn(
          underline &&
            'relative after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-full after:bg-gray500 after:content-[""]',
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
