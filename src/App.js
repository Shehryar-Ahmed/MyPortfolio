import { useContext } from "react";
import Navbar from "./Components/Navbar";
import ContStates from "./Context/contStates";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Alertt from "./Components/Alert";

function App() {
  return (
    <ContStates>
      <div
        className="App"
        style={{
          fontFamily: "Poppins",
        }}
      >
        <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <Navbar />
          <Alertt />
        </div>
        <div>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </ContStates>
  );
}

export default App;
