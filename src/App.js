import './App.css';

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

function App() {
  return (
      <> 
      <Topbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      </>
    );
}

export default App;
