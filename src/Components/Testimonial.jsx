const Testimonial = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-24">

            <div className="max-w-5xl mx-auto text-center">

                <p className="uppercase tracking-[4px] text-gray-500">
                    Testimonial
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold mt-4">
                    What Our Clients Say
                </h2>

                <p className="text-gray-500 mt-12 text-lg leading-9 max-w-3xl mx-auto">
                    "Working with this team has been an amazing experience.
                    They understood our requirements perfectly and delivered
                    a modern website that exceeded our expectations."
                </p>

                <div className="mt-10 flex flex-col items-center">

                    <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Client"
                        className="w-20 h-20 rounded-full object-cover"
                    />

                    <h3 className="mt-5 text-xl font-semibold">
                        Sarah Johnson
                    </h3>

                    <p className="text-gray-500">
                        CEO, Creative Studio
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Testimonial;