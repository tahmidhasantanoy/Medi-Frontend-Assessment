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
import { AiOutlineMedicineBox } from "react-icons/ai";

const Medicine1 = () => {
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
          <div className="flex-1 lg:px-2 lg:pb-6">
            <div className="bg-gray-100 lg:pl-4 lg:pb-6 ">
              {/* Layout with Sidebar and Content */}
              <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
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
                    <div className="hidden sm:hidden lg:flex lg:flex-col lg:w-[30%] space-y-3 lg:mt-12 lg:pl-6">
                      <SideBarItems />
                    </div>

                    {/* Middle - Text */}
                    <div className="lg:w-[80%] bg-white p-2 lg:p-6 rounded-lg">
                      {/* <Outlet /> */}
                      <p>Medicine1</p>

                      {/* New change  */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                        <div className="relative border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <div className="flex flex-col">
                              <p className="text-black text-xs">In stock</p>
                              <p className="text-green-500 text-xs">150</p>
                            </div>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                          <span className="absolute bottom-3 right-3 bg-red-400 text-white rounded-3xl px-2 p-[1px]">
                            3
                          </span>
                        </div>
                        <div className="relative border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <div className="flex flex-col">
                              <p className="text-black text-xs">In stock</p>
                              <p className="text-green-500 text-xs">150</p>
                            </div>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                          <span className="absolute bottom-3 right-3 bg-red-400 text-white rounded-3xl px-2 p-[1px]">
                            1
                          </span>
                        </div>
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                        <div className="border border-gray-300 rounded-lg px-4 py-2">
                          <div className="flex space-x-3">
                            <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                            <p className="text-red-500 text-xs">Out of stock</p>
                          </div>
                          <div className="my-3">
                            <p>Paracetamol</p>
                            <p>500mg</p>
                          </div>
                          <p className="font-semibold ">TK.180</p>
                        </div>
                      </div>
                      {/* New change  */}
                      <div className="visible sm:visible lg:hidden mt-6 ml-2">
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

export default Medicine1;
