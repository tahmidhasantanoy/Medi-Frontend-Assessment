import { CiLight } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
// import logo from "../../../public/images/logo.png";
import { useEffect, useState } from "react";
import { FaHistory, FaKeyboard, FaRegEdit } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { TbArrowBack } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { LuScreenShare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="containerflex flex-col lg:flex-row items-center justify-between px-4 py-6">
      {/* Navbar Fixed Section */}
      <div className="flex items-center justify-between text-white text-xl fixed w-full top-0 z-50 px-5 bg-white">
        {/* Navbar Start */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div className="hidden lg:flex flex-shrink-0 justify-center items-center space-x-3">
            <FaKeyboard className="w-8 h-8 p-1 rounded-2xl border-2 border-black text-black" />
            <div className="text-center text-cyan-700 flex border-2 border-cyan-50 bg-cyan-50 rounded-3xl p-3 ">
              <p>{formatTime(currentTime)}</p>
              <p>&nbsp;||&nbsp;</p>
              <p>{formatDate(currentTime)}</p>
            </div>
          </div>

          {isMenuOpen && (
            <ul className="absolute top-full left-0 mt-3 p-2 bg-white text-black rounded-md w-48">
              <li className="py-2  hover:bg-gray-100 ">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2">
                <Link href="/about">About</Link>
              </li>
              <li className="py-2">
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex space-x-6">
          <div className="flex flex-1 mx-4 space-x-2">
            <div className="flex items-center space-x-1 border border-black rounded-3xl p-2">
              <HiDocumentReport className="text-black" />
              <p className="text-black">Report</p>
            </div>
            <div className="flex items-center space-x-1 border border-black rounded-3xl p-2">
              <FaHistory className="text-black" />
              <p className="text-black">Recent</p>
            </div>
            <div className="flex items-center space-x-1 border border-black rounded-3xl p-2">
              <FaRegEdit className="text-black" />
              <p className="text-black">Draft</p>
            </div>
            <div className="flex items-center space-x-1 border border-black rounded-3xl p-2">
              <TbArrowBack className="text-black" />
              <p className="text-black">Report</p>
            </div>
          </div>
        </div>

        {/* Navbar End */}
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex space-x-6">
            <div className="flex items-center space-x-2">
              <LuScreenShare className="w-6 h-6 text-black" />
              <p className="text-black">Screen</p>
            </div>
            <div className="flex items-center space-x-2">
              <CgProfile className="w-6 h-6 text-black" />
              <p>R</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-black">Exit</p>
              <RxExit className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex  justify-between items-centersm:space-x-4 lg:hidden">
        <div className="flex space-x-4">
          <IoMdMenu className="w-6 h-6" />
          <div className="flex items-center sm:space-x-4">
            <p>Order</p>
            <p>Cart</p>
          </div>
        </div>
        <div className="flex items-center sm:space-x-4">
          <p>Draft</p>
          <p>Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
