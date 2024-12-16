import { useState } from "react";

const FooterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white rounded">
      {/* Menu */}
      <ul className="flex flex-wrap justify-center gap-4">
        <li className="flex items-center justify-center bg-red-400 text-white rounded px-6 py-4">
          Reset
        </li>
        <li className="flex items-center justify-center bg-green-400 text-white rounded px-6 py-4">
          Add info.
        </li>
        <li className="flex items-center justify-center bg-pink-400 text-white rounded px-6 py-4">
          Discount
        </li>
        <li className="flex items-center justify-center bg-yellow-400 text-white rounded px-6 py-4">
          Total <br />
          660.00
        </li>
        <li className="flex items-center justify-center bg-blue-600 text-white rounded px-6 py-4">
          Menu 5
        </li>
        <li className="flex items-center justify-center bg-zinc-400 text-white rounded px-6 py-4">
          Calc
        </li>
        <li
          onClick={toggleModal}
          className="flex items-center justify-center bg-teal-500 text-white rounded px-6 py-4 cursor-pointer"
        >
          Payment
        </li>
      </ul>

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4 z-50 py-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Payment Window</h2>

            <button
              onClick={toggleModal}
              className="text-red-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>
          <p>Ordrno. #01</p>
          <hr className="w-full" />

          <div className="flex justify-between px-4 py-2 bg-green-100 rounded-lg">
            <p className="font-semibold">Total Payment</p>
            <p className="text-green-700 font-semibold">TK 660.0</p>
          </div>

          <div className="my-6 mx-12">
            <h1 className="text-3xl">Payment Method</h1>
            <div className="flex items-center space-x-8 mt-6">
              <p className="border border-green-700 p-4 rounded-xl">Cash</p>
              <p className="border border-green-700 p-4 rounded-xl">
                Bank/Card
              </p>
              <p className="border border-green-700 p-4 rounded-xl">Mfs</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Input Payment</p>
            <div className="flex justify-between px-4 py-2 bg-slate-100 rounded-lg">
              <p className="text-black font-semibold text-center w-full">0</p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="w-1/2 overflow-x-auto bg-white border p-2 border-slate-100">
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="p-2 border-b text-gray-700">Subtotal</td>
                    <td className="p-2 border-b text-gray-700">Tk. 600</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-gray-700">Vat/Tax</td>
                    <td className="p-2 border-b text-gray-700">Tk. 60.00</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-gray-700">Discount</td>
                    <td className="p-2 border-b text-gray-700">Tk. 00.00</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b text-gray-700">Adjustment</td>
                    <td className="p-2 border-b text-gray-700">0</td>
                  </tr>
                  <tr className="bg-cyan-500">
                    <td className="p-2 border-b text-gray-700">Total</td>
                    <td className="p-2 border-b text-gray-700">TK660</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/2 overflow-x-auto bg-white">
              <table className="table-auto w-full">
                <tbody>
                  <tr className="bg-green-100">
                    <td className="p-2 border-b text-gray-700">Token</td>
                    <td className="p-2 border-b text-gray-700">TK. 00.00</td>
                  </tr>
                  <tr className="bg-green-100">
                    <td className="p-2 border-b text-gray-700">Return</td>
                    <td className="p-2 border-b text-gray-700">TK. 00.00</td>
                  </tr>
                  <tr className="bg-green-600">
                    <td className="p-2 border-b text-gray-700">Paid</td>
                    <td className="p-2 border-b text-gray-700">Tk. 00.00</td>
                  </tr>
                  <tr className="bg-red-600">
                    <td className="p-2 border-b text-gray-700">Due</td>
                    <td className="p-2 border-b text-gray-700">TK. 00.00</td>
                  </tr>
                  <tr className="">
                    <td className="p-2 border-b text-gray-700">Status</td>
                    <td className="p-2 border-b text-gray-700">---</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <button className="p-4 border border-slate-300 rounded-lg">Close</button>
            <button className="p-4 border border-green-300 rounded-lg">Receipt</button>
            <button className="p-4 border border-green-400 rounded-lg">Mark as paid</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterMenu;
