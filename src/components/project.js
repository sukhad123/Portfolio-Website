import React from 'react';
import projectsData from '../data/project.json'; // Import the JSON file

export default function Project() {
    return (
        <div id ="projects" className="p-4 bg-white rounded-lg shadow-md" style={{ backgroundColor: '#D7D3BF' }}>
            <h1 className="text-xl font-semibold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-bold mb-2">{project.name}</h2>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
