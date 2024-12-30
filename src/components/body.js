import { motion } from "framer-motion";
import 'animate.css'
export default function Body(){
 

return<div className = "mainBody border-none">
       
    <div className = "content grid justify-items-center">
    <motion.div
      className="box"
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity, 
        repeatDelay: 1
      }}
    >
         <img  className = " animate__animated animate__backInDown image"src="/images/programmer.png" alt="Logo" /> 
        </motion.div>
        <h1 className = "animate__animated animate__backInDown bodyH1" >Hi, there!</h1>
        <p className ="animate__animated animate__backInDown text-center pSmall  ">My name is Sukhad, I am a Software Developer</p>
        <div className = "flex justify-center  ">
        <a href="https://www.linkedin.com/in/sukhad-adhikari/" target="_blank" rel="noopener noreferrer">
         
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="animate__animated animate__backInLeft customBtn focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">LinkedIn</motion.button>
        </a>
        <a href="https://github.com/sukhad123?tab=overview&from=2023-12-01&to=2023-12-31" target="_blank" rel="noopener noreferrer">
        <motion.button
        whileHover={{ scale: 2}}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="   customBtn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">GitHub</motion.button>
             </a>
        </div>
    </div>
</div>
}
