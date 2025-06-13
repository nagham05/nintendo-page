import stradewValley from '../assets/stradewValley.png'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';

const About = () => {
    const [expanded, setExpanded] = useState(false);
    const fullText = `
              Now with Multiplayer! Invite 1–3 players to join you in the valley! Players can work together to build a thriving farm, share resources, 
              and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on 
              produce sold for a more challenging experience.`;
    const halfIndex = Math.floor(fullText.length / 4);
    const halfText = fullText.slice(0, halfIndex) + '...';

    return (
        <div className="flex items-center justify-center p-6 w-full mt-10">
            <div className="max-w-6xl w-full flex flex-col gap-8 items-start min-[768px]:flex-row">
                {/* Text Section */}
                <div className="w-full flex flex-col md:w-1/2 md:order-1 xs:w-full">
                    <h1 className="text-xl min-[768px]:text-2xl font-bold text-gray-800 mb-4 w-full">
                        You're moving to the valley...
                    </h1>
                    <p className="text-sm min-[768px]:text-base text-gray-700 mb-4 w-full">
                        You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your 
                        new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. 
                        Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most 
                        vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one 
                        to restore Stardew Valley to greatness!
                    </p>
                    <div className="overflow-hidden transition-all duration-500 ease-in-out w-full">
                        <p className={`text-sm min-[768px]:text-base text-gray-700 mb-4 transition-all duration-500 ease-in-out ${expanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'} w-full`}>
                            {fullText}
                        </p>
                        <p className={`text-sm min-[768px]:text-base text-gray-700 mb-4 transition-all duration-500 ease-in-out ${expanded ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[500px]'} w-full`}>
                            {halfText}
                        </p>
                    </div>
                    <button className="flex items-center gap-2 mb-4 cursor-pointer group w-full" onClick={() => setExpanded(e => !e)}>
                        <span className="text-[#e60012] group-hover:text-[#b3000e] transition-colors duration-300">
                            {expanded ? <FaMinus size={20} /> : <FaPlus size={20} />}
                        </span>
                        <span className="text-[#e60012] font-semibold text-base min-[768px]:text-lg group-hover:text-[#b3000e]">{expanded ? 'Read less' : 'Read more'}</span>
                    </button>
                    <p className="text-[10px] min-[768px]:text-xs text-gray-500 mb-4 w-full">
                        Software description provided by the publisher.
                    </p>
                    <button className="w-3/4 bg-[#e60012] hover:bg-[#b3000e] transition-transform duration-300 ease-in-out hover:scale-110 text-white text-base min-[768px]:text-lg font-semibold p-2 min-[768px]:p-3 rounded-xl flex items-center justify-center gap-3 transition">
                        Explore this game's official website
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full flex flex-col justify-center items-center md:w-1/2 md:order-2 xs:w-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <img
                            src={stradewValley}
                            alt="Stardew Valley"
                            className="rounded-lg w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;