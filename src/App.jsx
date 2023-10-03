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
      <Skills style={{ marginBottom: "100px" }} /> {/* Añade margen inferior a Skills */}
      <Work style={{ marginBottom: "100px" }} /> {/* Añade margen inferior a Work */}
      <Contact style={{ marginBottom: "100px" }} /> {/* Añade margen inferior a Contact */}
    </div>
  );
}
//////////