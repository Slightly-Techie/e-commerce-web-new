import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import xCloseIcon from "@/assets/icons/x-close.svg";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { useNavigate } from "react-router-dom";
import CartTable from "./CartTable";
import OrderTotal from "./OrderTotal";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 pb-20 pt-[11.375rem] md:pt-[8.25rem]">
      <Container>
        <Button
          label="Continue Shopping"
          icon={chevronLeftIcon}
          white
          className="mb-8 border border-gray300 font-semibold"
          onClick={() => navigate("/")}
        />

        <div className="flex flex-col gap-4 md:items-start 1280:flex-row">
          <div className="rounded-[14px] border border-gray300 bg-white p-6 lg:w-[943px]">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
              <h3 className="text-xl font-bold">Your shopping cart ( 3 )</h3>

              <Button
                label="Clear Cart"
                icon={xCloseIcon}
                ghost
                className="w-fit font-medium text-error500"
              />
            </div>

            <CartTable />
          </div>

          <OrderTotal />
        </div>
      </Container>
    </section>
  );
};

export default Cart;
