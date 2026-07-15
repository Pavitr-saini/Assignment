const Newsletter = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-24">

            <div className="max-w-6xl mx-auto bg-black rounded-3xl px-8 md:px-16 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}

                    <div>

                        <p className="uppercase tracking-[4px] text-gray-400">
                            Newsletter
                        </p>

                        <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4 leading-tight">
                            Let's build
                            <br />
                            something great
                        </h2>

                        <p className="text-gray-400 mt-6 leading-8">
                            Subscribe to receive updates about our latest
                            projects and creative ideas.
                        </p>

                    </div>

                    {/* Right */}

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-full bg-white outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-full bg-white outline-none"
                        />

                        <button
                            type="submit"
                            className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-200 transition"
                        >
                            Subscribe
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Newsletter;