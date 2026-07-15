import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full flex items-center justify-between px-8 lg:px-16 py-6 relative z-50 bg-white">

            {/* Logo */}
            <h1 className="text-xl font-semibold tracking-wide cursor-pointer hover:opacity-80 transition">
                Elementor
            </h1>

            {/* Navigation Desktop */}
            <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
                <li className="cursor-pointer hover:text-gray-500 transition duration-200">
                    Home
                </li>
                <li className="cursor-pointer hover:text-gray-500 transition duration-200">
                    Studio
                </li>
                <li className="cursor-pointer hover:text-gray-500 transition duration-200">
                    Services
                </li>
                <li className="cursor-pointer hover:text-gray-500 transition duration-200">
                    Contact
                </li>
                <li className="cursor-pointer hover:text-gray-500 transition duration-200">
                    Blog
                </li>
            </ul>

            {/* Hamburger Button (Mobile only) */}
            <button 
                onClick={toggleMenu} 
                className="md:hidden text-2xl cursor-pointer hover:text-gray-600 focus:outline-none transition-all duration-300 transform active:scale-95"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Navigation Dropdown */}
            <div 
                className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg md:hidden transition-all duration-300 ease-in-out origin-top ${
                    isOpen 
                        ? "opacity-100 scale-y-100 pointer-events-auto" 
                        : "opacity-0 scale-y-0 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col items-center gap-6 py-8 text-base font-medium">
                    <li 
                        onClick={() => setIsOpen(false)} 
                        className="cursor-pointer w-full text-center py-2 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                    >
                        Home
                    </li>
                    <li 
                        onClick={() => setIsOpen(false)} 
                        className="cursor-pointer w-full text-center py-2 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                    >
                        Studio
                    </li>
                    <li 
                        onClick={() => setIsOpen(false)} 
                        className="cursor-pointer w-full text-center py-2 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                    >
                        Services
                    </li>
                    <li 
                        onClick={() => setIsOpen(false)} 
                        className="cursor-pointer w-full text-center py-2 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                    >
                        Contact
                    </li>
                    <li 
                        onClick={() => setIsOpen(false)} 
                        className="cursor-pointer w-full text-center py-2 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                    >
                        Blog
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;