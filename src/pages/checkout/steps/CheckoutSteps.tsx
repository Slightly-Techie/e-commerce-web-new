import { CheckoutState } from "@/lib/index";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import DeliveryAddress from "./delivery-address/DeliveryAddress";
import DeliveryDateAndTime from "./DeliveryDateAndTime";
import Payment from "./Payment";

// instead of having one form state for each step, we can have a single form state for all steps
// this will make it easier to manage the form data
//  and it will prevent the need to pass form data between steps

// the react-router-dom library can be used to manage the steps
// and the form data can be stored in the URL query parameters or in the browser's local storage

// so each step can be a separate component that renders based on the URL path
// and validates the form data based on the URL query parameters or the local storage data
export interface FormValues {
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  location: string | null;
  delivery_date: Date | null;
  convinent_time: Date | null;
  network: string;
  payment_number: string;
  credit_card_number: string;
}

const stepTitles = ["Delivery Address", "Delivery date & time", "Payment"];

const stepPages = [<DeliveryAddress />, <DeliveryDateAndTime />, <Payment />];

const CheckoutSteps: FC<CheckoutState> = ({ step }) => {
  return (
    <div className="w-full max-w-[943px] rounded-[14px] border border-gray200 bg-white p-4 md:p-8">
      <h3 className="mb-8 text-xl font-bold md:text-2xl">{`${step + 1}. ${stepTitles[step]}`}</h3>
      <Outlet />
    </div>
  );
};

export default CheckoutSteps;
