import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
import Form from "./formElements/Form";
import FormHelper from "./formElements/FormHelper";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";

const CreateAccountForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFields>();

  // const { changeStage } = useSignupStageStore();
  // const { login } = useUserStore();

  const onSubmit: SubmitHandler<SignupFormFields> = async (data) => {
    // create user
    console.log(data);
    setLoading(false);
  };

  const { showAlert } = useAlertStore();

  return (
    <Form title="Create Account" onSubmit={handleSubmit(onSubmit)}>
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
                message: "Passsword cannot be less than 8 characters",
              },
              pattern: {
                value: REGEXPATTERNS.password,
                message: "Password should a be a mix of letters and symbols",
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
        disabled={loading}
        btnType={
          errors.email || errors.password || errors.username || loading
            ? ButtonType.disabled
            : ButtonType.primary
        }
      >
        {loading ? "Submitting" : "Submit"}
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
