import { z } from "zod";

export const SignInSuccessResponse = z.object({
    access: z.string(),
    refresh: z.string(),
});

export const SignInErrorResponse = z.object({
   detail: z.string()
});

export const ResetPasswordResponse = z.object({
    token: z.string()
})

export const SetPasswordErrorResponse = z.array(z.string())

export const SetPasswordSuccessResponse = z.object({message: z.string()})

export type SignInErrorResponse = z.infer<typeof SignInErrorResponse>

export type ResetPasswordResponse = z.infer<typeof ResetPasswordResponse>

export type SignInSuccessResponse = z.infer<typeof SignInSuccessResponse>

export type SetPasswordErrorResponse = z.infer<typeof SetPasswordErrorResponse>

export type SetPasswordSuccessResponse = z.infer<typeof SetPasswordSuccessResponse>
