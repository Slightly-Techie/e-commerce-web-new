import { Link, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Products from "./products/Products";
import Explore from "./explore/Explore";
import Favorite from "./Favorite";
import Main from "../layouts/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />}>
          <Route index element={<Products />} />
          <Route path="explore" element={<Explore />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="mt-32">
              <p>404 page</p>
              <Link to="/">Go home</Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
