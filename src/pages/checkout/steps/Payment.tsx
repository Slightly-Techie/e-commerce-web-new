import cardIcon from "@/assets/icons/checkout/card.svg";
import phoneIcon from "@/assets/icons/checkout/phone.svg";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { cn } from "@/lib";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "./CheckoutSteps";

const paymentMethods = [
  { id: "mobile-money", method: "Mobile Money", icon: phoneIcon },
  { id: "credit-card", method: "Credit Card", icon: cardIcon },
];

const networks = ["MTN", "Telecel", "AirtelTigo"];

const PaymentForm: FC = () => {
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      location: null,
    },
  });

  return (
    <>
      <div className="mb-12 flex gap-4">
        {paymentMethods.map(({ id, method, icon }) => (
          <div
            className={`flex cursor-pointer items-center gap-3 rounded-2xl px-3.5 py-2.5 ${cn(
              paymentMethod === id
                ? "bg-[#111111] text-white hover:bg-[#242424]"
                : "bg-gray100 text-[#111111] hover:bg-gray-100/90",
            )}`}
            key={id}
            onClick={() => setPaymentMethod(id)}
          >
            <img src={icon} alt="" className="h-[33px] w-[33px]" />
            <span className="text-sm font-bold">{method}</span>
          </div>
        ))}
      </div>

      <form>
        {paymentMethod === "mobile-money" && (
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Select
              register={register}
              errors={errors}
              id="network"
              label="Networks"
              options={networks}
              required
            />

            <Input
              register={register}
              errors={errors}
              id="payment_number"
              label="Number"
              type="number"
              placeholder="+233 56 789 5678"
              required
            />
          </div>
        )}

        {paymentMethod === "credit-card" && (
          <div className="max-w-[500px]">
            <Input
              register={register}
              errors={errors}
              id="credit_card_number"
              label="Credit Card Number"
              type="number"
              placeholder="4111 1111 1111 1111"
              required
            />
          </div>
        )}
      </form>
    </>
  );
};

export default PaymentForm;
