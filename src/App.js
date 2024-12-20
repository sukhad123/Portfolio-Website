 import "./index.css"
import Navbar from "./components/navbar.js"
import Body from "./components/body.js"
import About from "./components/about.js"
import Project from "./components/project.js"
 
import { motion, useScroll } from "framer-motion";
 
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    <main>
      <motion.div style={{ scaleX: scrollYProgress }} />

      <Navbar />
      <Body />
      <About />
      <Project/>
    </main>
    </>
  
  );
}

export default App;
