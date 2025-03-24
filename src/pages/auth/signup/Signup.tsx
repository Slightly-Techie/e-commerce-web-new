import AuthLayout from "@/components/AuthLayout";
import ChooseAccountType from "@/components/ChooseAccountType";
import CreateAccountForm from "@/components/CreateAccountForm";
import useAuth from "@/hooks/auth/useAuth";
import { Routes } from "@/lib/routes";
import { SignUpContext } from "@/pages/auth/signup/sign-up-context";
import {
  SignUpErrorResponseSchema,
  SignupFormFields,
  SignUpSuccessResponse,
} from "@/pages/auth/signup/signup.types";
import { MemberType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showAccountType, setShowAccountType] = useState(false);
  const [member_type, setMember_type] = useState<MemberType>(
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
    if (!form.formState.isValid) return;
    setShowAccountType((prev) => !prev);
  }

  function toggleMemberType(type: MemberType) {
    setMember_type(type);
    form.setValue("member_type", type);
  }

  async function HandleSubmit() {
    try {
      if (loading) return;

      setLoading(true);

      const data = {
        ...form.getValues(),
        password2: form.getValues().password,
      };

      const response = await auth.signup(data);

      if (!SignUpSuccessResponse.safeParse(response).success) {
        try {
          const errors = SignUpErrorResponseSchema.parse(response);
          console.log("Parsed errors:", errors);

          Object.entries(errors).forEach(([field, errorMessages]) => {
            if (field === "detail") {
              form.setError("root", {
                message: Array.isArray(errorMessages)
                  ? errorMessages[0]
                  : (errorMessages as unknown as string),
              });
            } else {
              form.setError(field as keyof SignupFormFields, {
                message: Array.isArray(errorMessages)
                  ? errorMessages[0]
                  : (errorMessages as unknown as string),
              });
            }
          });

          if (showAccountType) {
            toggleAccountType();
          }
        } catch (parseError) {
          form.setError("root", {
            message: "An unexpected error occurred during signup",
          });
        }
      } else {
        navigate(Routes.NON_ST_ACCOUNT);
      }
    } catch (error) {
      form.setError("root", {
        message: "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  }

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
          {showAccountType ? (
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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
