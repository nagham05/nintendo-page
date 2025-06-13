import React from 'react';
import { MdStorage, MdOutlineDeveloperMode, MdGames, MdOutlineTabletAndroid } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { BsFillEmojiSmileFill, BsNintendoSwitch, BsFillBuildingFill, BsCalendarDateFill } from "react-icons/bs";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoIosSettings } from "react-icons/io";
import { FaTv } from "react-icons/fa";

import Esrb from "./Esrb";


const AboutItem = () => {

    const tags = [
        "Simulation",
        "Choose your own path",
        "Pixel art",
        "Romance",
        "Online co-op",
        "Play together on multiple consoles",
    ];


    const ItemDetails = [
        {
            icon: <MdStorage />,
            title: "Game file size",
            description: {
                "Nintendo Switch": "1.6 GB",
                "Nintendo Switch 2": "1.6 GB",
            },
        },
        {
            icon: <CgGames />,
            title: "Supported play modes",
            description: [
                { title: "TV mode", icon: <FaTv /> },
                { title: "Tabletop mode", icon: <MdOutlineTabletAndroid /> },
                { title: "Handheld mode", icon: <CgGames /> }
            ]
        },
        {
            icon: <HiUserGroup />,
            title: "No. of players",
            description: [
                {link:"Single System (1)"},
                {link:"Local Wireless (1)"},
                {link:"Online (1-4)"}
            ],

        },
        {
            icon: <BsFillEmojiSmileFill />,
            title: "Nintendo Account family-group lending",
            description: "Supported"
        },
        {
            icon: <MdGames />,
            title: "Genre",
            description: [{link: "Simulation"}],
        },
        {
            icon: <BsNintendoSwitch />,
            title: "Nintendo Switch Online",
            description: [
                {link:"Online play"},
                {link:"Save Data Cloud"}
            ],
        },
        {
            icon: <BsFillBuildingFill />,
            title: "Publisher",
            description: [{link:"ConcernedApe"}]
        },
        {
            icon: <MdOutlineDeveloperMode />,
            title: "Developer",
            description: [{link:"ConcernedApe"}]
        },
        {
            icon: <LiaLanguageSolid />,
            title: "Supported Languages",
            description: "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese"
        },
        {
            icon: <BsCalendarDateFill />,
            title: "Release date",
            description: "October 5, 2017"
        },
        {
            icon: <IoIosSettings />,
            title: "ESRB rating",
            description: <Esrb />
        }

    ];

   

    return (
        <div className="flex flex-col items-center p-6 mt-10">
            <div className="max-w-6xl w-full gap-8 items-start max-[640px]:gap-1">
                <h2 className="text-3xl font-semibold text-gray-800 mb-7">Related tags</h2>
                <div className="flex flex-wrap gap-5 md:gap-2 sm:gap-2 max-[640px]:gap-1 max-[640px]:text-sm">
                    {tags.map((tag, idx) => (
                        <button
                            key={idx}
                            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-l font-medium hover:text-[#b3000e] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl w-full gap-8 items-start mt-15">
                <h2 className="text-3xl font-semibold text-gray-800 mb-7 max-[640px]:text-2xl max-[640px]:mb-4">About this item</h2>
                <div className="w-full">
                    <table className="w-full table-fixed">
                        <tbody>
                            {ItemDetails.map((item, idx) => (
                                <tr key={idx} className="border-b border-gray-200">
                                    <td className="py-4 max-[640px]:py-2 flex items-center gap-2 w-[10%]">
                                        <span className="text-[#e60012] text-2xl m-5 max-[640px]:text-xl max-[640px]:m-2">{item.icon}</span>
                                    </td>
                                    <td className='py-4 max-[640px]:py-2 text-gray-800 text-m max-[640px]:hidden md:table-cell  w-[20%]'>
                                        <span className="text-gray-800 font-medium text-lg max-[640px]:text-base">{item.title}</span>
                                    </td>
                                    <td className="py-4 max-[640px]:py-2 text-gray-800 text-m md:pl-0 pl-5 w-[70%] max-[640px]:w-[90%]">
                                        <div className="md:hidden mb-2">
                                            <span className="text-gray-800 font-medium text-lg max-[640px]:text-base">{item.title}</span>
                                        </div>
                                        {Array.isArray(item.description) ? (
                                            <div className="flex flex-row flex-wrap">
                                                {item.description.map((desc, idx) => (
                                                    <div key={idx} className="flex items-center gap-1 px-2 max-[640px]:px-1 break-words">
                                                        {typeof desc === 'object' ? (
                                                            'icon' in desc ? (
                                                                <>
                                                                    <span className="text-[#e60012] max-[640px]:text-sm">{desc.icon}</span>
                                                                    <span className="max-[640px]:text-sm break-words">{desc.title}</span>
                                                                </>
                                                            ) : (
                                                                <a href="#" className="text-[#e60012] font-bold underline hover:text-[#b3000e] max-[640px]:text-sm break-words">{desc.link}</a>
                                                            )
                                                        ) : (
                                                            <span className="max-[640px]:text-sm break-words">{desc}</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : typeof item.description === 'object' && !React.isValidElement(item.description) ? (
                                            <div className="flex flex-col gap-1">
                                                {Object.entries(item.description).map(([key, value]) => (
                                                    <div key={key} className="max-[640px]:text-sm break-words">
                                                        {key}: <a href="#" className="text-[#e60012] font-bold underline hover:text-[#b3000e] break-words">{value}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="max-[640px]:text-sm break-words">{item.description}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="max-w-6xl w-full gap-8 items-start mt-15">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">About the Number of Players</h3>
                <p className="text-gray-800 text-m">1-4 with online multiplayer functionality</p>
            </div>
           
        </div>
    )
}

export default AboutItem;