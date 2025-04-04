import Button from "@/components/Button";
import CountrySelectInput from "@/components/FormElements/CountrySelectInput";
import FormHelper from "@/components/FormElements/FormHelper";
import Input from "@/components/FormElements/Input";
import InputGroup from "@/components/FormElements/InputGroup";
import Label from "@/components/FormElements/Label";
import SetupAccountLayout from "@/components/SetupAccountLayout";
import useAuth from "@/hooks/auth/useAuth";
import { REGEXPATTERNS } from "@/lib/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ButtonType,
  CreateProfileSchema,
  FormHelperType,
  Gender,
} from "../types";
import { Routes } from "@/lib/routes";

type PersonalInfoFields = {
  first_name: string;
  last_name: string;
  phone_number: string;
  gender: Gender;
};

const NonSTMemberSetup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading },
    getValues,
    setValue,
  } = useForm<PersonalInfoFields>();

  const navigate = useNavigate();

  const validatephone_number = () => {
    return REGEXPATTERNS.phoneNumber.test(getValues("phone_number"));
  };

  const auth = useAuth();

  const onSubmit: SubmitHandler<PersonalInfoFields> = async (data) => {
    if (!validatephone_number()) {
      setError("root", {
        message: "Enter a valid phone number. Eg: +233550000000",
      });
      return;
    }

    const parsedData: CreateProfileSchema = {
      ...data,
      user: auth.cookies.id || "",
    };

    const response = await auth.createProfile(parsedData);
   navigate(Routes.SETUP_COMPLETE)
    
  };

  return (
    <SetupAccountLayout>
      <div className="mx-auto pb-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <small className="font-bold text-gray500">
            Enter your name, and phone number to set up your profile{" "}
          </small>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inner space-y-6 rounded-[10px] border border-[#d9d9d9] p-10 lg:min-w-[520px]">
            <InputGroup>
              <Label>First name</Label>
              <Input
                placeholder="Enter your first name"
                {...register("first_name", {
                  required: "First name is required",
                })}
              />
              {errors.first_name && (
                <FormHelper type={FormHelperType.error}>
                  {errors.first_name.message}
                </FormHelper>
              )}
            </InputGroup>

            <InputGroup>
              <Label>Last name</Label>
              <Input
                placeholder="Enter your last name"
                {...register("last_name", {
                  required: "Last name is required",
                })}
              />
              {errors.first_name && (
                <FormHelper type={FormHelperType.error}>
                  {errors.first_name.message}
                </FormHelper>
              )}
            </InputGroup>

            <InputGroup>
              <Label>Phone number</Label>
              <CountrySelectInput
                handleChange={(number) => {
                  setValue("phone_number", number);
                }}
              />

              {errors.phone_number && (
                <FormHelper type={FormHelperType.error}>
                  {errors.phone_number.message}
                </FormHelper>
              )}
            </InputGroup>
            {errors.root && (
              <FormHelper type={FormHelperType.error}>
                {errors.root.message}
              </FormHelper>
            )}
          </div>

          <div className="mt-12 flex justify-between">
            <Button
              className="border border-gray300 bg-transparent text-black hover:bg-transparent"
              type="button"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              btnType={
                errors || isLoading ? ButtonType.disabled : ButtonType.primary
              }
            >
              {isLoading ? "Loading" : "Save and continue"}
            </Button>
          </div>
        </form>
      </div>
    </SetupAccountLayout>
  );
};

export default NonSTMemberSetup;
