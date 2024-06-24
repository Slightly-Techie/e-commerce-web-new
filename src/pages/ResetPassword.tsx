import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import ResendResetPasswordCodeForm from "../components/forms/auth/ResendResetPasswordCodeForm";
import ResetPasswordCodeForm from "../components/forms/auth/ResetPasswordCodeForm";
import ResetPasswordForm from "../components/forms/auth/ResetPasswordForm";
import ResetPasswordSuccessful from "../components/forms/auth/ResetPasswordSuccessful";
import { useResetPasswordStageStore } from "../store/resetPasswordStageStore";
import { ResetPasswordStatus } from "../types";

const ResetPassword = () => {
  const [code, setCode] = useState<null | number>(null);
  const { currentStage } = useResetPasswordStageStore();

  const renderByStatus: Record<ResetPasswordStatus, React.ReactNode> = {
    successful: <ResetPasswordSuccessful />,
    reset_password: (
      <Layout>
        <ResetPasswordForm code={code} />
      </Layout>
    ),
    code: (
      <Layout>
        <ResetPasswordCodeForm setCode={setCode} />
      </Layout>
    ),
    resend_code: (
      <Layout>
        <ResendResetPasswordCodeForm />
      </Layout>
    ),
  };
  return <>{renderByStatus[currentStage]}</>;
};

export default ResetPassword;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <AuthLayout buttonRoute="/forgot-password" buttonText="back">
    <div className="flex flex-col items-end py-8">{children}</div>
  </AuthLayout>
);
