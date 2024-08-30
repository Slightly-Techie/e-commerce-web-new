import Button from "@/components/Button";
import { cn } from "@/lib";
import { FC } from "react";

interface CheckoutButtonsProps {
  step: number;
  process: any;
  prevStep: () => void;
  onSubmit: (data: any) => void;
}

const prevButtonLabels = [
  undefined,
  "Delivery Address",
  "Delivery Date & Time",
];
const nextButtonLabels = ["Delivery Address", "Payment Method", "Make Payment"];

const CheckoutButtons: FC<CheckoutButtonsProps> = ({
  step,
  process,
  prevStep,
  onSubmit,
}) => {
  return (
    <div className="mt-12 flex w-full flex-col gap-4 sm:ml-auto sm:w-fit sm:flex-row">
      {step > process.DeliveryAddress && (
        <Button
          label={prevButtonLabels[step]}
          className="border border-gray300 bg-transparent font-semibold text-primaryLight"
          onClick={prevStep}
        />
      )}

      <Button
        label={nextButtonLabels[step]}
        className={`${cn(
          step < process.Payment
            ? "bg-gray100 font-semibold text-gray500"
            : "bg-[#111111] font-medium text-white",
        )}`}
        onClick={onSubmit}
      />
    </div>
  );
};

export default CheckoutButtons;
