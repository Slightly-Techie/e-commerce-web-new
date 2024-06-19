import React from "react";

interface ButtonProps {
  label: string;
  icon?: string;
  secondary?: boolean;
  invert?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  secondary,
  invert,
  onClick,
}) => {
  return (
    <button
      className={`flex w-full items-center justify-center gap-2.5 rounded-lg px-4 py-2.5 lg:w-fit ${!secondary ? "bg-[#111111]" : "bg-gray75"} ${!secondary ? "text-white" : "text-[#111111]"} ${invert && "flex-row-reverse"}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" />} {label}
    </button>
  );
};

export default Button;
