import Container from "../../UI/Container";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

import SideBarItems from "../../Exotic/SideBarItems";
import Table from "../../Components/Table/Table";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex .flex-1">
          {/* Sidebar */}
          {/* <div className="hidden sm:hidden md:block lg:block .w-1/4 bg-white .p-4">
            <Sidebar />
          </div> */}

          {/* Main Content */}
          <div className="flex-1 lg:px-1 lg:pb-6">
            <div className="bg-gray-100 lg:pl-2 lg:pb-6 ">
              {/* Layout with Sidebar and Content */}
              <div className="flex flex-col lg:flex-row .mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Sidebar */}
                {/* <aside
                  className="lg:w-[17%] bg-white rounded-md
        "
                >
                  <SideBarItems />
                </aside> */}

                {/* Main Content */}
                <main className="lg:w-1/2 space-y-8">
                  {/* Section 1 */}
                  <div className="bg-white shadow-md p-2 lg:p-6 rounded-lg flex flex-col lg:flex-row">
                    {/* Left - Social Icons */}
                    <div className="hidden sm:hidden lg:flex lg:flex-col lg:w-[30%] space-y-3 .lg:mt-12 lg:pl-6">
                      <SideBarItems />
                    </div>

                    {/* Middle - Text */}
                    <div className="lg:w-[92%] bg-white p-2 lg:p-6 rounded-lg">
                      <Outlet />
                    </div>
                  </div>
                </main>
                {/* Right Area */}
                <div className="w-1/2">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
