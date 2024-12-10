import * as React from "react";
// Uncomment and use this if you plan to implement media queries
// import { useMediaQuery } from "@uidotdev/usehooks";

export default function About() {
    // Example: Condition to check if it's mobile or desktop
    // const isMobile = useMediaQuery({ query: '(max-width: 650px)' });

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
    );
}
