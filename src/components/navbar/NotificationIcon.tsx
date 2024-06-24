import { Link } from "react-router-dom";
import bellIcon from "../../assets/icons/navbar/bell.svg";

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
      <span className="absolute right-1 top-1 grid h-[18px] font-bold w-[18px] place-items-center rounded-full bg-error600 text-[0.521rem] leading-none text-white lg:right-[6px] lg:top-1.5">
        5
      </span>
    </Link>
  );
};

export default NotificationIcon;
