import Container from "../components/Container";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import { useState } from "react";

const Main = () => {
  // const [openSidebar, setOpenSidebar] = useState(false);

  // const toggleSidebar = () => setOpenSidebar((prev) => !prev);

  return (
    <Container>
      <div className="mt-[100px] lg:mx-4 xl:mx-0">
        {/* <button onClick={toggleSidebar} className="fixed top-[10px] right-[100px] z-[999]">
          Toggle
        </button> */}
        <Sidebar open={true} />
        <Outlet />
      </div>
    </Container>
  );
};

export default Main;
