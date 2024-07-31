import useFavorite from "@/hooks/useFavorite";
import favoriteIcon from "../assets/icons/favorite.svg";
import notFavoriteIcon from "../assets/icons/notFavorite.svg";

const HeartButton = () => {
  const { isFavorite, toggleFavoriteHandler } = useFavorite();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavoriteHandler();
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
