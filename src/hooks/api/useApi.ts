import { SignupFormFields } from "@/types";
import axios, { AxiosResponse } from "axios";

interface ApiEndpoints {
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<AxiosResponse<unknown>>;
  signup: (data: SignupFormFields) => Promise<AxiosResponse<unknown>>;
  logout: () => Promise<AxiosResponse<unknown>>;
  getProfile: (id?: string) => Promise<AxiosResponse<unknown>>;
  updateProfile: (data: object) => Promise<AxiosResponse<unknown>>;
}

const useApi = (): ApiEndpoints => {
  const baseURL = "api";

  const login = async (credentials: { username: string; password: string }) => {
    return await axios.post(`${baseURL}/auth/login/`, credentials);
  };

  const signup = async (data: SignupFormFields) => {
    return await axios.post(`${baseURL}/auth/signup/`, data);
  };

  const logout = async () => {
    return await axios.post(`${baseURL}/auth/logout/`);
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
    getProfile,
    updateProfile,
  };
};

export default useApi;
