import logo from "../assets/logo.png";
import mario from "../assets/mario.png";
import donkeyKong from "../assets/donkeyKong.png";
import minecraft from "../assets/minecraft.png";
import ps from "../assets/ps.png";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";


type Product = {
  title: string;
  subtitle: string;
  image: string;
  type: 'Games' | 'Hardware';
};

type NintendoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const trendingTopics = [
  'Nintendo Switch 2',
  'Nintendo Switch 2 games',
  'Nintendo SAN FRANCISCO store',
  'How to buy Nintendo Switch 2',
  'Games on sale',
  'Free game updates for Nintendo Switch 2',
];

const products: Product[] = [
  {
    title: 'Mario Kart™ World',
    subtitle: 'Games',
    image: mario,
    type: 'Games',
  },
  {
    title: 'Donkey Kong™ Bananza',
    subtitle: 'Games',
    image: donkeyKong,
    type: 'Games',
  },
  {
    title: 'Nintendo Switch™ 2 Pro Controller',
    subtitle: 'Hardware',
    image: ps,
    type: 'Hardware',
  },
  {
    title: 'Minecraft',
    subtitle: 'Games',
    image: minecraft,
    type: 'Games',
  },
];

const SearchModal = ({ isOpen, onClose }: NintendoModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to ensure the initial transform is applied
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Modal at the top */}
      <div 
        id="search-modal-bar" 
        className={`w-full bg-white shadow-2xl flex pointer-events-auto transition-all duration-300 ease-in-out transform ${
          isAnimating ? 'translate-y-0' : '-translate-y-full'
        }`} 
        style={{ minWidth: 800, position: 'relative', zIndex: 10 }}
      >
        <div className="sm:hidden md:hidden lg:block">
          <img src={logo} alt="Nintendo" className="w-25 h-15  " />
        </div>

        <div className="flex-1 p-6 relative overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black text-xl font-bold hover:text-red-500"
          >
            ✕
          </button>

          {/* Search */}
          <div className="w-1/3 flex items-center border-b border-[#e60012] mb-6">
            <FaSearch size={20} color="#e60012" />
            <input
              type="text"
              placeholder="Search games, hardware, etc"
              className="w-1/2 py-2 outline-none ml-2"
              autoFocus
            />
          </div>

          {/* Two columns for Trending Topics and Top Store Products */}
          <div className="flex gap-5 ">
            {/* Trending Topics (Left Column) */}
            <div className="w-1/3 sm:flex-row md:flex-row sm:w-full">
              <h2 className="text-lg font-semibold mb-3 text-black-100">Trending topics</h2>
              <ul className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <li key={index} className="text-[#e60012] font-medium hover:text-[#b3000e] cursor-pointer">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Store Products (Right Column) */}
            <div className="w-1/2 sm:flex-row md:flex-row sm:w-full">
              <h2 className="text-lg font-semibold mb-4">Top store products</h2>
              <div className="grid grid-cols-2 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="group border border-gray-300 rounded-xl p-3 flex items-center gap-4 hover:shadow-md transition relative">
                    <div className="relative">
                      <span className="absolute w-full bg-[#e60012] text-white text-xs border-b-2 font-bold px-2 py-0.5 flex justify-center rounded-t-xl z-10">
                        🕹️ 2
                      </span>
                      <div className="w-24 h-24 object-cover rounded-md bg-white overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="object-cover rounded-md bg-white h-24 w-24 transition duration-300"
                        />
                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{product.title}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        {product.type === 'Games' ? '🎮' : '🧩'} {product.subtitle}
                      </p>
                    </div>
                    <button className="text-[#e60012] hover:text-[#b3000e] text-xl relative group/heart">
                      {/* Heart rays animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 relative">
                          <div className="absolute inset-0 opacity-0 group-hover/heart:opacity-100 group-hover/heart:animate-heart-rays">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-[#b3000e]" style={{ top: '-1px' }}></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-[#b3000e]" style={{ bottom: '-1px' }}></div>
                            <div className="absolute top-0 left-0 w-0.5 h-2 bg-[#b3000e] transform -rotate-45 origin-bottom-right" style={{ top: '-1px', left: '-1px' }}></div>
                            <div className="absolute top-0 right-0 w-0.5 h-2 bg-[#b3000e] transform rotate-45 origin-bottom-left" style={{ top: '-1px', right: '-1px' }}></div>
                            <div className="absolute bottom-0 left-0 w-0.5 h-2 bg-[#b3000e] transform rotate-45 origin-top-right" style={{ bottom: '-1px', left: '-1px' }}></div>
                            <div className="absolute bottom-0 right-0 w-0.5 h-2 bg-[#b3000e] transform -rotate-45 origin-top-left" style={{ bottom: '-1px', right: '-1px' }}></div>
                          </div>
                        </div>
                      </div>
                      <span className="relative z-10">
                        <FaRegHeart />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="fixed inset-0 z-50 pointer-events-none">
        {/* Modal at the top */}
        <div
          id="search-modal-bar"
          className={`w-full max-w-[800px] bg-white shadow-2xl flex flex-col md:flex-row pointer-events-auto transition-all duration-300 ease-in-out transform ${
            isAnimating ? 'translate-y-0' : '-translate-y-full'
          } mx-auto`} // center horizontally
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* Logo */}
          <div className="hidden lg:block p-4">
            <img src={logo} alt="Nintendo" className="w-25 h-15" />
          </div>
      
          {/* Main content */}
          <div className="flex-1 p-4 md:p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>
      
            {/* Search */}
            <div className="w-full md:w-1/2 flex items-center border-b border-[#e60012] mb-6">
              <FaSearch size={20} color="#e60012" />
              <input
                type="text"
                placeholder="Search games, hardware, etc"
                className="w-full py-2 outline-none ml-2"
                autoFocus
              />
            </div>
      
            {/* Two columns for Trending Topics and Top Store Products */}
            <div className="flex flex-col md:flex-row gap-5">
              {/* Trending Topics */}
              <div className="w-full md:w-1/3">
                <h2 className="text-lg font-semibold mb-3 text-black-100">Trending topics</h2>
                <ul className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <li key={index} className="text-[#e60012] font-medium hover:text-[#b3000e] cursor-pointer">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
      
              {/* Top Store Products */}
              <div className="w-full md:w-2/3">
                <h2 className="text-lg font-semibold mb-4">Top store products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((product, idx) => (
                    <div
                      key={idx}
                      className="group border border-gray-300 rounded-xl p-3 flex items-center gap-4 hover:shadow-md transition relative"
                    >
                      <div className="relative">
                        <span className="absolute w-full bg-[#e60012] text-white text-xs border-b-2 font-bold px-2 py-0.5 flex justify-center rounded-t-xl z-10">
                          🕹️ 2
                        </span>
                        <div className="w-24 h-24 object-cover rounded-md bg-white overflow-hidden relative">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="object-cover rounded-md bg-white h-24 w-24 transition duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{product.title}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          {product.type === 'Games' ? '🎮' : '🧩'} {product.subtitle}
                        </p>
                      </div>
                      <button className="text-[#e60012] hover:text-[#b3000e] text-xl relative group/heart">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 relative">
                            <div className="absolute inset-0 opacity-0 group-hover/heart:opacity-100 group-hover/heart:animate-heart-rays">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-[#b3000e]" />
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-[#b3000e]" />
                              <div className="absolute top-0 left-0 w-0.5 h-2 bg-[#b3000e] transform -rotate-45 origin-bottom-right" />
                              <div className="absolute top-0 right-0 w-0.5 h-2 bg-[#b3000e] transform rotate-45 origin-bottom-left" />
                              <div className="absolute bottom-0 left-0 w-0.5 h-2 bg-[#b3000e] transform rotate-45 origin-top-right" />
                              <div className="absolute bottom-0 right-0 w-0.5 h-2 bg-[#b3000e] transform -rotate-45 origin-top-left" />
                            </div>
                          </div>
                        </div>
                        <span className="relative z-10">
                          <FaRegHeart />
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Blurred overlay */}
        <div
          className={`fixed left-0 right-0 bottom-0 bg-gray-900/60 z-0 transition-opacity duration-300 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ top: 'var(--search-modal-bar-height, 180px)' }}
        />
      </div>
      
      )}
      {/* Blurred overlay for the rest of the page */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-gray-900/60 z-0 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ top: 'var(--search-modal-bar-height, 180px)' }}
      />
    </div>
  );
};

export default SearchModal;