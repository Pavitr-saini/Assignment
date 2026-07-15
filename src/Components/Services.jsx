import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const serviceData = [
    {
        id: 1,
        title: "UI/UX Design",
        description:
            "We design beautiful, user-friendly interfaces that create a great user experience across all devices.",
    },
    {
        id: 2,
        title: "Development",
        description:
            "Modern websites and web applications built using the latest technologies with performance in mind.",
    },
    {
        id: 3,
        title: "Marketing",
        description:
            "Helping brands reach more customers through creative digital marketing strategies.",
    },
    {
        id: 4,
        title: "Branding",
        description:
            "Creating strong brand identities that help businesses stand out from competitors.",
    },
];

const Services = () => {
    const [active, setActive] = useState(1);

    return (
        <section className="px-6 md:px-12 lg:px-20 py-24">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left */}

                <div>

                    <p className="uppercase tracking-[4px] text-gray-500 mb-4">
                        What We Do
                    </p>

                    <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Services
                    </h2>

                </div>

                {/* Right */}

                <div>

                    {serviceData.map((item) => (

                        <div
                            key={item.id}
                            className="border-b py-6 cursor-pointer"
                            onClick={() => setActive(item.id)}
                        >

                            <div className="flex justify-between items-center">

                                <h3 className="text-2xl font-medium">
                                    {item.title}
                                </h3>

                                <FaArrowRight
                                    className={`transition duration-300 ${active === item.id ? "rotate-90" : ""
                                        }`}
                                />

                            </div>

                            {active === item.id && (

                                <p className="text-gray-500 mt-5 leading-7">
                                    {item.description}
                                </p>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Services;