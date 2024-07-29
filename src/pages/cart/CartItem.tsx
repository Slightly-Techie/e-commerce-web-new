import heartIcon from "@/assets/icons/cart/heart-gray.svg";
import heartFavIcon from "@/assets/icons/cart/heart-red.svg";
import trashIcon from "@/assets/icons/cart/trash-gray.svg";
import Button from "@/components/Button";
import useFavorite from "@/hooks/useFavorite";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
}

const CartItem = ({ id, image, name }: CartItemProps) => {
  const { isFavorite, toggleFavoriteHandler } = useFavorite();

  const removeFromCart = useCartStore((state) => state.removeItem);  

  return (
    <div className="flex items-center gap-4">
      <div className="grid h-[92px] w-[92px] place-items-center rounded-[7px] bg-gray100">
        <img src={image} alt="" className="h-[45px] w-[60px]" />
      </div>

      <div>
        <p className="mb-3 font-semibold sm:mb-3.5">{name}</p>
        <div className="flex items-center gap-4">
          <Button
            label="Save item"
            icon={!isFavorite ? heartIcon : heartFavIcon}
            ghost
            className="w-fit gap-1.5 text-sm text-gray400"
            onClick={toggleFavoriteHandler}
          />
          <Button
            label="Remove item"
            icon={trashIcon}
            ghost
            className="w-fit gap-1.5 text-sm text-gray400"
            onClick={() => {
              removeFromCart(id, true);              
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
