import { SignUpContext } from "@/pages/Signup";
import { useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGEXPATTERNS } from "../lib/constants";
import { TextSizeStyles } from "../lib/styles";
import { useAlertStore } from "../store/alertStore";
import {
  AlertType,
  ButtonType,
  FormHelperType,
  SignupFormFields,
  TextSize,
} from "../types";
import Alert from "./Alert";
import Button from "./Button";
import Form from "./FormElements/Form";
import FormHelper from "./FormElements/FormHelper";
import Input from "./FormElements/Input";
import InputGroup from "./FormElements/InputGroup";

const CreateAccountForm = () => {
  const onSubmit: SubmitHandler<SignupFormFields> = () => {
    toggleAccountType();
  };

  const { showAlert } = useAlertStore();

  const { toggleAccountType, form } = useContext(SignUpContext);

  if (form === undefined) return null;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  return (
    <Form
      title="Create Account"
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 md:px-12"
    >
      {/* {errors && <Alert type={AlertType.error}>{errors.message}</Alert>} */}
      <Alert
        type={AlertType.info}
        onClick={() =>
          showAlert({ alertType: AlertType.info, alertText: "some info" })
        }
      >
        Please double-check that you are using the same email address that you
        used to sign up for CRM.
      </Alert>

      <div className="space-y-4">
        <InputGroup>
          <Input
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: REGEXPATTERNS.username,
                message: "Enter a valid username",
              },
            })}
            label="Username"
            id="username"
            icon={<img src="assets/icons/user.svg" alt="..." />}
            placeholder="Enter your username"
          />
          {errors.username && (
            <FormHelper type={FormHelperType.error}>
              {errors.username.message}
            </FormHelper>
          )}
        </InputGroup>

        <InputGroup>
          <Input
            {...register("referral_code")}
            label="Referral Code"
            id="referral"
            icon={<img src="assets/icons/referral.svg" alt="..." />}
            placeholder="Enter your referral code"
          />
          {errors.referral_code && (
            <FormHelper type={FormHelperType.error}>
              {errors.referral_code.message}
            </FormHelper>
          )}
        </InputGroup>

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
                message: "Password should be a mix of letters and symbols",
              },
            })}
            label="Password"
            type="password"
            id="password"
            icon={<img src="assets/icons/lock-open.svg" alt="..." />}
            placeholder="Enter your password"
          />
          {errors.password && (
            <FormHelper type={FormHelperType.error}>
              {errors.password.message}
            </FormHelper>
          )}
        </InputGroup>
      </div>

      <Button
        className="w-full"
        btnType={!isValid ? ButtonType.disabled : ButtonType.primary}
      >
        Continue
      </Button>

      <p className={"text-gray500 " + TextSizeStyles[TextSize.small]}>
        By using STMarket, you are agreeing to our{" "}
        <Link to="#" className="text-primary underline underline-offset-[6px]">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link to="#" className="text-primary underline underline-offset-[6px]">
          terms of service.
        </Link>
      </p>
    </Form>
  );
};

export default CreateAccountForm;
