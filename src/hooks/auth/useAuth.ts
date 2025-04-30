import {
  SignUpErrorResponse,
  SignupFormFields,
  SignUpResponse,
  SignUpSuccessResponse,
} from "@/pages/auth/signup/signup.types";
import {
  CreateProfileSchema,
  ForgotPasswordFormFields,
  ResetPassword,
  User,
} from "@/types";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import useSWR from "swr";
import useApi from "../api/useApi";
import { ResetPasswordResponse, SetPasswordErrorResponse, SetPasswordSuccessResponse, SignInSuccessResponse } from "@/pages/auth/login/login.types";

interface Auth {
  user: User;
  isLoading: boolean;
  error: Error;
  login: (email: string, password: string) => Promise<unknown>;
  signup: (formData: SignupFormFields) => Promise<SignUpResponse>;
  logout: () => Promise<unknown>;
  forgetPassword: (email: ForgotPasswordFormFields) => Promise<unknown>;
  setPassword: (data: ResetPassword) => Promise<unknown>;
  cookies: { token?: string; refreshToken?: string; id?: string, resetToken?: string };
  createProfile: (data: CreateProfileSchema) => Promise<unknown>;
}

const useAuth = (): Auth => {
  const api = useApi();
  const [cookies, setCookie] = useCookies(["token", "refreshToken", "id", "resetToken"]);
  const { data, error, mutate, isLoading } = useSWR(cookies.id, fetcher);

  const login = async (email: string, password: string) => {
    const response = await api.login({ email, password });

    if (response.status !== 200 && response.status !== 201) {
      const errorData = response.data;
      // console.log("Login error response:", errorData);

      return errorData as SignUpErrorResponse;
    }

    const data = response.data as SignInSuccessResponse

  
    setCookie("token", data.access)
    setCookie("refreshToken", data.refresh)
    

    mutate();
    return data;
  };

  async function fetcher() {
    const response = await api.getProfile(cookies.id, cookies.token);
    return response.data as User;
  }

  const signup = async (
    formData: SignupFormFields,
  ): Promise<SignUpResponse> => {
    try {
      const response = await api.signup(formData);

      if (response.status !== 200 && response.status !== 201) {
        const errorData = response.data;
        console.log("Signup error response:", errorData);

        return errorData as SignUpErrorResponse;
      }

      const data = response.data as SignUpResponse;
      console.log("Signup success data:", data);

      if (SignUpSuccessResponse.safeParse(data).success) {
        const signUpSuccess = SignUpSuccessResponse.parse(data);

        setCookie("id", signUpSuccess.id);
        setCookie("token", signUpSuccess.token.access);
        setCookie("refreshToken", signUpSuccess.token.refresh);

        return signUpSuccess;
      } else {
        return data as SignUpErrorResponse;
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as SignUpErrorResponse;
      }

      // Return a generic error format if we can't extract proper error data
      return {
        detail: ["An unexpected error occurred during signup"],
      } as unknown as SignUpErrorResponse;
    }
  };

  const logout = async () => {
    await api.logout();
    mutate();
  };

  const forgetPassword = async (email: ForgotPasswordFormFields) => {

    try {
      const response = await api.forgetPassword(email);
      const data = response.data as ResetPasswordResponse
      setCookie("resetToken", data.token)
      return data
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as SignUpErrorResponse;
      }

      // Return a generic error format if we can't extract proper error data
      return {
        detail: ["An unexpected error occurred during signup"],
      } as SignUpErrorResponse
    }
  };

  const setPassword = async (data: ResetPassword) => {
    try {
      const token = cookies.resetToken
      const response = await api.setPassword({
        ...data,
        token
      });
      
      if (response.status !== 200 && response.status !== 201) {
        const errorData = response.data;
       

        return errorData as SetPasswordErrorResponse;
      }
      
      return response.data as SetPasswordSuccessResponse
    } catch (error) {
      console.error(error)
    }
   
  };

  const createProfile = async (user: CreateProfileSchema) => {
    if (data?.id) {
      const response = await api.updateProfile(user, cookies.token, data?.id);
      await mutate();
      return response.data;

    }

  };

  return {
    user: data as User,
    isLoading,
    error,
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
