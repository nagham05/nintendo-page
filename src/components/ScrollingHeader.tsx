import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ScrollingHeader = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 350);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 1024);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div
            className={`
                ${isMobile
                    ? "md:hidden fixed bottom-[75px] left-1/2 w-[90%] max-w-sm transform -translate-x-1/2 z-50 flex items-center justify-between bg-[#EFEFEF] py-2 px-0 rounded-t-2xl"
                    : "fixed top-0 left-0 w-full z-50 bg-[#EFEFEF] shadow-md py-1"
                }
                transition-all duration-500 ease-in-out
                ${isMobile
                    ? (show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")
                    : (show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0")
                }
            `}
            style={{ willChange: "transform, opacity" }}
        >
            <div className="max-w-[1200px] mx-auto ">
                <div className="flex flex-row justify-between items-center py-2 text-gray-600">
                    <div className="flex flex-row gap-2 items-center flex-1">
                        <p className="font-bold text-lg max-[1024px]:hidden lg:flex">Stardew Valley</p>
                    </div>
                    <div className={`flex ${isMobile ? 'flex-row justify-between items-center w-full px-4 gap-6' : 'gap-2 items-center'} flex-1 justify-end`}>
                        <div className={`${isMobile ? 'flex flex-col items-start mb-2' : 'flex flex-row gap-2 items-center'}`}>
                            <p className={`text-m${isMobile ? ' text-lg' : ''}`}>Digital</p>
                            <p className={`text-l font-bold${isMobile ? ' text-xl' : ''}`}>$14.99</p>
                        </div>
                       <div className={`${isMobile ? 'flex flex-col flex-shrink-50 items-start mb-2' : 'flex flex-row gap-2 items-center'}`}>
                       <button className="bg-[#e60012] w-50 hover:bg-[#b3000e] transition-transform duration-300 ease-in-out hover:scale-110 text-white text-sm font-semibold p-2 rounded-3xl flex items-center justify-center gap-2 transition cursor-pointer ">
                            <MdOutlineFileDownload size={isMobile ? 26 : 20} />
                            <a href="#" className={isMobile ? ' text-l font-semibold' : ''}>Direct download</a>
                        </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollingHeader;