import { BiScan } from "react-icons/bi";
import { BsEmojiSmileFill, BsTrash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

const Table = () => {
  return (
    <div>
      <div className="fixed top-24 w-[48%]">
        <div className="lg:flex flex-1 mx-4 relative my-2 lg:my-5">
          <BiScan className="absolute left-[12px] top-[10px] my-auto" />
          <div className="w-[100%] flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search by product name, generic or bar code no"
              className="outline-none w-full text-sm text-gray-700 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* fixed it */}
      <div className="fixed top-14 w-[48%]">
        <div className="lg:flex flex-1 mx-4 relative my-2 lg:my-5">
          <BsEmojiSmileFill className="absolute left-[12px] top-[10px] my-auto" />
          <IoAddOutline className="absolute z-10 right-64 top-2 text-2xl text-white" />
          <div className="w-[100%] flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search by product name, generic or bar code no"
              className="outline-none w-full text-sm text-gray-700 bg-transparent"
            />
          </div>
          <button className="absolute top-[.5px] right-[1px] bg-cyan-600 text-white px-24 py-[6px] rounded-r-lg">
            Add Customer
          </button>
        </div>
      </div>

      {/* Table */}
      <div className=".overflow-x-auto overflow-y-scroll h-[400px] p-6 mt-20">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Item</th>
              <th className="border border-gray-300 px-4 py-2">Unit</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Qty</th>
              <th className="border border-gray-300 px-4 py-2">Discount</th>
              <th className="border border-gray-300 px-4 py-2">Subtotal</th>
              <th className="border border-white bg-white px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $10
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty1" className="text-center w-6">
                    2
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border  border-gray-300 px-4 py-2">10%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $18
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border  bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                Paracetamol 500mg
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <IoIosArrowDown />
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $20
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    -
                  </button>
                  <span id="qty2" className="text-center w-6">
                    1
                  </span>
                  <button className="bg-green-600 hover:bg-gray-400 text-black rounded-full w-6 h-6 flex justify-center items-center">
                    +
                  </button>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                $19
              </td>
              <td className="border bg-gray-100 border-gray-300 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">
                  <BsTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Calc */}
      <div className="flex flex-col justify-center flex-wrap gap-5 p-4 border border-gray-300 rounded-md bg-white pl-12">
        <div className="flex flex-col sm:flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-5">
          <div className="flex justify-between items-center gap-4">
            <p className="font-medium text-gray-700 text-xl w-28">Subtotal</p>
            <p className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-xl w-40 h-12 flex items-center justify-center">
              Tk. 600
            </p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="font-medium text-gray-700 text-xl w-28">Vat/Tax</p>
            <p className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-xl w-40 h-12 flex items-center justify-center">
              Tk. 60.00
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-5">
          <div className="flex justify-between items-center gap-4">
            <p className="font-medium text-gray-700 text-xl w-28">Discount</p>
            <p className="bg-gray-100 text-gray-800 py-2 rounded-md text-xl w-40 h-12 flex items-center justify-center">
              Tk. 00.00
            </p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="font-medium text-gray-700 text-xl w-28">Adjustment</p>
            <p className="bg-gray-100 text-gray-800 py-2 rounded-md text-xl w-40 h-12 flex items-center justify-center">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
