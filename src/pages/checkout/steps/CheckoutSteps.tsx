import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import CheckoutButtons from "../CheckoutButtons";
import DeliveryAddress from "./delivery-address/DeliveryAddress";
import DeliveryDateAndTime from "./DeliveryDateAndTime";
import Payment from "./Payment";
import { Process } from "./process";

export interface FormValues {
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  delivery_date: Date | null;
  convinent_time: Date | null;
  network: string;
  payment_number: string;
  credit_card_number: string;
}

interface CheckoutStepsProps {
  step: number;
  setStep: Dispatch<SetStateAction<Process>>;
}

const stepTitles = ["Delivery Address", "Delivery date & time", "Payment"];

const CheckoutSteps: FC<CheckoutStepsProps> = ({ step, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      delivery_date: null,
      convinent_time: null,
      network: "MTN",
      payment_number: "",
      credit_card_number: "",
    },
  });

  const onPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem("checkout-step", JSON.stringify(step));
  }, [step]);

  const submitHandler = (data: any) => {
    if (step !== Process.Payment) {
      onNextStep();
      return;
    }

    alert("Payment made");
  };

  return (
    <div className="w-full max-w-[943px] rounded-[14px] border border-gray200 bg-white p-4 md:p-8">
      <h3 className="mb-8 text-xl font-bold md:text-2xl">{`${step + 1}. ${stepTitles[step]}`}</h3>

      {step === Process.DeliveryAddress && (
        <DeliveryAddress register={register} errors={errors} />
      )}

      {step === Process.DeliveryDateAndTime && (
        <DeliveryDateAndTime register={register} errors={errors} />
      )}

      {step === Process.Payment && (
        <Payment register={register} errors={errors} />
      )}

      <CheckoutButtons
        step={step}
        process={Process}
        prevStep={onPrevStep}
        onSubmit={handleSubmit(submitHandler)}
      />
    </div>
  );
};

export default CheckoutSteps;
