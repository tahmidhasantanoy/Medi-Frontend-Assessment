import Container from "../../UI/Container";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import icon1 from "../../../public/images/fb.png";
import icon2 from "../../../public/images/fb.png";
import icon3 from "../../../public/images/fb.png";
import icon4 from "../../../public/images/fb.png";
import star from "../../../public/images/fb.png";
import starBlank from "../../../public/images/fb.png";
import Sidebar from "../../Exotic/Sidebar";
import SideBarItems from "../../Exotic/SideBarItems";

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
                      <div className="flex flex-col ml-2 lg:ml-1">
                        <p className="font-semibold lg:text-lg">
                          Was This Helpful?
                        </p>
                        <div className="flex items-center space-x-2 space-y-1">
                          <img
                            className="w-6 lg:w-7 h-6 lg:h-7"
                            src={star}
                            alt="review"
                          />
                          <img
                            className="w-6 lg:w-7 h-6 lg:h-7"
                            src={star}
                            alt="review"
                          />
                          <img
                            className="w-6 lg:w-7 h-6 lg:h-7"
                            src={star}
                            alt="review"
                          />
                          <img
                            className="w-6 lg:w-7 h-6 lg:h-7"
                            src={star}
                            alt="review"
                          />
                          <img
                            className="w-5 lg:w-6 h-5 lg:h-6"
                            src={starBlank}
                            alt="review"
                          />
                        </div>
                      </div>
                      <div className="visible sm:visible lg:hidden .mt-6 ml-2">
                        <div className="flex items-center space-x-3 ">
                          <img
                            className="w-8 h-8 bg-blue-500 text-white rounded-full p-2"
                            src={icon1}
                            alt="icons"
                          />
                          <img
                            className="w-8 h-8 bg-blue-800 text-white rounded-full p-1"
                            src={icon2}
                            alt="icons"
                          />
                          <img
                            className="w-8 h-8 bg-blue-500 rounded-full p-2"
                            src={icon3}
                            alt="icons"
                          />
                          <img
                            className="w-7 h-7 bg-red-700 text-white rounded-full p-2"
                            src={icon4}
                            alt="icons"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                {/* Right Area */}
                <div className="w-1/2">
                  <h2 className="text-6xl">Right area</h2>
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
