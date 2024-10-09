import { DatePickerDemo } from "@/components/DatePicker";
import { TimePicker12Demo } from "@/components/time-picker-12h-demo";
import { cn } from "@/lib";
import { Routes } from "@/lib/routes";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CheckoutButtons from "../CheckoutButtons";
import { FormValues } from "./CheckoutSteps";

const DeliveryDateAndTimeForm: FC = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<Date>();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      delivery_date: null,
    },
  });

  const onSubmit = () => {
    navigate(Routes.CHECKOUT_PAYMENT);
  };

  return (
    <form
      className="grid gap-6 md:grid-cols-2 md:gap-8"
      onSubmit={handleSubmit(onSubmit, (e) => {
        console.error(e);
      })}
    >
      <div>
        <label className="mb-1 block text-sm font-semibold text-[#111111]">
          Delivery Date
        </label>

        <Controller
          name="delivery_date"
          control={control}
          rules={{ required: "Delivery date is required" }}
          render={({ field }) => (
            <DatePickerDemo
              className={cn(
                "w-full rounded-lg px-4 py-[1.6rem]",
                errors.delivery_date ? "border-rose-500" : "border-gray-300",
              )}
              value={date}
              onChange={(date) => {
                setDate(date as Date);
                field.onChange(date);
              }}
            />
          )}
        />
        {errors.delivery_date && (
          <p className="mt-1 text-sm text-rose-500">
            {errors.delivery_date.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-[#111]">
          Delivery Time
        </label>
        <TimePicker12Demo date={date} setDate={setDate} />
        <p className="mt-1 text-sm">Delivery time is required</p>
      </div>

      <div />
      <CheckoutButtons isFormValid={isValid} />
    </form>
  );
};

export default DeliveryDateAndTimeForm;
