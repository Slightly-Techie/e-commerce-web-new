import { SignupStage } from "../types";

const SETUPACCOUNTROUTES: Record<SignupStage, string> = {
  "enter details": "/sign-up",
  "verify code": "/verify-code",
  "choose account type": "/setup-account",
  "setup non st account": "/setup-account/non-st-member",
  "setup st account": "/setup-account/st-member",
  "setup complete": "/setup-account/complete",
};

enum Routes {
  HOME = "/",
  LOGIN = "/login",
  SIGN_UP = "/sign-up",
  FORGOT_PASSWORD = "/forgot-password",
  EXPLORE = "/explore",
  FAVORITES = "/favorites",
  TRACK = "/track",
  HISTORY = "/history",
  REFERRALS = "/referrals",
  PRODUCT_DETAILS = "/products/:id",
  CART = "/cart",
  CHECKOUT = "checkout",
  CHECKOUT_DELIVERY_ADDRESS = "/checkout",
  CHECKOUT_DELIVERY_DATE_AND_TIME = "/checkout/delivery-date-and-time",
  CHECKOUT_PAYMENT = "/checkout/payment",
  FILTER = "/filter",
}

export { Routes, SETUPACCOUNTROUTES };
