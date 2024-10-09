import { UseFormRegister } from "./../node_modules/react-hook-form/dist/types/form.d";

export enum TextSize {
  small = "small",
  verySmall = "verySmall",
  body = "body",
  large = "large",
  heading4 = "heading4",
  heading5 = "heading5",
}

export enum AlertType {
  info = "info",
  error = "error",
  warning = "warning",
  success = "success",
}

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  disabled = "disabled",
  white = "white",
  ghost = "ghost",
}

export enum ButtonSize {
  small = "small",
  full = "full",
}

export enum FormHelperType {
  error = "error",
  info = "info",
}

export type SignupStage =
  | "enter details"
  | "verify code"
  | "choose account type"
  | "setup st account"
  | "setup non st account"
  | "setup complete";

type FormValues = {
  [key: string]: unknown;
};

export enum ShadowType {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
  xxxl = "xxxl",
}

type RegisterFormValues = UseFormRegister<FormValues>;

export type RHFInputExtension = {
  register: RegisterFormValues;
  required: boolean;
};

export type SignupFormFields = {
  email: string;
  username: string;
  password: string;
  password2: string;
  referral_code?: string;
  member_type: MemberType;
};

export type SignUpSuccessResponse = {
  id: string;
  email: string;
  token: {
    access: string;
    refresh: string;
  };
  username: string;
};

export type SignUpErrorResponse = {
  [key: string]: string[];
};

export type SignUpResponse = SignUpSuccessResponse | SignUpErrorResponse;

export type FilterFormFields = {
  categories?: string;
  price?: number[];
  discount_percentage?: string;
};

export type ForgotPasswordFormFields = {
  email: string;
};

export type ResetPasswordFormFields = {
  password: string;
  confirm_password: string;
};

export type Code = {
  code: number;
};

export type ResetPasswordStatus =
  | "successful"
  | "reset_password"
  | "code"
  | "resend_code";

export type ForgotPasswordPayload = {
  clientMutationId?: string;
  errors: Array<{ message: string; property: string }>;
  status: number;
  success: boolean;
};
export type ErrorResponse = Array<{ message: string; property: string }>;

export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
};

export type ActiveSelectedCountry = {
  svg: string;
  countryCode: string;
};

export type UserType = "NON_TECHIE" | "TECHIE";

export type User = {
  accountType: UserType;
  createdAt: Date;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  socialLinks: {
    github: string;
  };
  updatedAt: Date;
  username: string;
};

export type UserSignupDetails = Pick<User, "email" | "username"> & {
  password: string;
};

export type AlertArgs = { alertType: AlertType; alertText: string };

export type OrderStatus = "Delivered" | "Pending";

export interface Order {
  productName: string;
  category: string;
  orderId: string;
  date: string;
  status: OrderStatus;
  amount: string;
  image: string;
  name: string;
  phone: string;
  address: string;
  subTotal: string;
  delivery: string;
  coinDiscount: string;
  total: string;
  quantity: number;
}

export enum MemberType {
  TECHIE = "ST",
  NON_TECHIE = "NT",
}

export type LoginResponse = {
  token: string;
  user: User;
};
