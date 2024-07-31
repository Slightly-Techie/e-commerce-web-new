import { useState } from "react";
import { useNavigate } from "react-router-dom";
import chevronLeftIcon from "../../../../assets/icons/chevron-left.svg";
import favoriteIcon from "../../../../assets/icons/favorite.svg";
import notFavoriteIcon from "../../../../assets/icons/notFavorite.svg";
import shareIcon from "../../../../assets/icons/share.svg";

const Navigation = () => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="relative z-20 flex w-full items-center justify-between p-2 md:p-6">
      <div className="z-10 flex w-full items-center justify-between">
        <button
          className="flex items-center gap-2 rounded-full bg-white px-2 py-2 md:px-3"
          onClick={() => navigate(-1)}
        >
          <div className="grid h-[22px] w-[22px] cursor-pointer place-items-center rounded-full bg-white">
            <img src={chevronLeftIcon} alt="" />
          </div>

          <span className="hidden md:block">Back</span>
        </button>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-white px-2 py-2 md:px-3">
            <div className="grid h-[22px] w-[22px] cursor-pointer place-items-center rounded-full bg-white">
              <img src={shareIcon} alt="" />
            </div>
            <span className="hidden md:block">Share</span>
          </button>

          <button
            className="flex items-center gap-2 rounded-full bg-white px-2 py-2 md:px-3"
            onClick={handleClick}
          >
            <div className="grid h-[22px] w-[22px] cursor-pointer place-items-center rounded-full bg-white">
              <img src={!isFavorite ? notFavoriteIcon : favoriteIcon} alt="" />
            </div>
            <span className="hidden md:block">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
