import Input from "@/components/Input";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "./CheckoutSteps";
import calendarIcon from '@/assets/icons/checkout/calendar-date.svg'
import clockIcon from '@/assets/icons/checkout/clock.svg'

interface DeliveryDateAndTimeProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const DeliveryDateAndTime: FC<DeliveryDateAndTimeProps> = ({
  register,
  errors,
}) => {
  return (
    <form className="grid gap-6 md:grid-cols-2 md:gap-8">
      <Input
        register={register}
        errors={errors}
        icon={calendarIcon}
        id="delivery_date"
        label="Delivery Date"
        type="date"
        placeholder="November 23, 2024"
        required
      />

      <Input
        register={register}
        errors={errors}
        icon={clockIcon}
        id="convinent_time"
        label="Convinent Time"
        type="time"
        placeholder="1:00 PM - 4:00 PM"
        required
      />
    </form>
  );
};

export default DeliveryDateAndTime;
