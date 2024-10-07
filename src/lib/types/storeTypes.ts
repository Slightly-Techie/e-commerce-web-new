export interface CheckoutState {
  step: number;
  maxStep: number;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  nextStepLabel: string | undefined;
  prevStepLabel: string | undefined;
}
