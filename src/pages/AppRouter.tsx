import { Routes } from "@/lib/routes";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../layouts/Main";
import Error404 from "./Error404";
import Favorite from "./Favorite";
import { Login } from "./Login";
import Referrals from "./Referrals";
import Signup from "./Signup";
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
import Checkout_layout from "../components/checkout/checkout_layout";
import St_member_checkout from "../components/checkout/st_member_checkout";
import Non_st_member_checkout from "../components/checkout/non_st_member_checkout";

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
        path: Routes.PRODUCT_DETAILS,
        element: <ProductDetails />,
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
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.SIGN_UP,
    element: <Signup />,
  },
  {
    path: "account-setup",
    children: [
      {
        index: true,
        path: "st-account",
        element:
          (
            <Checkout_layout>
              <St_member_checkout />
            </Checkout_layout>
          )
      },
      {
        path: "non-st-account",
        element:
          (<Checkout_layout>
            <Non_st_member_checkout />
          </Checkout_layout>),
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default AppRouter;
