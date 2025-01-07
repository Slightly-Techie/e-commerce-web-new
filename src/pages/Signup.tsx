import ChooseAccountType from "@/components/ChooseAccountType";
import CreateAccountForm from "@/components/CreateAccountForm";
import VerifyCodeForm from "@/components/VerifyCodeForm";
import useAuth from "@/hooks/auth/useAuth";
import { Routes } from "@/lib/routes";
import {
  MemberType,
  SignUpErrorResponse,
  SignupFormFields,
  SignUpSuccessResponse,
} from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import AuthLayout from "../components/AuthLayout";

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
});

const Signup = () => {
  const [showAccountType, setShowAccountType] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [member_type, setMemberType] = useState<MemberType>(
    MemberType.NON_TECHIE,
  );
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const form = useForm<SignupFormFields>({
    defaultValues: {
      member_type: member_type,
    },
  });

  function toggleAccountType() {
    setLoading(false);
    setShowAccountType((prev) => !prev);
  }

  function toggleMemberType(type: MemberType) {
    setMemberType(type);
    form.setValue("member_type", type);
  }

  async function HandleSubmit() {
    return;
    setLoading(true);
    const data = {
      ...form.getValues(),
      password2: form.getValues().password,
    };
    const response = await auth.signup(data);

    const isValid = z.custom<SignUpSuccessResponse>().safeParse(response);

    console.log("isValid", isValid);

    if (!isValid.success) {
      const errors = response as SignUpErrorResponse;

      Object.keys(errors).forEach((key) => {
        errors[key].forEach((error) => {
          form.setError(
            key as keyof SignupFormFields,
            { type: "manual", message: error },
            {
              shouldFocus: true,
            },
          );
        });
      });

      toggleAccountType();
      return;
    } else {
      navigate(Routes.NON_ST_ACCOUNT);
    }
  }

  async function HandleVerifyCode() {}

  const value = {
    showAccountType,
    toggleAccountType,
    form,
    member_type,
    toggleMemberType,
    HandleSubmit,
    loading,
  };

  return (
    <SignUpContext.Provider value={value}>
      <AuthLayout
        buttonRoute="/login"
        buttonText="Already have an account? Login"
      >
        <AnimatePresence initial={false}>
          {showVerifyCode ? (
            <MotionItem key="verify-code-form">
              <VerifyCodeForm handleFormSubmit={HandleVerifyCode} />
            </MotionItem>
          ) : showAccountType ? (
            <MotionItem key="choose-account-type">
              <ChooseAccountType />
            </MotionItem>
          ) : (
            <MotionItem key="create-account-form">
              <CreateAccountForm />
            </MotionItem>
          )}
        </AnimatePresence>
      </AuthLayout>
    </SignUpContext.Provider>
  );
};

export default Signup;

const MotionItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};
