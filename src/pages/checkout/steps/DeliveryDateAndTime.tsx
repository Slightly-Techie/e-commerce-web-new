import { DatePickerDemo } from "@/components/DatePicker";
import { TimePicker12Demo } from "@/components/time-picker-12h-demo";
import { cn } from "@/lib";
import { FC, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { FormValues } from "./CheckoutSteps";

interface DeliveryDateAndTimeProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const DeliveryDateAndTime: FC<DeliveryDateAndTimeProps> = ({
  register,
  control,
  errors,
}) => {
  const [date, setDate] = useState<Date>();

  console.log(date);

  return (
    <form className="grid items-end gap-6 md:grid-cols-2 md:gap-8">
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
              {...field}
            />
          )}
        />
        {errors.delivery_date && (
          <p className="mt-1 text-sm text-rose-500">
            {errors.delivery_date.message}
          </p>
        )}
      </div>

      {/* <Input
        register={register}
        errors={errors}
        icon={clockIcon}
        id="convinent_time"
        label="Convinent Time"
        type="time"
        placeholder="1:00 PM - 4:00 PM"
        required
      /> */}      

      <div>
        <label className="text-sm font-semibold text-[#111]">
          Delivery Time
        </label>
        <TimePicker12Demo date={date} setDate={setDate} />
        <p className="text-sm mt-1">Delivery time is required</p>
      </div>
    </form>
  );
};

export default DeliveryDateAndTime;
