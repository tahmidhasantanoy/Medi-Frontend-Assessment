import { AiOutlineMedicineBox } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row bg-slate-200">
      <div className="w-[50%] sm:w-[100%] lg:w-[50%] bg-white">
        One
        <div className=" lg:flex flex-1 mx-4 relative">
          {/*new  */}
          <IoSearchOutline className="absolute left-[12px] top-[10px] my-auto" />
          <div className="w-[100%] flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search by product name, generic or bar code no"
              className="outline-none w-full text-sm text-gray-700 bg-transparent"
            />
          </div>

          {/*new  */}
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-[25%]">Medicine menu</div>
          <div className="">
            Medicine
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%]">Two</div>
    </div>
  );
};

export default Home;
