import AccountSetupComplete from "@/components/AccountSetup/AccountSetupComplete";
import STMemberSetup from "@/components/AccountSetup/STMemberSetup";
import SetPassword from "@/components/forms/auth/SetPassword";
import { Routes } from "@/lib/routes";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../layouts/Main";
import Error404 from "./Error404";
import Favorite from "./Favorite";
import FilterPage from "./FilterPage";
import ForgotPassword from "./ForgotPassword";
import NonSTMemberSetup from "./NonSTMemberSetup";
import Referrals from "./Referrals";
import Review from "./Review";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/Signup";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import DeliveryDateAndTimeForm from "./checkout/steps/DeliveryDateAndTime";
import PaymentForm from "./checkout/steps/Payment";
import DeliveryAddressForm from "./checkout/steps/delivery-address/DeliveryAddress";
import Explore from "./explore/Explore";
import OrderHistory from "./history/OrderHistory";
import Products from "./products/Products";
import ProductDetails from "./products/product-details/ProductDetails";
import TrackOrders from "./track/TrackOrders";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: Routes.EXPLORE,
            element: <Explore />,
          },
          {
            path: Routes.FAVORITES,
            element: <Favorite />,
          },
          {
            path: Routes.TRACK,
            element: <TrackOrders />,
          },
          {
            path: Routes.HISTORY,
            element: <OrderHistory />,
          },
          {
            path: Routes.REFERRALS,
            element: <Referrals />,
          },
        ],
      },

      {
        path: Routes.FILTER,
        element: <FilterPage />,
      },
      {
        path: Routes.CART,
        element: <Cart />,
      },
      {
        path: Routes.CHECKOUT,
        element: <Checkout />,
        action: () => {
          console.log("Checkout route");

          return null;
        },
        children: [
          {
            index: true,
            path: Routes.CHECKOUT_DELIVERY_ADDRESS,
            element: <DeliveryAddressForm />,
          },
          {
            path: Routes.CHECKOUT_DELIVERY_DATE_AND_TIME,
            element: <DeliveryDateAndTimeForm />,
          },
          {
            path: Routes.CHECKOUT_PAYMENT,
            element: <PaymentForm />,
          },
        ],
      },
      {
        path: "*",
        loader: () => {
          return redirect(Routes.HOME);
        },
      },
    ],
  },
  {
    path: Routes.PRODUCT_DETAILS,
    element: <ProductDetails />,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.SIGN_UP,
    element: <Signup />,
    loader: async () => {
      return null;
    },
  },
  {
    path: Routes.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: Routes.SET_PASSWORD,
    element: <SetPassword />,
  },
  {
    path: Routes.ACCOUNT_SETUP,
    children: [
      {
        index: true,
        path: Routes.ST_ACCOUNT,
        element: <STMemberSetup />,
      },
      {
        path: Routes.NON_ST_ACCOUNT,
        element: <NonSTMemberSetup />,
      },
      {
        path: Routes.SETUP_COMPLETE,
        element: <AccountSetupComplete />,
      },
    ],
  },
  {
    path: Routes.REVIEW,
    element: <Review />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default AppRouter;
