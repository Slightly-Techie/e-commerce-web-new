import Input from "@/components/Input";
import { Routes } from "@/lib/routes";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CheckoutButtons from "../../CheckoutButtons";
import { FormValues } from "../CheckoutSteps";
import UserLocation from "./UserLocation";

const DeliveryAddressForm: FC = () => {
  const [userLocation, setUserLocation] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      location: null,
    },
  });

  const onSubmit = () => {
    navigate(Routes.CHECKOUT_DELIVERY_DATE_AND_TIME);
  };

  return (
    <>
      <form
        className="mb-12"
        onSubmit={handleSubmit(onSubmit, (e) => {
          console.error(e);
        })}
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Input
            register={register}
            errors={errors}
            id="firstname"
            label="First Name"
            type="text"
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

        <UserLocation
          register={register}
          userLocation={userLocation}
          setUserLocation={setUserLocation}
        />

        <CheckoutButtons isFormValid={isValid} />
      </form>
    </>
  );
};

export default DeliveryAddressForm;
