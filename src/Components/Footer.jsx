import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-16">

            <div className="max-w-7xl mx-auto">

                {/* Top */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}

                    <div>

                        <h2 className="text-2xl font-bold">
                            Elementor
                        </h2>

                        <p className="text-gray-500 mt-5 leading-7">
                            Creating beautiful digital experiences with creativity,
                            strategy and technology.
                        </p>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3 text-gray-500">

                            <li className="hover:text-black cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Services
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Blog
                            </li>

                        </ul>

                    </div>

                    {/* Support */}

                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-gray-500">

                            <li className="hover:text-black cursor-pointer">
                                Help Center
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Contact
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-black cursor-pointer">
                                Terms
                            </li>

                        </ul>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                                <FaFacebookF />
                            </div>

                            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                                <FaInstagram />
                            </div>

                            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                                <FaLinkedinIn />
                            </div>

                            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">
                                <FaTwitter />
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">

                    <p>
                        © 2026 Elementor. All Rights Reserved.
                    </p>

                    <p className="mt-4 md:mt-0">
                        Designed & Developed using React + Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;