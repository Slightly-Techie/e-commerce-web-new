import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Sidebar from "../components/sidebar/Sidebar";

const Main = () => {
  return (
    <Container className="">
      <div className="lg:mx-4 xl:mx-0">
        <Navbar />
      </div>
      <div>
        <Sidebar />
        <div className="pb-24">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Main;
