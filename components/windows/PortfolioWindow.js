// windows/PortfolioWindow.js
import React from "react";

function PortfolioWindow() {
    const projects = [
        {
            name: "E-Commerce Platform",
            tech: "React, Node.js, MongoDB",
            description: "Full-stack e-commerce solution with payment integration",
        },
        {
            name: "Real-time Chat App",
            tech: "Next.js, Socket.io, PostgreSQL",
            description: "Chat application with real-time notifications",
        },
        {
            name: "Analytics Dashboard",
            tech: "React, D3.js, TypeScript",
            description: "Interactive data visualization and analytics platform",
        },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Portfolio
            </h2>

            <div className="space-y-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-3 bg-green-900/20 border border-green-700/30 rounded-lg hover:border-green-500/50 transition-colors"
                    >
                        <h3 className="font-semibold text-green-300 text-base">{project.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            {project.description}
                        </p>
                        <p className="text-sm text-green-500/70 mt-2">{project.tech}</p>
                    </div>
                ))}
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all">
                View All Projects
            </button>
        </div>
    );
}

export default PortfolioWindow;
