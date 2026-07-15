import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutOne from "./components/AboutOne";
import AboutTwo from "./components/AboutTwo";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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