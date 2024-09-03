import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { REGEXPATTERNS } from "../../../lib/constants";
// import { useAlertStore } from "../../../store/alertStore";
import { useResetPasswordStageStore } from "../../../store/resetPasswordStageStore";
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

const ResendResetPasswordCodeForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>();
  // const { showAlert } = useAlertStore();
  const location = useLocation();
  const data = location.state;

  const loading = false;
  const { changeStage } = useResetPasswordStageStore();

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = (data) => {
    console.log(data);
  };

  return (
    <Form title="Resend reset password code" onSubmit={handleSubmit(onSubmit)}>
      <Alert type={AlertType.info}>
        If the email address exists, you will be sent an email with instructions
        on how to reset your password.
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
          defaultValue={data?.email || ""}
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
        disabled={loading}
        btnType={
          errors.email || loading ? ButtonType.disabled : ButtonType.primary
        }
      >
        Resend
      </Button>
      <Button
        className="w-full"
        btnType={ButtonType.secondary}
        onClick={() => changeStage("code")}
      >
        I have my code
      </Button>
    </Form>
  );
};
export default ResendResetPasswordCodeForm;
