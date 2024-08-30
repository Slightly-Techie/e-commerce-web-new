import Input from "@/components/Input";
import { Dispatch, FC, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "../CheckoutSteps";
import UserLocation from "./UserLocation";

interface DeliveryAddressProps {
  userLocation: string;
  setUserLocation: Dispatch<SetStateAction<string>>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const DeliveryAddress: FC<DeliveryAddressProps> = ({
  register,
  errors,
  userLocation,
  setUserLocation,
}) => {
  return (
    <>
      <form className="mb-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Input
            register={register}
            errors={errors}
            id="firstname"
            label="First Name"
            placeholder="Eg James"
            required
          />

          <Input
            register={register}
            errors={errors}
            id="lastname"
            label="Last Name"
            placeholder="Eg Zimbi"
            required
          />

          <Input
            register={register}
            errors={errors}
            id="number"
            label="Number"
            type="number"
            placeholder="+233 56 789 5678"
            required
          />

          <div>
            <Input
              register={register}
              errors={errors}
              id="email"
              label="Email Address"
              type="email"
              placeholder="Eg st@mail.com"
              required
            />

            <span className="mt-1 text-xs text-gray-500">
              Invoice is sent to this provided email
            </span>
          </div>
        </div>
      </form>

      <UserLocation
        register={register}
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />
    </>
  );
};

export default DeliveryAddress;
