import { Link } from "react-router-dom";
import bellIcon from "../../assets/icons/navbar/bell.svg";
import NotificationBadge from "../NotificationBadge";

interface NotificationProps {
  closeMenu?: () => void;
}

const NotificationIcon = ({ closeMenu }: NotificationProps) => {
  return (
    <Link
      to="/notifications"
      className="relative rounded-lg p-3 bg-gray100 w-[44px]"
      onClick={closeMenu}
    >
      <img src={bellIcon} alt="" className="w-[24px]"/>
      <div className="absolute right-1 top-1 lg:right-[6px] lg:top-1.5">
        <NotificationBadge counter="5" small/>
      </div>
    </Link>
  );
};

export default NotificationIcon;
