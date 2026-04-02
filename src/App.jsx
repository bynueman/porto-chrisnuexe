import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Hero />
        <Projects />
        <Gallery />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;