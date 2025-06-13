import stradewValley from "../assets/stradewValley.png"
import Esrb from "./Esrb"
import { FaRegHeart } from "react-icons/fa";
import stradewValley1 from "../assets/stradewValley1.png"
import stradewValley2 from "../assets/stradewValley2.png"
import stradewValley3 from "../assets/stradewValley3.png"
import stradewValley4 from "../assets/stradewValley4.png"
import stradewValley5 from "../assets/stradewValley5.png"
import stradewValley6 from "../assets/stradewValley6.png"
import { MdOutlineFileDownload } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

const thumbnails = [
    stradewValley,
    stradewValley1,
    stradewValley2,
    stradewValley3,
    stradewValley4,
    stradewValley5,
    stradewValley6,
];

const LandingItems = () => {
    const [selectedImage, setSelectedImage] = useState(stradewValley);
    const [startIndex, setStartIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(6);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const thumbnailWidth = 80; // Base width of thumbnail (w-20 = 5rem = 80px)
                const gap = 7; // Gap between thumbnails (gap-3 = 0.75rem = 12px)
                const maxThumbnails = Math.floor((containerWidth + gap) / (thumbnailWidth + gap));
                setVisibleCount(Math.max(1, maxThumbnails));
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const product = {
        image: selectedImage,
        name: 'Stardew Valley',
        version: 'Nintendo Switch',
        edition: 'Digital',
        price: '$14.99'
    }

    const visibleThumbnails = thumbnails.slice(startIndex, startIndex + visibleCount);
    const canMoveLeft = startIndex > 0;
    const canMoveRight = startIndex + visibleCount < thumbnails.length;

    const handlePrev = () => {
        if (canMoveLeft) {
            setStartIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (canMoveRight) {
            setStartIndex(prev => prev + 1);
        }
    };

    const handleMainImageNext = () => {
        setCurrentImageIndex(prev => {
            const newIndex = prev === thumbnails.length - 1 ? 0 : prev + 1;
            setSelectedImage(thumbnails[newIndex]);
            if (newIndex === 0) {
                setStartIndex(0);
            } else if (newIndex >= startIndex + visibleCount) {
                setStartIndex(Math.min(thumbnails.length - visibleCount, newIndex - visibleCount + 1));
            }
            return newIndex;
        });
    };

    const handleMainImagePrev = () => {
        setCurrentImageIndex(prev => {
            const newIndex = prev === 0 ? thumbnails.length - 1 : prev - 1;
            setSelectedImage(thumbnails[newIndex]);
            if (newIndex === thumbnails.length - 1) {
                setStartIndex(Math.max(0, thumbnails.length - visibleCount));
            } else if (newIndex < startIndex) {
                setStartIndex(Math.max(0, newIndex - 1));
            }
            return newIndex;
        });
    };

    const handleThumbnailClick = (thumb: string) => {
        const newIndex = thumbnails.indexOf(thumb);
        setCurrentImageIndex(newIndex);
        setSelectedImage(thumb);
    };

    const openModal = (index: number) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
        setTimeout(() => setShowModal(true), 10);
    };
    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setIsModalOpen(false), 250);
    };
    const handleModalThumbClick = (idx: number) => setModalImageIndex(idx);
    const handleModalNext = () => setModalImageIndex((prev) => (prev + 1) % thumbnails.length);
    const handleModalPrev = () => setModalImageIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length);

    return (
        <div className="bg-[#e6f6fd] py-10 font-sans bg-[#DBEFF9] ">

            <div className="lg:max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8  ">
                <div className="text-xs text-gray-400 mb-4">Store  &gt;  Games  &gt;  Stardew Valley</div>

                <div className="flex flex-cols-2 md:flex-row max-[768px]:flex-col ">
                    {/* Left: Main image and thumbnails */}
                    <div className="w-full  flex flex-col items-start md:w-full md:order-1 sm:w-full md:pr-8">
                        <div className="relative group w-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-2xl w-full max-w-[600px] max-h-[500px] object-cover mb-4 transition-all duration-300 ease-in-out sm:w-full md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] cursor-zoom-in"
                                onClick={() => openModal(currentImageIndex)}
                            />
                            <button
                                onClick={handleMainImagePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 font-bold p-2 text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                            >
                                <IoIosArrowBack size={30} />
                            </button>
                            <button
                                onClick={handleMainImageNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 font-bold p-2 text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                            >
                                <IoIosArrowForward size={30} />
                            </button>
                        </div>
                        <div className="relative flex gap-3 mt-2 w-full" ref={containerRef}>
                            {canMoveLeft && (
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-gray-800/30 hover:bg-gray-800/70 p-2 transition-all duration-300 ease-in-out z-10 rounded-lg h-12 md:h-12 lg:h-14 flex items-center"
                                >
                                    <div className="transition-all duration-300 ease-in-out hover:scale-110">
                                        <IoIosArrowBack size={30} />
                                    </div>
                                </button>
                            )}
                            {visibleThumbnails.map((thumb, idx) => (
                                <img
                                    key={idx}
                                    src={thumb}
                                    alt={`thumb-${idx}`}
                                    className={`w-20 h-14 object-cover rounded-lg bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80 md:w-16 md:h-12 lg:w-20 lg:h-14 ${selectedImage === thumb ? 'border-b-4 border-[#e60012] scale-105' : 'border-b border-gray-200'}`}
                                    onClick={() => handleThumbnailClick(thumb)}
                                />
                            ))}
                            {canMoveRight && (
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-gray-800/30 hover:bg-gray-800/70 p-2 transition-all duration-300 ease-in-out z-10 rounded-lg h-14 md:h-12 lg:h-14 flex items-center"
                                >
                                    <div className="transition-all duration-300 ease-in-out hover:scale-110">
                                        <IoIosArrowForward size={30} />
                                    </div>
                                </button>
                            )}
                        </div>
                        <Esrb />
                    </div>
                    {/* Right: Info and actions */}
                    <div className="w-1/2 w-full flex flex-col justify-between items-start  md:w-full md:order-2 max-[768px]:w-full max-[768px]:ml-0 max-[768px]:mt-10 lg:pl-16 md:pl-8">
                        <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:text-2xl md:mb-6 w-full">{product.name}</h2>
                            <div className="flex gap-4 mb-4 md:mb-6 w-full">
                                <div>
                                    <div className="text-sm text-black-500">Version</div>
                                    <div className="bg-gray-100 text-gray-700 rounded px-3 py-1 text-sm inline-block mt-1 mr-7">{product.version}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-black-500">Edition</div>
                                    <div className="bg-gray-100 text-gray-700 rounded px-3 py-1 text-sm inline-block mt-1">{product.edition}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4 md:mb-6 w-full">
                                <div className="text-2xl font-bold text-gray-800 md:text-xl">{product.price}</div>
                                <button className="text-red-500 hover:text-[#b3000e] cursor-pointer relative group">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 relative">
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-heart-rays">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#b3000e]" style={{ top: '-2px' }}></div>
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#b3000e]" style={{ bottom: '-2px' }}></div>
                                                <div className="absolute top-0 left-0 w-0.5 h-3 bg-[#b3000e] transform -rotate-45 origin-bottom-right" style={{ top: '-2px', left: '-2px' }}></div>
                                                <div className="absolute top-0 right-0 w-0.5 h-3 bg-[#b3000e] transform rotate-45 origin-bottom-left" style={{ top: '-2px', right: '-2px' }}></div>
                                                <div className="absolute bottom-0 left-0 w-0.5 h-3 bg-[#b3000e] transform rotate-45 origin-top-right" style={{ bottom: '-2px', left: '-2px' }}></div>
                                                <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-[#b3000e] transform -rotate-45 origin-top-left" style={{ bottom: '-2px', right: '-2px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <FaRegHeart size={25} />
                                    </div>
                                </button>
                            </div>
                            <button className="w-full bg-[#e60012] hover:bg-[#b3000e] transition-transform duration-300 ease-in-out hover:scale-110 text-white text-xl font-semibold p-5 rounded-xl flex items-center justify-center gap-5 transition md:text-base md:p-4">
                                <MdOutlineFileDownload size={25} />
                                Direct download
                            </button>
                            <div className="text-xs text-gray-500 mt-2 md:mt-4 w-full">This item will be sent to your system automatically after purchase.</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${showModal ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/0'}`}>
                    <div className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="absolute top-0 right-0 p-4">
                            <button onClick={closeModal} className="text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition">
                                <IoMdClose size={32} />
                            </button>
                        </div>
                        <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-2">
                            <div className="flex-1 flex items-center justify-center w-full relative">
                                <button 
                                    onClick={handleModalPrev} 
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out  hover:scale-110 z-10"
                                >
                                    <div className="transition-all duration-300 ease-in-out hover:scale-110">
                                        <IoIosArrowBack size={30} />
                                    </div>
                                </button>
                                <img
                                    src={thumbnails[modalImageIndex]}
                                    alt="modal-img"
                                    className="rounded-2xl max-h-[60vh] max-w-full object-contain shadow-2xl bg-black transition-all duration-300"
                                />
                                <button 
                                    onClick={handleModalNext} 
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out  hover:scale-110 z-10"
                                >
                                    <div className="transition-all duration-300 ease-in-out hover:scale-110">
                                        <IoIosArrowForward size={30} />
                                    </div>
                                </button>
                            </div>
                            <div className="flex gap-2 mt-6 w-full overflow-x-auto justify-center pb-2">
                                {thumbnails.map((thumb, idx) => (
                                    <img
                                        key={idx}
                                        src={thumb}
                                        alt={`modal-thumb-${idx}`}
                                        className={`h-16 w-24 object-cover rounded-lg cursor-pointer border-b-3 transition-all duration-200 ${modalImageIndex === idx ? 'border-b-[#e60012] scale-105' : 'border-transparent opacity-80 hover:opacity-100'}`}
                                        onClick={() => handleModalThumbClick(idx)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default LandingItems;