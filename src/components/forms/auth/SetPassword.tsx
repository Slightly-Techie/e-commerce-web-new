import AuthLayout from "@/components/AuthLayout";
import useAuth from "@/hooks/auth/useAuth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { REGEXPATTERNS } from "../../../lib/constants";
import { TextSizeStyles } from "../../../lib/styles";
import {
  //   AlertType,
  ButtonType,
  FormHelperType,
  ResetPasswordFormFields,
  TextSize,
} from "../../../types";
import Button from "../../Button";
import Form from "../../FormElements/Form";
import FormHelper from "../../FormElements/FormHelper";
import Input from "../../FormElements/Input";
import InputGroup from "../../FormElements/InputGroup";

export default function SetPassword() {
  const [isLoading, setisLoading] = useState(false);
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>();

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = async (data) => {
    const credentials = {
      token: "",
      code: data.code,
      password: data.password,
    };
    setisLoading(true);

    try {
      const response = await auth.setPassword(credentials);
      console.log(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setisLoading(false);
    }
  };
  return (
    <AuthLayout>
      <Form title="Reset password" onSubmit={handleSubmit(onSubmit)}>
        <p className={"text-gray500 " + TextSizeStyles[TextSize.body]}>
          Give yourself a new password, let's try to remember it this time.
        </p>
        <InputGroup>
          <Input
            {...register("code", {
              required: "Code is required",
              minLength: {
                value: 6,
                message: "Code must be 6 characters",
              },
              pattern: {
                value: REGEXPATTERNS.verificationCode,
                message: "Code should be 6 digits",
              },
            })}
            type="text"
            id="code"
            label="Code"
            placeholder="Enter code sent to your email"
          />
          {errors.code && (
            <FormHelper type={FormHelperType.error}>
              {errors.code.message}
            </FormHelper>
          )}
        </InputGroup>
        <InputGroup>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password cannot be less than 8 characters",
              },
              pattern: {
                value: REGEXPATTERNS.password,
                message: "Password should a be a mix of letters and symbols",
              },
            })}
            type="password"
            id="password"
            label="New Password"
            icon={<img src="assets/icons/lock-open.svg" alt="..." />}
            placeholder="Enter your new password"
          />
          {errors.password && (
            <FormHelper type={FormHelperType.error}>
              {errors.password.message}
            </FormHelper>
          )}
        </InputGroup>
        <InputGroup>
          <Input
            {...register("confirm_password", {
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
            type="password"
            id="confirm_password"
            label="Confirm Password"
            icon={<img src="assets/icons/lock-open.svg" alt="..." />}
            placeholder="Enter your new password"
          />
          {errors.confirm_password && (
            <FormHelper type={FormHelperType.error}>
              {errors.confirm_password.message}
            </FormHelper>
          )}
        </InputGroup>
        <Button
          className="w-full"
          disabled={isLoading}
          btnType={
            errors.password || isLoading
              ? ButtonType.disabled
              : ButtonType.primary
          }
        >
          Reset Password
        </Button>
      </Form>
    </AuthLayout>
  );
}
