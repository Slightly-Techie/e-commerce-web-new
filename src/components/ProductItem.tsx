import Button from "./Button";
import cartIcon from "../assets/icons/navbar/cart.svg";
import favoriteIcon from "../assets/icons/favorite.svg";
import notFavoriteIcon from "../assets/icons/notFavorite.svg";

interface ProductItemProps {
  name: string;
  discount: number;
  price: string;
  discountedPrice: string | null;
  quantity: number;
  image: string;
  favorite: boolean;
}

const ProductItem = ({
  discount,
  discountedPrice,
  favorite,
  image,
  name,
  price,
  quantity,
}: ProductItemProps) => {
  return (
    <div className="cursor-pointer">
      <div className="relative grid h-[210px] w-[234px] place-items-center overflow-hidden rounded-2xl bg-gray100 p-3">
        <img src={image} alt="" />

        {!!discount && (
          <span className="absolute left-4 top-4 grid h-[25px] w-[46px] place-items-center rounded-full bg-orange-500 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}

        <div className="absolute bottom-4 right-4 grid h-[37px] w-[37px] cursor-pointer place-items-center rounded-full bg-white">
          <img src={!favorite ? notFavoriteIcon : favoriteIcon} alt="" />
        </div>
      </div>

      <div className="mt-4">
        <p className="font-medium text-gray600">{name}</p>
        <div className="mb-8 mt-4 flex items-center gap-1.5">
          <span className="text-lg font-bold">{price}</span>
          {discountedPrice && (
            <span className="text-sm font-medium text-gray400 line-through">
              {discountedPrice}
            </span>
          )}
        </div>

        <Button
          label="Add to cart"
          secondary
          invert
          icon={cartIcon}
          className="w-full font-semibold"
        />
      </div>
    </div>
  );
};

export default ProductItem;
