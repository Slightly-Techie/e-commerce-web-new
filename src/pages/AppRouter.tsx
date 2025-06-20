import AccountSetupComplete from "@/components/AccountSetup/AccountSetupComplete";
import STMemberSetup from "@/components/AccountSetup/STMemberSetup";
import SetPassword from "@/components/forms/auth/SetPassword";
import { Routes } from "@/lib/routes";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("../layouts/Layout"));
const Main = lazy(() => import("../layouts/Main"));
const Error404 = lazy(() => import("./Error404"));
const Favorite = lazy(() => import("./Favorite"));
const FilterPage = lazy(() => import("./FilterPage"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const NonSTMemberSetup = lazy(() => import("./NonSTMemberSetup"));
const Referrals = lazy(() => import("./Referrals"));
const Review = lazy(() => import("./Review"));
const Login = lazy(() => import("./auth/login/Login"));
const Signup = lazy(() => import("./auth/signup/Signup"));
const Cart = lazy(() => import("./cart/Cart"));
const Checkout = lazy(() => import("./checkout/Checkout"));
const DeliveryDateAndTimeForm = lazy(() => import("./checkout/steps/DeliveryDateAndTime"));
const PaymentForm = lazy(() => import("./checkout/steps/Payment"));
const DeliveryAddressForm = lazy(() => import("./checkout/steps/delivery-address/DeliveryAddress"));
const Explore = lazy(() => import("./explore/Explore"));
const OrderHistory = lazy(() => import("./history/OrderHistory"));
const Products = lazy(() => import("./products/Products"));
const ProductDetails = lazy(() => import("./products/product-details/ProductDetails"));
const TrackOrders = lazy(() => import("./track/TrackOrders"));






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
  ],
);

export default AppRouter;
