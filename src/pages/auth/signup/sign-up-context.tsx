import { MemberType } from "@/types";
import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { SignupFormFields } from "./signup.types";

interface SignUpContextProps {
  showAccountType: boolean;
  toggleAccountType: () => void;
  form?: UseFormReturn<SignupFormFields, unknown, undefined>;
  member_type: MemberType;
  toggleMemberType: (type: MemberType) => void;
  HandleSubmit: () => void;
  loading?: boolean;
}

export const SignUpContext = createContext<SignUpContextProps>({
  showAccountType: false,
  toggleAccountType: () => {},
  member_type: MemberType.NON_TECHIE,
  toggleMemberType: () => {},
  HandleSubmit: () => {},
  loading: false,
});

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error("useSignUpContext must be used within a SignUpContext");
  }

  return context;
};
