const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition duration-300">

            <div className="text-5xl mb-6">
                {icon}
            </div>

            <h3 className="text-2xl font-semibold">
                {title}
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
                {description}
            </p>

            <button className="mt-6 font-medium border-b border-black hover:text-gray-500 transition">
                Read More →
            </button>

        </div>
    );
};

export default ServiceCard;