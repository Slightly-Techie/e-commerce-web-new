import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import xCloseIcon from "@/assets/icons/x-close.svg";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { useCartStore } from "@/store/cartStore";
import { ButtonType } from "@/types";
import { useNavigate } from "react-router-dom";
import CartTable from "./CartTable";
import OrderTotal from "./OrderTotal";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCartHandler = useCartStore((state) => state.clearCart);

  const navigate = useNavigate();

  const itemsQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity!;
  }, 0);

  return (
  <main>
      {itemsQuantity > 0 ?
        <section className="px-4 pb-20 pt-[11.375rem] md:pt-[8.25rem]">
        <Container>
        <Button
          label="Continue Shopping"
          icon={chevronLeftIcon}
          btnType={ButtonType.white}
          className="mb-8 border border-gray300 font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-col gap-4 md:items-start 1280:flex-row">
          <div className="rounded-[14px] border border-gray300 bg-white p-6 md:w-full lg:w-[943px]">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
              <h3 className="text-xl font-bold">
                Your shopping cart ( {itemsQuantity} )
              </h3>

              {itemsQuantity > 0 && (
                <Button
                  label="Clear Cart"
                  icon={xCloseIcon}
                  btnType={ButtonType.ghost}
                  className="w-fit font-medium text-error500 cursor-pointer"
                  onClick={clearCartHandler}
                />
              )}
            </div>
              <CartTable cartItems={cart} />
          </div>
          <OrderTotal />
        </div>
      </Container> 
      </section> :
        <section className="relative min-h-screen flex items-center justify-center px-4 pb-20 pt-[11.375rem] md:pt-[4.25rem]">
          <Button
          label="Continue Shopping"
          icon={chevronLeftIcon}
          btnType={ButtonType.white}
          className="mb-8 absolute top-10 left-4 border border-gray300 font-semibold cursor-pointer"
          onClick={() => navigate("/")}
          />
          <article className="w-full flex flex-col items-center justify-center md:w-[346px]">
            <img src="/cart_empty.webp" alt="cart empty" className="size-[100px]" />
            <div className="mt-5 text-center space-y-3">
              <h5 className="font-bold text-xl">Your cart is empty!</h5>
              <p className="text-[#64748B]">All your products added to cart will appear here</p>
            </div>
            <Button
            label="Shop for items"
            btnType={ButtonType.primary}
            className="mb-8 mt-7 border border-gray300 font-semibold cursor-pointer"
            onClick={() => navigate("/")}
            />
          </article>
        </section>
      }
    </main>
  );
};

export default Cart;
