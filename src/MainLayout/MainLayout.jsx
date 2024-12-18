import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
