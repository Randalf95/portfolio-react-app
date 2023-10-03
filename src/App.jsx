import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About />
      <Skills className="space-after" />
      <Work className="space-after" />
      <Contact /> 
    </div>
  );
}
//////////