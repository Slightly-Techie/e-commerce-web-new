import {
  SignUpErrorResponse,
  SignupFormFields,
  SignUpResponse,
  SignUpSuccessResponse,
} from "@/types";
import { useCookies } from "react-cookie";
import useSWR from "swr";
import z from "zod";
import useApi from "../api/useApi";

const useAuth = () => {
  const api = useApi();
  const [cookies, setCookie] = useCookies(["token", "refreshToken", "id"]);
  const { data, error, mutate, isLoading } = useSWR(cookies.id, api.getProfile);

  const login = async (username: string, password: string) => {
    const response = await api.login({ username, password });

    // mutate(); // Revalidate the SWR cache
    return response.data;
  };

  const signup = async (
    formData: SignupFormFields,
  ): Promise<SignUpResponse> => {
    const response = await api.signup(formData);

    const data = response.data as SignUpResponse;
    const signUpSuccess = z.custom<SignUpSuccessResponse>().parse(data);

    if (signUpSuccess) {
      setCookie("id", signUpSuccess.id);
      setCookie("token", signUpSuccess.token.access);
      setCookie("refreshToken", signUpSuccess.token.refresh);

      //   mutate(); // Revalidate the SWR cache
      return signUpSuccess;
    } else {
      return response.data as SignUpErrorResponse;
    }
  };

  const logout = async () => {
    await api.logout();
    // mutate(); // Revalidate the SWR cache
  };

  return {
    // user: data,
    // isLoading,
    // error,
    login,
    logout,
    signup,
    cookies,
  };
};

export default useAuth;
