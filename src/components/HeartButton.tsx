import { FC, useState } from "react";
import favoriteIcon from "../assets/icons/favorite.svg";
import notFavoriteIcon from "../assets/icons/notFavorite.svg";

interface HeartButtonProps {
  onClick: () => void;
}

const HeartButton: FC<HeartButtonProps> = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);
    onClick()
  };

  return (
    <div
      className="grid h-[37px] w-[37px] cursor-pointer place-items-center rounded-full bg-white"
      onClick={handleClick}
    >
      <img src={!isFavorite ? notFavoriteIcon : favoriteIcon} alt="" />
    </div>
  );
};

export default HeartButton;
