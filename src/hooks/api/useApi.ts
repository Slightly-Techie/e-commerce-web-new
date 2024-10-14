import {
  ForgotPasswordFormFields,
  ResetPassword,
  SignupFormFields,
} from "@/types";
import axios, { AxiosResponse } from "axios";

interface ApiEndpoints {
  login: (credentials: {
    email: string;
    password: string;
  }) => Promise<AxiosResponse<unknown>>;
  signup: (data: SignupFormFields) => Promise<AxiosResponse<unknown>>;
  logout: () => Promise<AxiosResponse<unknown>>;
  forgetPassword: (
    email: ForgotPasswordFormFields,
  ) => Promise<AxiosResponse<unknown>>;
  setPassword: (data: ResetPassword) => Promise<AxiosResponse<unknown>>;
  getProfile: (id?: string) => Promise<AxiosResponse<unknown>>;
  updateProfile: (data: object) => Promise<AxiosResponse<unknown>>;
}

const useApi = (): ApiEndpoints => {
  const baseURL = "api";

  const login = async (credentials: { email: string; password: string }) => {
    return await axios.post(`${baseURL}/auth/login/`, credentials);
  };

  const signup = async (data: SignupFormFields) => {
    return await axios.post(`${baseURL}/auth/signup/`, data);
  };

  const logout = async () => {
    return await axios.post(`${baseURL}/auth/logout/`);
  };

  const forgetPassword = async (email: ForgotPasswordFormFields) => {
    return await axios.post(`${baseURL}/auth/forget-password`, email);
  };

  const setPassword = async (data: ResetPassword) => {
    return await axios.post(`${baseURL}/auth/reset-password`, data);
  };

  const getProfile = async (id?: string) => {
    return await axios.get(`${baseURL}/auth/profile/${id}`);
  };

  const updateProfile = async (data: object) => {
    return await axios.put(`${baseURL}/auth/profile/`, data);
  };

  return {
    login,
    signup,
    logout,
    forgetPassword,
    setPassword,
    getProfile,
    updateProfile,
  };
};

export default useApi;
