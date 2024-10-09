import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import useCheckoutStore from "@/store/CheckoutStore";
import { FC } from "react";

interface CheckoutButtonsProps {
  isFormValid: boolean;
}

const CheckoutButtons: FC<CheckoutButtonsProps> = (props) => {
  const checkoutState = useCheckoutStore();

  const handleNextStep = () => {
    // Assuming onFormSubmit handles validation and returns a boolean
    if (props.isFormValid) {
      checkoutState.nextStep();
    }
  };

  return (
    <div className="mt-12 flex w-full flex-col gap-4 sm:ml-auto sm:w-fit sm:flex-row">
      {checkoutState.prevStepLabel && (
        <Button
          className="rounded-lg border border-gray300 bg-transparent px-6 py-2 font-semibold text-primaryLight"
          onClick={checkoutState.prevStep}
        >
          {checkoutState.prevStepLabel}
        </Button>
      )}

      <Button
        className={`${cn(
          "rounded-lg px-6 py-2 hover:bg-[#242424] hover:text-white",
          checkoutState.step === checkoutState.maxStep
            ? "bg-gray100 font-semibold text-gray500"
            : "bg-[#111111] font-medium text-white",
        )}`}
        type="submit"
        onClick={handleNextStep}
      >
        {checkoutState.nextStepLabel}
      </Button>
    </div>
  );
};

export default CheckoutButtons;
