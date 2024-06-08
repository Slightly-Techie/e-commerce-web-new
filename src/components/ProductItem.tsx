import { FiShoppingBag } from "react-icons/fi";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Products {
  name: string;
  price: string;
  discountedPrice: string;
  image: string;
  favorite: boolean;
  discount: number;
  quantity: number;
}

export default function ProductItem({
  name,
  image,
  favorite,
  discount,
  discountedPrice,
  price,
  quantity,
}: Products) {
  return (
    <div className="w-[234px]">
      <div className="relative flex h-[210px] w-full items-center justify-center rounded-md bg-gray100 font-product-sans">
        <img src={image} alt={name} className="h-[170px] w-[90%]" />
        {discount > 0 && (
          <span className="absolute left-4 top-2 rounded-2xl bg-[#FF7E24] px-4 py-1 text-white">
            {`-${discount}%`}
          </span>
        )}
        <span className="absolute bottom-4 right-5 cursor-pointer rounded-full bg-white p-2">
          {!favorite && <MdFavoriteBorder size={18} />}
          {favorite && <MdFavorite size={18} className="text-error600" />}
        </span>
      </div>

      <div className=" mt-2 space-y-1 font-product-sans">
        <p className="line-clamp-1 text-gray600">{name}</p>
        <div className="flex items-baseline gap-3">
          <p className="text-lg font-bold">{discountedPrice}</p>
          {discount > 0 && (
            <p className="font-medium text-gray400 line-through">{price}</p>
          )}
        </div>
      </div>

      <button
        disabled={quantity > 0}
        className={`mt-4 w-full rounded-md bg-gray75 py-2 font-medium
          ${quantity > 0 ? "text-black" : " text-gray-300"}
        `}
      >
        Add to Cart <FiShoppingBag className="mb-[2px] ml-1 inline-block" />{" "}
      </button>
    </div>
  );
}
