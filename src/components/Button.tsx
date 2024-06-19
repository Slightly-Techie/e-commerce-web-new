import React from "react";

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
      className={`flex items-center justify-center gap-2.5 rounded-lg bg-[#111111] font-medium hover:opacity-90 ${secondary && "bg-gray75"} ${secondary ? "text-[#111111]" : "text-white"} ${!ghost ? "px-4" : "px-0"} ${!ghost ? "py-2.5" : "py-0"} ${ghost && "bg-transparent"} ${ghost && "text-gray500"} ${invert && "flex-row-reverse"} ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" />} {label}
    </button>
  );
};

export default Button;
