 import "./index.css"
import Navbar from "./components/navbar.js"
import Body from "./components/body.js"
import About from "./components/about.js"
import Project from "./components/project.js"
import React, { useEffect } from 'react';
import { motion, useScroll } from "framer-motion";
 
function App() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    document.title = "Sukhad's Website";
  }, []);
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
