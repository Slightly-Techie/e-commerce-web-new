import { SignupFormFields } from "@/pages/auth/signup/signup.types";
import {
  CreateProfileSchema,
  ForgotPasswordFormFields,
  ResetPassword,
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
  getProfile: (id?: string, token?: string) => Promise<AxiosResponse<unknown>>;
  updateProfile: (
    data: CreateProfileSchema,
    token: string,
  ) => Promise<AxiosResponse<unknown>>;
  createProfile: (
    data: CreateProfileSchema,
    token: string,
  ) => Promise<AxiosResponse<unknown>>;
}

const apiClient = axios.create({
  validateStatus: () => true,
});

const useApi = (): ApiEndpoints => {
  const baseURL = "/api";

  const login = async (credentials: { email: string; password: string }) => {
    return await apiClient.post(`${baseURL}/auth/login/`, credentials);
  };

  const signup = async (data: SignupFormFields) => {
    return await apiClient.post(`${baseURL}/auth/signup/`, data);
  };

  const logout = async () => {
    return await apiClient.post(`${baseURL}/auth/logout/`);
  };

  const forgetPassword = async (email: ForgotPasswordFormFields) => {
    return await apiClient.post(`${baseURL}/auth/forget-password/`, email);
  };

  const setPassword = async (data: ResetPassword) => {
    return await apiClient.post(`${baseURL}/auth/reset-password/`, data);
  };

  const getProfile = async (id?: string, token?: string) => {
    return await apiClient.get(`${baseURL}/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const updateProfile = async (data: CreateProfileSchema, token: string) => {
    return await apiClient.patch(`${baseURL}/profile/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const createProfile = async (data: CreateProfileSchema, token: string) => {
    return await apiClient.post(`${baseURL}/profile/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return {
    login,
    signup,
    logout,
    forgetPassword,
    setPassword,
    getProfile,
    updateProfile,
    createProfile,
  };
};

export default useApi;
