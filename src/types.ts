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


export enum ShadowType {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
  xxxl = "xxxl",
}

// The following types are currently unused but preserved for potential future use
// export type RHFInputExtension = {
//   register: RegisterFormValues;
//   required: boolean;
// };

export type FilterFormFields = {
  categories?: string;
  price?: number[];
  discount_percentage?: string;
};

export type ForgotPasswordFormFields = {
  email: string;
};

export type ResetPasswordFormFields = {
  code: string;
  password: string;
  confirm_password: string;
};

export type ResetPassword = {
  token: string;
  code: string;
  password: string;
};

export type Code = {
  code: number;
};

export type ResetPasswordStatus =
  | "successful"
  | "reset_password"
  | "code"
  | "resend_code";

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
  user: string;
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

export type CreateProfileSchema = {
  user: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  address?: string;
  gender: Gender;
  dob?: string;
  phone_number?: string;
  profile_image?: string;
};

export enum Gender {
  m = "male",
  f = "female",
  o = "other",
}
