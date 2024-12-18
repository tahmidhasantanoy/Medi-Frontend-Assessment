import Container from "../../UI/Container";
import Header from "../../Shared/Header/Header";
import SideBarItems from "../../Exotic/SideBarItems";
import { AiOutlineMedicineBox } from "react-icons/ai";
import Table from "../../Components/Table/Table";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FooterMenu from "../../Shared/FooterMenu/FooterMenu";

const Medicine1 = () => {
  return (
    <Container>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex .flex-1">
          {/* Main Content */}
          <div className="flex-1 lg:px-2 lg:pb-6">
            <div className="bg-gray-100 lg:pl-4 lg:pb-6 ">
              {/* Layout with Sidebar and Content */}
              <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Main Content */}
                <main className="lg:w-1/2 bg-white">
                  {/* Section 1 */}
                  {/* Search field */}
                  <div className="fixed  top-20 w-[48%]">
                    <div className=" lg:flex flex-1 mx-4 relative my-2 lg:my-5">
                      <IoSearchOutline className="absolute left-[12px] top-[10px] my-auto" />
                      <div className="w-[100%] flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
                        <input
                          type="text"
                          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search by product name, generic or bar code no"
                          className="outline-none w-full text-sm text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Search field */}
                  {/* Space -- */}
                  <hr className="w-full" />
                  <div className="bg-white shadow-md p-2 lg:p-2 rounded-lg flex flex-col lg:flex-row mt-12">
                    {/* Left - Social Icons */}

                    <div className="hidden sm:hidden lg:flex lg:flex-col lg:w-[30%] space-y-3">
                      <SideBarItems />
                    </div>

                    {/* Middle - Text */}
                    <div className="lg:w-[80%] bg-white p-2 rounded-lg">
                      {/* <Outlet /> */}
                      <div className="flex justify-between space-x-4 my-3">
                        <p className="text-xl">
                          Total Medicine{" "}
                          <span className="font-semibold">(250)</span>
                        </p>
                        <div className="flex items-center text-green-500">
                          <p className="text-xl">Select Brand </p>
                          <MdOutlineKeyboardArrowDown />
                        </div>
                      </div>

                      {/* Scoralable */}
                      <div className="overflow-y-scroll h-[400px] ">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="border border-gray-300 rounded-lg px-4 py-2">
                            <div className="flex space-x-3">
                              <AiOutlineMedicineBox className="w-10 h-10 border border-gray-300 rounded-full p-2" />
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
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
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
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
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
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
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
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
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
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
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
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
                              <p className="text-red-500 text-xs">
                                Out of stock
                              </p>
                            </div>
                            <div className="my-3">
                              <p>Paracetamol</p>
                              <p>500mg</p>
                            </div>
                            <p className="font-semibold ">TK.180</p>
                          </div>
                        </div>
                      </div>
                      {/* Scoralable */}
                    </div>
                  </div>
                </main>
                {/* Right Area */}
                <div className=".w-full sm:w-full lg:w-1/2 bg-white">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Let's fixed it */}
        <div className="fixed bottom-0 w-full">
          <FooterMenu />
        </div>
        {/* Let's fixed it */}
      </div>
    </Container>
  );
};

export default Medicine1;
