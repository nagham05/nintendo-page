import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import ESRBCERTIFIED from "../assets/ESRBCERTIFIED.png";
import logo from "../assets/logo.png";

const Footer = () => {

    return (
        <footer className="bg-white border-t">
            <div className="bg-[#e60012] flex justify-center py-4 h-25">
                <img
                    src={logo}
                    alt="Nintendo"
                    className="h-20"
                />
            </div>

            <div className="w-full px-4 py-8 grid gap-8 grid-rows sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 text-m m-2 ">
                <div className="flex flex-col gap-2 border-r border-gray-300 pr-4">
                    <h4 className="text-xl font-semibold mb-2">About Nintendo</h4>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="text-[#e60012] font-bold hover:text-[#b3000e] hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Corporate Social Responsibility
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 border-r border-gray-300 pr-4">
                    <h4 className="text-xl font-semibold mb-2">Shop</h4>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Games
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Hardware
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Merchandise
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Sales & deals
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Exclusives
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Nintendo Switch Online
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-bold hover:text-[#b3000e] hover:underline">
                                Nintendo Store US
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 border-r border-gray-300 pr-4">
                    <h4 className="text-xl font-semibold mb-2">Orders</h4>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Order details
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Shipping info
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Refunds and returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 border-r border-gray-300 pr-4">
                    <h4 className="text-xl font-semibold mb-2">Support</h4>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Nintendo Switch
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Nintendo Account
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Other systems
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Repairs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Warranty
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                Licensed product information
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 border-r border-gray-300 pr-4">
                    <div className="flex flex-col gap-2 h-40">
                        <h4 className="text-lg font-semibold mb-2">Parents</h4>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Info for parents
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Parental controls
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-6 h-35">
                        <h4 className="text-lg font-semibold mb-2">Community Guidelines</h4>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Community guidelines
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Online safety
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 h-40">
                        <h4 className="text-lg font-semibold mb-2">Privacy</h4>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Cookies and interest-based ads
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-6 h-50">
                        <h4 className="text-lg font-semibold mb-2">Documents & policies</h4>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Health & safety precautions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Wireless regulatory info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#e60012] font-semibold hover:text-[#b3000e] hover:underline">
                                    Supply chain transparency
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between ml-10 mr-10 mb-4">
                <div className="flex flex-row gap-8 text-gray-700 text-3xl justify-center items-center max-[440px]:gap-2">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
                <img src={ESRBCERTIFIED} alt="ESRB Certified" className="h-23 " />
            </div>

            <div className="border-t text-xs bg-[#242424] text-white py-4">
                <div className="max-w-7xl mx-auto flex sm:flex-col md:flex-col lg:flex-row items-center justify-between gap-4 p-5 max-[640px]:flex-col">
                    <p className="text-center md:text-left">
                        © Nintendo. Games are property of their respective owners. Nintendo
                        of America Inc. Headquarters are in Redmond, Washington, USA
                    </p>
                    <div className="flex sm:flex-col md:flex-row items-center gap-4 max-[640px]:flex-col">
                        <div className=" flex sm:flex-col md:flex-row gap-4">
                            <a href="#" className="hover:underline">
                                Contact us
                            </a>
                            <a href="#" className="hover:underline">
                                Website feedback
                            </a>
                            <a href="#" className="hover:underline">
                                Terms of Use
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <img
                                src="https://flagcdn.com/us.svg"
                                alt="US flag"
                                className="w-5 h-5 rounded "
                            />
                            <span>English (United States)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;