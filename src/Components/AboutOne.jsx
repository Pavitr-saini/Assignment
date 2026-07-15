const AboutOne = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-20">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div>

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Tomorrow should
                        <br />
                        be better than today
                    </h2>

                    <p className="mt-6 text-gray-500 leading-8">
                        We are a team of strategists, designers, communicators,
                        researchers and developers who love creating products
                        that people enjoy using every day.
                    </p>

                    <button className="mt-8 border-b-2 border-black pb-1 hover:text-gray-500 transition">
                        Read More →
                    </button>

                </div>

                {/* Right Side */}

                <div className="relative flex justify-center">

                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700"
                        alt="Meeting"
                        className="w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] object-cover rounded-full shadow-xl"
                    />

                    {/* Pink Shape */}

                    <div className="absolute -top-4 -right-2 w-16 h-16 bg-pink-400 rotate-12 rounded-md"></div>

                </div>

            </div>

        </section>
    );
};

export default AboutOne;