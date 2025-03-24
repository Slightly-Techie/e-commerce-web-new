import { MemberType } from "@/types";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(1),
  password: z.string().min(1),
  password2: z.string().min(1),
  referral_code: z.string().optional(),
  member_type: z.nativeEnum(MemberType),
});

export type SignupFormFields = z.infer<typeof formSchema>;

export const SignUpSuccessResponse = z.object({
  id: z.string(),
  email: z.string(),
  token: z.object({
    access: z.string(),
    refresh: z.string(),
  }),
  username: z.string(),
});
export type SignUpSuccessResponse = z.infer<typeof SignUpSuccessResponse>;

export const SignUpErrorResponseSchema = z.record(
  z.string(),
  z.union([z.array(z.string()), z.string().transform((value) => [value])]),
);

export type SignUpErrorResponse = z.infer<typeof SignUpErrorResponseSchema>;

export type SignUpResponse = SignUpSuccessResponse | SignUpErrorResponse;
