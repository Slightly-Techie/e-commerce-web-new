import useAuth from "@/hooks/auth/useAuth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { REGEXPATTERNS } from "../../../lib/constants";
import {
  AlertType,
  ButtonType,
  ForgotPasswordFormFields,
  FormHelperType,
} from "../../../types";
import Alert from "../../Alert";
import Button from "../../Button";
import Form from "../../FormElements/Form";
import FormHelper from "../../FormElements/FormHelper";
import Input from "../../FormElements/Input";
import InputGroup from "../../FormElements/InputGroup";
import { ResetPasswordResponse } from "@/pages/auth/login/login.types";
import { Routes } from "@/lib/routes";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>();

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = async (data) => {
    setIsLoading(true);

    try {
      const response = await auth.forgetPassword(data) as ResetPasswordResponse;
      if (response.token) {
        navigate(Routes.SET_PASSWORD)
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form title="Forgot password?" onSubmit={handleSubmit(onSubmit)}>
      <Alert type={AlertType.info}>
        If the email address exists, you will receive and email and redirected to a page to set your password
      </Alert>

      <InputGroup>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: REGEXPATTERNS.email,
              message: "Enter a valid email",
            },
          })}
          label="Email"
          id="email"
          icon={<img src="assets/icons/envelope.svg" alt="..." />}
          placeholder="slightlytechie@gmail.com"
        />
        {errors.email && (
          <FormHelper type={FormHelperType.error}>
            {errors.email.message}
          </FormHelper>
        )}
      </InputGroup>
      <Button
        className="w-full"
        disabled={isLoading}
        btnType={
          errors.email || isLoading ? ButtonType.disabled : ButtonType.primary
        }
      >
        {isLoading ? "Sending..." : "Continue"}
      </Button>
    </Form>
  );
};
export default ForgotPasswordForm;
