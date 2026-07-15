import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutOne from "./Components/AboutOne";
import AboutTwo from "./Components/AboutTwo";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">

      <Navbar />

      <Hero />

      <AboutOne />

      <AboutTwo />

      <Services />

      <Testimonial />

      <Newsletter />

      <Footer />

    </div>
  );
}

export default App;