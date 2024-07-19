import "./App.css";

import Topbar from "./Pages/Topbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Footer from "./Pages/Footer";
import Experience from "./Pages/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticlesComponent from "./Components/config/particles_config";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhatsAppIcon from "../src/Assets/images/whatsapp.svg";

function App() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const itemVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div>
      <Topbar />
      <Home />
      <ParticlesComponent id="particles" className="h-screen" />

      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <div className="h-16 w-16 flex justify-center border border-white items-center fixed bottom-4 left-4 rounded-full bg-[#05011f] [#ffae02]  group hover:border-[#ffae02] animate-bounce	">
        <a href="https://wa.link/yp6v57">
          <img
            src={WhatsAppIcon}
            alt=""
            className="text-lg text-[#FFFFFF] group-hover:text-[#ffae02] h-full w-full "
          />
        </a>
      </div>

      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="flex justify-center items-center h-9 w-9 bg-yellow-400 rounded-full fixed bottom-8 right-8">
              <span>
                <FontAwesomeIcon icon={faAngleUp} className="text-black" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
