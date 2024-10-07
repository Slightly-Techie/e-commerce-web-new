import { CheckoutState, Routes } from "@/lib/index";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

const RouteIndexes = {
  0: Routes.CHECKOUT_DELIVERY_ADDRESS,
  1: Routes.CHECKOUT_DELIVERY_DATE_AND_TIME,
  2: Routes.CHECKOUT_PAYMENT,
};

const maxStep = Object.keys(RouteIndexes).length - 1;

const ButtonLabels = [
  "Delivery Address",
  "Delivery Date & Time",
  "Make Payment",
  "Complete",
];

const getStepLabel = (step: number) => ButtonLabels[step];

const getStepState = (step: number) => {
  return {
    step,
    nextStepLabel: getStepLabel(step + 1),
    prevStepLabel: getStepLabel(step - 1),
  };
};

const useCheckoutStore = create(
  persist<CheckoutState>(
    (set) => ({
      step: 0,
      maxStep,
      nextStepLabel: getStepLabel(1),
      prevStepLabel: undefined,
      nextStep: () =>
        set((state) => {
          const newStep = Math.min(state.step + 1, maxStep);
          return getStepState(newStep);
        }),
      prevStep: () =>
        set((state) => {
          const newStep = Math.max(state.step - 1, 0);
          return getStepState(newStep);
        }),
      setStep: (step: number) => {
        const newStep = Math.max(0, Math.min(step, maxStep));
        set(getStepState(newStep));
      },
    }),
    { name: "checkout-store" } as PersistOptions<CheckoutState>,
  ),
);

export default useCheckoutStore;
