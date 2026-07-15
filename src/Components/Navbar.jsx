const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-8 lg:px-16 py-6">

            {/* Logo */}

            <h1 className="text-xl font-semibold tracking-wide">
                Elementor
            </h1>

            {/* Navigation */}

            <ul className="hidden md:flex items-center gap-10 text-sm font-medium">

                <li className="cursor-pointer hover:text-gray-500 transition">
                    Home
                </li>

                <li className="cursor-pointer hover:text-gray-500 transition">
                    Studio
                </li>

                <li className="cursor-pointer hover:text-gray-500 transition">
                    Services
                </li>

                <li className="cursor-pointer hover:text-gray-500 transition">
                    Contact
                </li>

                <li className="cursor-pointer hover:text-gray-500 transition">
                    Blog
                </li>

            </ul>

            {/* Hamburger */}

            <button className="text-2xl">
                ☰
            </button>

        </nav>
    );
};

export default Navbar;