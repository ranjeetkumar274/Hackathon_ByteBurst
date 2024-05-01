import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Services from "./Services";
import Registration from "./Registration";
import Goodies from "./Goodies";
import About from "./About";
import Contact from "./Contact"
//import Gallery from "./Gallery";
//import Footer from "./Footer";

const Name = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Services />
            <Registration />
            <Goodies />
            <About />
            {/* <Gallery/> */}
            <Contact/>
            <Footer />
            
        </div>
    )
}
export default Name;