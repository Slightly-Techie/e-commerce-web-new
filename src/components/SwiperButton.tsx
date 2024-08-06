import { forwardRef } from "react";
import chevronLeftIcon from "../assets/icons/chevron-left.svg";
import { cn } from "../lib";

interface SwiperButtonProps {
  disabled: boolean;
  right?: boolean;
  className?: string;
}

const SwiperButton = forwardRef<HTMLButtonElement, SwiperButtonProps>(
  ({ right, disabled, className }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "grid h-[25px] w-[25px] place-items-center rounded-full bg-gray200 disabled:bg-gray100 md:h-[35px] md:w-[35px]",
          className,
        )}
      >
        <img
          src={chevronLeftIcon}
          alt=""
          className={cn(right && "rotate-180")}
        />
      </button>
    );
  },
);

export default SwiperButton;
