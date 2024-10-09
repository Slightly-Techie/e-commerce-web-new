import { FormValues } from "@/pages/checkout/steps/CheckoutSteps";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import chevronDown from "../assets/icons/chevron-down.svg";

interface SelectProps {
  label?: string;
  options: string[];
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  required?: boolean;
}

const Select: FC<SelectProps> = ({
  label,
  options,
  id,
  register,
  errors,
  required,
}) => {
  return (
    <div>
      {label && (
        <label className="mb-1 block text-sm font-semibold text-[#111111]">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          {...register(id, { required })}
          className={`w-full appearance-none rounded-lg border px-4 py-3 focus:outline ${
            errors?.[id]
              ? "border-rose-500 focus:border-transparent focus:outline-rose-500"
              : "border-gray300 focus:outline-[#111111]"
          }`}
        >
          {options.map((option, index) => (
            <option value={option} key={index} className="text-[#111111]">
              {option}
            </option>
          ))}
        </select>

        <img
          src={chevronDown}
          alt=""
          className="absolute right-4 top-1/2 h-[24px] w-[24px] -translate-y-1/2"
        />
      </div>

      {errors?.[id] && (
        <p className="mt-2 text-sm text-rose-500">{`${label} is required`}</p>
      )}
    </div>
  );
};

export default Select;
