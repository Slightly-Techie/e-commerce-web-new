import {
  CreateProfileSchema,
  ForgotPasswordFormFields,
  ResetPassword,
  SignUpErrorResponse,
  SignupFormFields,
  SignUpResponse,
  SignUpSuccessResponse,
} from "@/types";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import useSWR from "swr";
import z from "zod";
import useApi from "../api/useApi";

interface Auth {
  login: (email: string, password: string) => Promise<unknown>;
  signup: (formData: SignupFormFields) => Promise<SignUpResponse>;
  logout: () => Promise<unknown>;
  forgetPassword: (email: ForgotPasswordFormFields) => Promise<unknown>;
  setPassword: (data: ResetPassword) => Promise<unknown>;
  cookies: { token?: string; refreshToken?: string; id?: string };
  createProfile: (data: CreateProfileSchema) => Promise<unknown>;
}

const useAuth = (): Auth => {
  const api = useApi();
  const [cookies, setCookie] = useCookies(["token", "refreshToken", "id"]);
  const { data, error, mutate, isLoading } = useSWR(cookies.id, api.getProfile);

  const login = async (email: string, password: string) => {
    const response = await api.login({ email, password });

    // mutate(); // Revalidate the SWR cache
    return response.data;
  };

  const signup = async (
    formData: SignupFormFields,
  ): Promise<SignUpResponse> => {
    try {
      const response = await api.signup(formData);

      const data = response.data as SignUpResponse;
      const signUpSuccess = z.custom<SignUpSuccessResponse>().parse(data);

      if (signUpSuccess.token) {
        setCookie("id", signUpSuccess.id);
        setCookie("token", signUpSuccess.token.access);
        setCookie("refreshToken", signUpSuccess.token.refresh);

        //   mutate(); // Revalidate the SWR cache
        return signUpSuccess;
      } else {
        return response.data as SignUpErrorResponse;
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      const errors = axiosError.response?.data as SignUpErrorResponse;

      //   console.log("axios errors", errors);

      return errors;
    }
  };

  const logout = async () => {
    await api.logout();
    // mutate(); // Revalidate the SWR cache
  };

  const forgetPassword = async (email: ForgotPasswordFormFields) => {
    await api.forgetPassword(email);
  };

  const setPassword = async (data: ResetPassword) => {
    await api.setPassword(data);
  };

  const createProfile = async (data: CreateProfileSchema) => {
    return await api.createProfile(data);
  };

  return {
    // user: data,
    // isLoading,
    // error,
    login,
    logout,
    signup,
    forgetPassword,
    setPassword,
    cookies,
    createProfile,
  };
};

export default useAuth;
