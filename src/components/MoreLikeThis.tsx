import catcCafe from "../assets/likeItems/catCafe.png";
import dragonGues from "../assets/likeItems/dragonGues.png";
import faefarm from "../assets/likeItems/faefarm.png";
import mara from "../assets/likeItems/mara.png";
import moonstone from "../assets/likeItems/moonstone.png";
import ooblets from "../assets/likeItems/ooblets.png";
import portia from "../assets/likeItems/portia.png";
import { MdGames } from "react-icons/md";
import { FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";


const MoreLikeThis = () => {
    const SimilarItems = [
        {
            image: catcCafe,
            title: "Cat Cafe",
            date: "4/26/19",
            price: "4.49"
        },
        {
            image: dragonGues,
            title: "Dragon Guest Builders 2",
            date: "7/12/19",
            price: "49.99"
        },
        {
            image: faefarm,
            title: "Fae Farm",
            date: "9/8/23",
            price: "49.99"
        },
        {
            image: mara,
            title: "Summer in Mara",
            date: "6/16/20",
            price: "19.99"

        },
        {
            image: moonstone,
            title: "Moonstone Island",
            date: "6/19/24",
            price: "19.99"
        },
        {
            image: ooblets,
            title: "Ooblets",
            date: "9/1/22",
            price: "29.99"
        },
        {
            image: portia,
            title: "My Time at Portia",
            date: "4/16/19",
            price: "4.99"
        },


    ]

    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const children = scrollRef.current.children;
            let newIndex = currentIndex;
            if (direction === "left" && currentIndex > 0) {
                newIndex = currentIndex - 1;
            } else if (direction === "right" && currentIndex < SimilarItems.length - 1) {
                newIndex = currentIndex + 1;
            }
            setCurrentIndex(newIndex);
            const target = children[newIndex] as HTMLElement;
            if (target) {
                target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
            }
        }
    };

    return (
        <div className="flex flex-col items-center p-6 ">
            <div className="max-w-6xl w-full gap-8 items-start mt-15">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">More like this</h3>
                <div className="relative">
                    {/* Left Arrow */}
                    {currentIndex > 0 && (
                        <button
                            className="absolute left-0 top-1/2 text-white -translate-y-1/2 z-10 bg-gray-800/30 hover:bg-gray-800/70 p-5 transition-all duration-300 ease-in-out scale-105 rounded-lg h-[480px] flex items-center"
                            onClick={() => scroll("left")}
                            aria-label="Scroll left"
                        >
                            <FaChevronLeft size={30} />
                        </button>
                    )}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scroll-smooth gap-6 px-10"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {SimilarItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex-shrink-0 max-sm:w-[220px] w-[270px] bg-white rounded-2xl border border-gray-300 duration-300 p-0 overflow-hidden max-sm:min-h-[400px] min-h-[480px]"
                                style={{ marginRight: idx === SimilarItems.length - 1 ? 0 : "1.5rem" }}
                            >
                                <div className="max-sm:h-48 h-60">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-t-2xl transition-all duration-300 ease-in-out group-hover:scale-105"
                                />
                                </div>
                                <div className="flex flex-col flex-1 px-6 pt-4 pb-2">
                                    <p className="text-gray-800 font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-[#e60012]">
                                        {item.title}
                                    </p>
                                    <p className="text-gray-500 text-base mb-4">{item.date}</p>
                                    <div>
                                        <p className="text-gray-800 font-bold text-l mb-2 mt-10">${item.price}</p>
                                    </div>
                                    <div className="flex items-center  justify-between mt-auto w-full">
                                        <span className="flex items-center gap-2 text-gray-600 text-base">
                                            <MdGames />
                                            Games
                                        </span>
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
                                            <span className="relative z-10 font-bold">
                                                <FaRegHeart />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right Arrow */}
                    {currentIndex < SimilarItems.length - 3.5 && (
                        <button
                            className="absolute right-0 top-1/2 text-white -translate-y-1/2 z-10 bg-gray-800/30 hover:bg-gray-800/70 p-5 transition-all duration-300 ease-in-out scale-105 rounded-lg h-[480px] flex items-center"
                            onClick={() => scroll("right")}
                            aria-label="Scroll right"
                        >
                            <FaChevronRight size={30} />
                        </button>
                    )}
                </div>
                <div className="flex flex-col  p-6 mt-10 text-gray-400 text-sm">
                    <p className="mb-3">WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.</p>
                    <p className="mb-3 ">Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online</p>
                    <p className="mb-3">Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.</p>
                </div>
            </div>

        </div>

    )
}

export default MoreLikeThis;