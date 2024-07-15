import heartIcon from "@/assets/icons/cart/heart-gray.svg";
import trashIcon from "@/assets/icons/cart/trash-gray.svg";
import Button from "@/components/Button";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
}

const CartItem = ({ id, image, name }: CartItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-[92px] w-[92px] place-items-center rounded-[7px] bg-gray100">
        <img src={image} alt="" className="h-[62px] w-[77px]" />
      </div>

      <div>
        <p className="mb-3 font-semibold sm:mb-3.5">{name}</p>
        <div className="flex items-center gap-4">
          <Button
            label="Save item"
            icon={heartIcon}
            ghost
            className="w-fit gap-1.5 text-sm text-gray400"
          />
          <Button
            label="Remove item"
            icon={trashIcon}
            ghost
            className="w-fit gap-1.5 text-sm text-gray400"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
