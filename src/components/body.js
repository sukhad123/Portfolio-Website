 
export default function Body(){
 

return<div className = "mainBody">
    <div className = "content grid justify-items-center">
        <div>
         <img  className = "image"src="/images/programmer.png" alt="Logo" /> 
        </div>
        <h1 className = "bodyH1" >Hi, there!</h1>
        <p className ="text-center pSmall  ">My name is Sukhad, I am a aspiring Software Developer</p>
        <div className = "flex justify-center  ">
        <a href="https://www.linkedin.com/in/sukhad-adhikari/" target="_blank" rel="noopener noreferrer">
        <button    type="button" className=" customBtn focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">LinkedIn</button>
        </a>
        <a href="https://github.com/sukhad123?tab=overview&from=2023-12-01&to=2023-12-31" target="_blank" rel="noopener noreferrer">
             <button type="button" className="customBtn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">GitHub</button>
             </a>
        </div>
    </div>
</div>
}
