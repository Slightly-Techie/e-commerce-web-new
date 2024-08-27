import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Layout from "../layouts/Layout";
import Main from "../layouts/Main";
import Error404 from "./Error404";
import Favorite from "./Favorite";
import Filter from "./Filter";
import Referrals from "./Referrals";
import Cart from "./cart/Cart";
import Explore from "./explore/Explore";
import OrderHistory from "./history/OrderHistory";
import Products from "./products/Products";
import ProductDetails from "./products/product-details/ProductDetails";
import TrackOrders from "./track/TrackOrders";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}>
            <Route index element={<Products />} />
            <Route path="explore" element={<Explore />} />
            <Route path="favorites" element={<Favorite />} />
            <Route path="track" element={<TrackOrders />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="referrals" element={<Referrals />} />
          </Route>

          <Route path="filter" element={<Filter />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
