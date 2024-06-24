import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useTimer from "../hooks/useTimer";
import { convertTime, hideEmail } from "../lib/utils";
import { useAlertStore } from "../store/alertStore";
import { useUserStore } from "../store/userStore";
import { ButtonType, FormHelperType } from "../types";
import Alert from "./Alert";
import Button from "./Button";
import Form from "./formElements/Form";
import FormHelper from "./formElements/FormHelper";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";

type FormValues = {
  code: string;
};

const VerifyCodeForm = ({ handleFormSubmit }: { handleFormSubmit(): void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [resendTime, setResendTime] = useTimer();
  const [showResendBtn, setShowResendBtn] = useState(false);
  const { user, updateToken } = useUserStore();
  const { showAlert } = useAlertStore();
  const loading = false;
  const sendingVCode = false;

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    console.log(formData);
  };

  const handleResendVerification = () => {
    setResendTime(30);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title="Get code from email">
      {user && (
        <Alert>
          To confirm your identity, please enter the verification code that was
          sent to {hideEmail(user.email)}
        </Alert>
      )}

      <InputGroup>
        <Input
          type="number"
          {...register("code", {
            required: "Code is required",
            // pattern: {
            //   value: REGEXPATTERNS.verificationCode,
            //   message: "Should be exactly 6 digits",
            // },
          })}
          id="code"
          label="Verification code"
          icon={<img src="assets/icons/lock-open.svg" alt="..." />}
          placeholder="Enter code"
        />
        {errors.code && (
          <FormHelper type={FormHelperType.error}>
            {errors.code.message}
          </FormHelper>
        )}
      </InputGroup>

      {resendTime > 0 && (
        <p>Resend code after {convertTime(resendTime).secs} seconds</p>
      )}

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          btnType={
            errors.code || loading ? ButtonType.disabled : ButtonType.primary
          }
          className="w-full"
        >
          Verify
        </Button>

        {showResendBtn && (
          <Button
            type="button"
            btnType={
              sendingVCode || resendTime > 0
                ? ButtonType.disabled
                : ButtonType.secondary
            }
            className="w-full"
            onClick={handleResendVerification}
          >
            Resend code
          </Button>
        )}
      </div>
    </Form>
  );
};

export default VerifyCodeForm;
