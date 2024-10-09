import ChooseAccountType from "@/components/ChooseAccountType";
import CreateAccountForm from "@/components/CreateAccountForm";
import useAuth from "@/hooks/auth/useAuth";
import { MemberType, SignupFormFields } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
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
    setShowAccountType((prev) => !prev);
  }

  function toggleMemberType(type: MemberType) {
    setMemberType(type);
    form.setValue("member_type", type);
  }

  async function HandleSubmit() {
    setLoading(true);
    const data = {
      ...form.getValues(),
      password2: form.getValues().password,
    };
    try {
      const response = await auth.signup(data);
      console.log(response);

      if ("token" in response) {
        toast.success("Account created successfully");
      } else {
        throw new Error("An error occurred");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
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
