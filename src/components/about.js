import * as React from "react";
// Uncomment and use this if you plan to implement media queries
// import { useMediaQuery } from "@uidotdev/usehooks";
import { useMediaQuery } from 'react-responsive';
 
import Skill from "./skill.js"
const ProgrammingLanguage =["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" ]
const development = ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"]

const Database = ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" ];
const Tools =["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"  ]
export default function About() {
    // Example: Condition to check if it's mobile or desktop
    // const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
    return (
        <div id ="aboutt" className = "mainBody1">
            <h1 >About Me</h1>
            <div className ="flex flex-row">
                
                <div className = "basis-1/2 grow ">
                    <p className= "pField">
                        I am a passionate software developer with expertise in full-stack development using React, Node.js, and Next.js. 
                        Currently pursuing an Advanced diploma in Computer Programming & Analysis at Seneca Polytechnic, I enjoy building robust systems, exploring new tools, and tackling challenges through hackathons.
                   
                    
                        Skilled in Java and modern web technologies, I’m driven to create impactful solutions and continuously learn in the ever evolving tech landscape.
                    
                    </p>
                   
                </div>
            </div>

            <div className={isMobile ? 'flex flex-col' : 'flex flex-row space-x-5'}>
                <div className="basis-1/2 padding ">
            <h1 className = "headerTopGap">Education</h1>
            <div className ="color flex flex-row">
                
                <div className = "basis-1/2 grow ">
                  
                        <div className= " flex justify-between items-end">
                    <span><b>Seneca Polytechnic</b></span>
                    <span className="ml-">2022- 2025</span> 
                    </div>
                    Advanced Diploma in Computer Programming and Analysis
                    <br/>
                </div>
            </div>
            </div>
            <div className="basis-1/2 padding ">
            <h1 className = "headerTopGap">Work Experience</h1>
            <div className ="color flex flex-row">
                
                <div className = "basis-1/2 grow ">
                        <div className= " flex justify-between items-end">
                    <span><b>Software Developer,</b></span>
                    <span className="ml-">2024 - Present</span> 
                    </div>
                    Empowered Futures
                    <br/>
                    <ul className="custom-list">
                 <li>Developed and optimized back-end applications for Empowered Futures.</li>
                <li>Collaborated with developers and participated in code reviews to enhance quality standards.</li>
               <li>Resolved application bugs and issues through effective troubleshooting techniques.</li>
            </ul>

                </div>
                </div>
            </div>
        </div>
 
        <div className="flex flex-col md:flex-row">
            <div className={` designSkill w-full ${isMobile ? 'md:basis-1/2' : 'md:basis-1/4'} p-4 bg-white text-gray-800 rounded-lg shadow-lg`} style={{ backgroundColor: '#D7D3BF' }}>
                <h1 className="text-xl font-semibold mb-4">Languages</h1>
                <div className="grid grid-cols-2 gap-4">
                    {ProgrammingLanguage.map((language, index) => (
                        <div key={index} className="flex justify-center items-center border border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition bg-gray-100 text-gray-700">
                            <Skill images={language} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`designSkill w-full ${isMobile ? 'md:basis-1/2' : 'md:basis-1/4'} p-4 bg-white text-gray-800 rounded-lg shadow-lg`} style={{ backgroundColor: '#D7D3BF' }}>
                <h1 className="text-xl font-semibold mb-4">Development</h1>
                <div className="grid grid-cols-2 gap-4">
                    {development.map((language, index) => (
                        <div key={index} className="flex justify-center items-center border border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition bg-gray-100 text-gray-700">
                            <Skill images={language} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`designSkill w-full ${isMobile ? 'md:basis-1/2' : 'md:basis-1/4'} p-4 bg-white text-gray-800 rounded-lg shadow-lg`} style={{ backgroundColor: '#D7D3BF' }}>
                <h1 className="text-xl font-semibold mb-4">Database</h1>
                <div className="grid grid-cols-2 gap-4">
                    {Database.map((language, index) => (
                        <div key={index} className="flex justify-center items-center border border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition bg-gray-100 text-gray-700">
                            <Skill images={language} />
                        </div>
                    ))}
                </div>
            </div>

            
            <div className={` designSkill w-full ${isMobile ? 'md:basis-1/2' : 'md:basis-1/4'} p-4 bg-white text-gray-800 rounded-lg shadow-lg`} style={{ backgroundColor: '#D7D3BF' }}>
                <h1 className="text-xl font-semibold mb-4">Tools</h1>
                <div className="grid grid-cols-2 gap-4">
                    {Tools.map((language, index) => (
                        <div key={index} className="flex justify-center items-center border border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition bg-gray-100 text-gray-700">
                            <Skill images={language} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}
