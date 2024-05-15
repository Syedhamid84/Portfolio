import "./App.css";

// import backgroundimage from '../src/Assets/images/background1.jpg';
import Topbar from "./Pages/Topbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
// import Skills from "./Pages/Skills";
// import Education from "./Pages/Education";
import Footer from "./Pages/Footer";
// import MobileNavbar from "./Pages/Mobilenavbar";
// import Experience from "./Pages/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <Topbar />
      <Home />
      <About />
      {/* <Skills /> */}
      {/* <Education /> */}
      <Work />
      {/* <Experience /> */}
      <Contact />
      <Footer />
      {/* <MobileNavbar/> */}
      <div className="h-14 w-14 flex justify-center border border-white items-center fixed bottom-4 right-4 rounded-full bg-[#05011f] [#ffae02]  group hover:border-[#ffae02] animate-bounce	">
        <a href="https://wa.link/yp6v57">
          <FontAwesomeIcon
            icon={faCommentDots}
            className="text-lg text-[#FFFFFF] group-hover:text-[#ffae02] h-6 w-6 "
          />
        </a>
      </div>
    </div>
  );
}

export default App;
