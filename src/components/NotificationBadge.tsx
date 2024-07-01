import { FC } from "react";
import { cn } from "../lib";

interface NotificationBadgeProps {
  counter: string;
  small?: boolean;
}

const NotificationBadge: FC<NotificationBadgeProps> = ({ counter, small }) => {
  return (
    <span
      className={cn(
        small ? "h-[18px]" : "h-[23px]",
        small ? "w-[18px]" : "w-[23px]",
        small ? "text-[0.521rem]" : "text-xs",
        "grid place-items-center rounded-full bg-error600 font-bold leading-none text-white",
      )}
    >
      {counter}
    </span>
  );
};

export default NotificationBadge;
