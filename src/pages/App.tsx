import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../layouts/Main";
import Products from "./products/Products";
import Explore from "./explore/Explore";
import Favorite from "./Favorite";
import TrackOrders from "./track/TrackOrders";
import OrderHistory from "./history/OrderHistory";
import Error404 from "./Error404";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}>
            <Route index element={<Products />} />
            <Route path="explore" element={<Explore />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="track" element={<TrackOrders />} />
            <Route path="history" element={<OrderHistory />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
