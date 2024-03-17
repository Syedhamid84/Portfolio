import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import backgroundimage from '../src/Assets/images/background1.jpg';
import Topbar from './Pages/Topbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Work from './Pages/Work';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Footer from './Pages/Footer';
import Experience from './Pages/Experience';
import Design from "./Components/design";

function App() {
  return (

    <div

      className="">
              {/* <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div> */}
      <Topbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />



    </div>

    // <Router>
    //   <Topbar />
    //   <Routes>
    //     <Route path="/" exact component={<Home />} />
    //     <Route path="/about" component={<About />} />
    //     <Route path="/skills" component={Skills} />
    //     <Route path="/education" component={Education} />
    //     <Route path="/work" component={Work} />
    //     <Route path="/experience" component={Experience} />
    //     <Route path="/contact" component={Contact} />
    //   </Routes>
    // </Router>
  );
}

export default App;
