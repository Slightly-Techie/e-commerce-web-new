import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Sidebar from "../components/sidebar/Sidebar";

const Main = () => {
  return (
    <Container>
      <div className="lg:mx-4 xl:mx-0">
        <Navbar />
      </div>

      <div>
        <Sidebar />
        <div className="pb-24 pt-[11rem] md:pt-[6.5rem] lg:pb-0">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Main;
