// windows/ServicesWindow.js
import React from "react";

function ServicesWindow() {
    const skills = [
        {
            category: "Languages",
            items: ["C#", "Python", "JavaScript", "TypeScript"],
            icon: "💻",
        },
        {
            category: "Backend & Frameworks",
            items: [".NET", "Node.js", "REST APIs", "SQL"],
            icon: "⚙️",
        },
        {
            category: "Game Development",
            items: ["Unity", "Netcode for GameObjects", "Zenject", "UniTask"],
            icon: "🎮",
        },
        {
            category: "Tools & Patterns",
            items: ["Zenject", "Stateless", "OOP", "Clean Architecture"],
            icon: "🛠️",
        },
        {
            category: "Frontend",
            items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
            icon: "⚛️",
        },
        {
            category: "Development Approach",
            items: ["Full-stack", "Backend Specialist", "Multiplayer Systems", "Client-Host Communication"],
            icon: "🚀",
        },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Technologies
            </h2>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {skills.map((skillGroup, index) => (
                    <div
                        key={index}
                        className="p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg hover:border-purple-500/50 transition-colors"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{skillGroup.icon}</span>
                            <h3 className="font-semibold text-purple-300 text-base">{skillGroup.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 bg-purple-800/30 border border-purple-600/50 rounded text-sm text-purple-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesWindow;
