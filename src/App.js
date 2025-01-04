 import "./index.css"
import Navbar from "./components/navbar.js"
import Body from "./components/body.js"
import About from "./components/about.js"
import Project from "./components/project.js"
import React, { useState,useEffect } from 'react';
import { motion, useScroll } from "framer-motion";
import ProgressBar from "./components/loader.js"
 
function App() {
  const { scrollYProgress } = useScroll();
  

//random change to
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100); // Adjust the interval for desired speed

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-black-100">
        <div className="w-1/2">
          <ProgressBar progress={progress} />
          <div className="text-center mt-2 text-green-500 font-semibold">
            {progress}% Loaded
          </div>
        </div>
      </div>
     
      ) : (
        <div>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <main>
            <motion.div style={{ scaleX: scrollYProgress }} />
            <Navbar />
            <Body />
            <About />
            <Project />
          </main>
        </div>
      )}
    </>
  );
}


export default App;
