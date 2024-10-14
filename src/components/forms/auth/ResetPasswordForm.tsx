import { SubmitHandler, useForm } from "react-hook-form";
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

const ResetPasswordForm = ({ code }: { code: number | null }) => {
  const {
    register,
    handleSubmit,
    watch,
    // reset,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>();

  const loading = false;

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = (data) => {
    console.log(data, code);
  };

  return (
    <Form title="Reset password" onSubmit={handleSubmit(onSubmit)}>
      <p className={"text-gray500 " + TextSizeStyles[TextSize.body]}>
        Give yourself a new password, let's try to remember it this time.
      </p>
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
        disabled={loading}
        btnType={
          errors.password || loading ? ButtonType.disabled : ButtonType.primary
        }
      >
        Reset Password
      </Button>
    </Form>
  );
};
export default ResetPasswordForm;
