import React from "react";
import { cn } from "../lib";
import { ButtonType } from "../types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  icon?: string;
  invert?: boolean;
  underline?: boolean;
  btnType?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  icon: Icon,
  onClick,
  underline,
  disabled,
  invert,
  children,
  btnType,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center gap-2.5 rounded-lg bg-[#111111] font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30",
        btnType === ButtonType.secondary && "bg-gray100 text-[#111111]",
        btnType === ButtonType.white && "bg-white text-[#111111]",
        btnType !== ButtonType.ghost ? "px-4 py-2.5" : "px-0 py-0",
        btnType === ButtonType.ghost && "bg-transparent text-gray-500",
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
        {label || children}
      </span>
    </button>
  );
};

export default Button;
