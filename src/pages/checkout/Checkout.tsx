import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { cn } from "@/lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderTotal from "./order-total/OrderTotal";
import CheckoutSteps from "./steps/CheckoutSteps";
import { Process } from "./steps/process";

const Checkout = () => {
  const [step, setStep] = useState(
    JSON.parse(localStorage.getItem("checkout-step")!) ||
      Process.DeliveryAddress,
  );

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

        <div className="flex max-w-[830px] flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="font-semibold">
            (Complete the steps in order to Confirm Order)
          </p>

          <div className="flex items-center gap-4">
            <div className="h-[8px] w-[100px] rounded-full bg-gray100">
              <div
                className={cn(
                  "h-full rounded-full bg-success600 transition-all",
                  step === Process.DeliveryAddress
                    ? "w-[33.333%]"
                    : step === Process.DeliveryDateAndTime
                      ? "w-[66.666%]"
                      : "w-full",
                )}
              ></div>
            </div>

            <span className="font-bold text-[#111111]">
              {step + 1} / {Process.Payment + 1}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 lg:flex-row">
          <CheckoutSteps step={step} setStep={setStep} />
          <OrderTotal />
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
