import { Link } from "react-router-dom";
import bellIcon from "../../assets/icons/navbar/bell.svg";

interface NotificationProps {
  closeMenu?: () => void;
}

const NotificationIcon = ({ closeMenu }: NotificationProps) => {
  return (
    <Link
      to="/notifications"
      className="relative flex items-center gap-4 rounded-lg p-3 lg:bg-gray100"
      onClick={closeMenu}
    >
      <img src={bellIcon} alt="" />
      <span className="font-medium text-[#111111] lg:hidden">
        Notifications
      </span>
      <span className="absolute right-2.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-error600 text-xs leading-none text-white lg:right-2 lg:top-1.5">
        5
      </span>
    </Link>
  );
};

export default NotificationIcon;
