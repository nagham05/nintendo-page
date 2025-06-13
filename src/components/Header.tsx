import { MdOutlineExplore } from 'react-icons/md';
import { GiShoppingBag } from "react-icons/gi";
import { BsQuestionOctagonFill } from "react-icons/bs";
import logo from '../assets/logo.png';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { PiHandCoinsBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import { ImMenu } from "react-icons/im";
import nintendoStore from '../assets/nintendoStore.png';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      {isMobile && (
        <div className='flex items-center justify-between bg-[#e60012] py-3 px-4 h-10'>
          <img src={logo} alt="Nintendo" className="w-25 h-10" />
          <div className='flex flex-row gap-4'>
            <img src={nintendoStore} alt="Nintendo Store" className="w-30 h-5" />
            <img
              src="https://flagcdn.com/us.svg"
              alt="US flag"
              className="w-5 h-5 rounded "
            />
          </div>
        </div>
      )}
      <header className=" lg:flex max-[1024px]:hidden  text-white items-center justify-between bg-white border-b border-gray-200">
        <div className="flex items-center ">
          <div className="bg-white rounded " style={{ color: '#e60012' }}>
            <img src={logo} alt="Nintendo" className="w-25 h-15" />
          </div>
          <div className='p-2'>
            <button className="flex items-center space-x-1 border rounded px-2 py-1 group" style={{ borderColor: 'white', backgroundColor: 'white' }}>
              <MdOutlineExplore color="#e60012" size={20} />
              <a href='#' className='hover:text-[#e60012] text-black transition-all duration-300 ease-in-out'>Explore</a>
            </button>
          </div>
          <div className='p-2'>
            <button className="flex items-center space-x-1 border rounded px-2 py-1" style={{ borderColor: 'white', backgroundColor: 'white' }}>
              <GiShoppingBag color="#e60012" size={20} />
              <a href='#' className='hover:text-[#e60012] text-black transition-all duration-300 ease-in-out'> Shop</a>
            </button>
          </div>
          <div className='p-2'>
            <button className="flex items-center space-x-1 border rounded px-2 py-1" style={{ borderColor: 'white', backgroundColor: 'white' }}>
              <BsQuestionOctagonFill color="#e60012" size={20} />
              <a href='#' className='hover:text-[#e60012] text-black transition-all duration-300 ease-in-out'> Support</a>
            </button>
          </div>

        </div>
        <div className="flex items-center ">
          <div className='p-2'>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="group flex items-center border rounded px-3 py-2 bg-gray-100 transition cursor-pointer"
              style={{ borderColor: 'white', borderRadius: '10px' }}
            >
              <span className="text-gray-500 group-hover:text-[#e60012] transition">
                <FaSearch size={18} />
              </span>
              <span className="text-gray-600 ml-2 group-hover:text-[#e60012]">Search</span>
            </button>
          </div>
          <div className='p-2'>
            <button className="group flex items-center border rounded px-3 py-2 bg-gray-100 transition cursor-pointer" style={{ borderColor: 'white', borderRadius: '10px' }}>
              <span className="text-gray-500 group-hover:text-[#e60012] transition">
                <FaHeart size={18} />
              </span>
            </button>
          </div>
          <div className='p-2'>
            <button className="group flex items-center border rounded px-3 py-2 bg-gray-100 transition cursor-pointer" style={{ borderColor: 'white', borderRadius: '10px' }}>
              <span className="text-gray-500 group-hover:text-[#e60012] transition">
                <FaShoppingCart size={18} />
              </span>
            </button>
          </div>
          <div className='p-2'>
            <button className="group flex items-center border rounded  px-3 py-2 bg-white transition cursor-pointer" style={{ borderColor: '#e60012', borderRadius: '10px' }}>
              <span className="text-[#e60012] group-hover:text-[#e60012] transition flex items-center gap-2">
                <FaUser size={18} />
                <span style={{ color: '#e60012' }}>Login / Sign up</span>
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center bg-gray-50 py-3">
        <div className='flex items-center justify-center flex-wrap'>
          <span className="mr-4">
            <FaTruckArrowRight color="#e60012" size={25} />
          </span>
          <span className='text-gray-600 font-bold whitespace-nowrap'> Free shipping  </span>
          <span className='text-gray-600 ml-1 whitespace-nowrap'> on orders $50 or more. </span>
          <span className='text-gray-600 underline ml-1 font-bold hover:text-[#b3000e] transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap'> Restrictions apply</span>
        </div>

        <div className='max-[1024px]:hidden lg:flex max-[640px]:flex-row items-center justify-center'>
          <span className='text-gray-300' style={{ margin: '0 10px' }}>|</span>

          <PiHandCoinsBold color="#e60012" size={25} />
          <span className='text-gray-600 ml-2 whitespace-nowrap'> Redeem your
            <span className='text-gray-600 font-bold '> My Nintendo Platinum </span>
            <span className='text-gray-600'>Points for </span>
            <span className='text-gray-600 font-bold underline hover:text-[#b3000e] transition-all duration-300 ease-in-out cursor-pointer'>fun rewards</span>
          </span>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Bottom Navigation Bar */}
      {isMobile && (

        <nav className="lg:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-around bg-white shadow-lg rounded-full mb-6 py-2 px-3 w-[90%] max-w-sm gap-x-1" style={{ height: "60px" }}>
          <button className="flex-1 flex justify-center px-1">
            <ImMenu size={22} color="#444" />
          </button>
          <button className="flex-1 flex justify-center px-1">
            <FaHeart size={22} color="#444" />
          </button>
          <div className="relative flex-1 flex justify-center items-center" style={{ zIndex: 2 }}>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center w-14 h-14 bg-[#e60012] rounded-full shadow-lg border-4 border-white absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <FaSearch size={26} color="#fff" />
            </button>
          </div>
          <button className="flex-1 flex justify-center px-1">
            <FaShoppingCart size={22} color="#444" />
          </button>
          <button className="flex-1 flex justify-center px-1">
            <FaUser size={22} color="#444" />
          </button>
        </nav>

      )
      }
    </div >
  );
}

export default Header;