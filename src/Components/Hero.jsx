const people = [
    {
        id: 1,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        image: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
        id: 4,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: 5,
        image: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
        id: 6,
        image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
];

const Hero = () => {
    return (
        <section className="relative px-6 md:px-12 lg:px-20 pt-10 pb-24">

            <div className="max-w-5xl mx-auto text-center">

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
                    The <span className="underline decoration-pink-400">thinkers</span>{" "}
                    and doers were{" "}
                    <span className="bg-pink-200 px-2 rounded">
                        changing
                    </span>

                    <br />

                    the{" "}
                    <span className="bg-green-200 px-2 rounded">
                        status
                    </span>{" "}
                    Quo with
                </h1>

                <p className="text-gray-500 mt-8 max-w-2xl mx-auto leading-7">
                    We are a team of designers, developers, communicators and
                    innovators working together to build meaningful digital
                    experiences.
                </p>

            </div>

            {/* Profile Images */}

            <div className="mt-16 flex flex-wrap justify-center gap-6">

                {people.map((person) => (
                    <img
                        key={person.id}
                        src={person.image}
                        alt="team"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg hover:scale-105 duration-300"
                    />
                ))}

            </div>

        </section>
    );
};

export default Hero;