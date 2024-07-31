import { useState } from "react";

const useFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavoriteHandler = () => setIsFavorite((prev) => !prev);

  return {
    isFavorite,
    toggleFavoriteHandler,
  };
};

export default useFavorite;
