const AboutTwo = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-20">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div className="flex justify-center">

                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
                            alt="Working"
                            className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover shadow-xl"
                        />

                        {/* Green Shape */}

                        <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-green-400 rounded-full"></div>

                    </div>

                </div>

                {/* Right Side */}

                <div>

                    <p className="text-sm uppercase tracking-widest text-gray-500">
                        About Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
                        See how we can
                        <br />
                        help you progress
                    </h2>

                    <p className="mt-6 text-gray-500 leading-8">
                        Our team works closely with clients to build digital
                        experiences that are simple, modern and effective.
                        Every project is carefully crafted with attention to
                        design, usability and performance.
                    </p>

                    <button className="mt-8 bg-black text-white px-7 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                        Learn More
                    </button>

                </div>

            </div>

        </section>
    );
};

export default AboutTwo;