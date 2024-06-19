import { Link } from "react-router-dom";
import bellIcon from "../../assets/icons/navbar/bell.svg";

interface NotificationProps {
  closeMenu?: () => void;
}

const NotificationIcon = ({ closeMenu }: NotificationProps) => {
  return (
    <Link
      to="/notifications"
      className="lg:bg-gray100 relative flex items-center gap-4 rounded-lg p-3"
      onClick={closeMenu}
    >
      <img src={bellIcon} alt="" />
      <span className="font-medium text-[#111111] lg:hidden">
        Notifications
      </span>
      <span className="bg-error600 absolute right-2.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-red-500 text-xs leading-none text-white lg:right-2 lg:top-1.5">
        5
      </span>
    </Link>
  );
};

export default NotificationIcon;
