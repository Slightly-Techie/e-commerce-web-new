import { cn } from "@/lib";
import { REGEXPATTERNS } from "@/lib/constants";
import { FormValues } from "@/pages/checkout/steps/CheckoutSteps";
import { Dispatch, FC, SetStateAction, useCallback, useRef } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  type?: string;
  register: UseFormRegister<FormValues>;
  id: keyof FormValues;
  label: string;
  placeholder: string;
  icon?: string;
  errors?: FieldErrors<FormValues>;
  required?: boolean;
  setInputValue?: Dispatch<SetStateAction<string>>;
}

const Input: FC<InputProps> = ({
  type = "text",
  register,
  id,
  label,
  placeholder,
  icon,
  errors,
  required,
  setInputValue,
}) => {
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        if (setInputValue) {
          setInputValue(value);
        }
      }, 300);
    },
    [setInputValue],
  );

  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-[#111111]">
        {label}
      </label>

      <div className="relative">
        <input
          {...register(id, {
            required,
            ...(id === "email" && { pattern: REGEXPATTERNS.email }),
            ...(id === "number" && { pattern: REGEXPATTERNS.phoneNumber }),
            ...(id === "payment_number" && {
              pattern: REGEXPATTERNS.phoneNumber,
            }),
            onChange: (e) => {
              debouncedOnChange(e);

              e.target.dispatchEvent(
                new Event("input", { bubbles: true, cancelable: true })
              );
            },
          })}
          type={type}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-lg border px-4 py-3 focus:outline",
            errors?.[id]
              ? "border-rose-500 outline-rose-500 placeholder:text-rose-500 focus:border-transparent"
              : "border-gray300 placeholder:text-gray400 focus:outline-[#111111]"
          )}
        />

        {icon && (
          <img
            src={icon}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        )}
      </div>

      {errors?.[id] && (
        <p className="mt-2 text-sm text-rose-500">{`${label} is required`}</p>
      )}
    </div>
  );
};

export default Input;
