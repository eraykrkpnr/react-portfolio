// windows/AboutMeWindow.js
import React from "react";

function AboutMeWindow() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
            </h2>

            <div className="space-y-3 text-gray-300">
                <p>
                    Software Engineer with 5 years of experience in backend and full-stack development using C#, .NET, Python and JavaScript. Recently focused on game development with Unity, gaining hands-on experience in building multiplayer systems, client-host communication, and gameplay logic. Strong understanding of object-oriented programming, async workflows, and clean architecture.
                </p>

                <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "C#",
                            ".NET",
                            "Python",
                            "JavaScript",
                            "Unity",
                            "Backend",
                            "OOP",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-cyan-900/30 border border-cyan-700 rounded-full text-cyan-300 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                        Game Development Background
                    </h3>
                    <p>
                        Recently focused on game development with Unity, gaining hands-on experience in multiplayer systems using Netcode for GameObjects, integrating Steamworks with Facepunch, and applying asynchronous programming with UniTask. Experienced in using Zenject for dependency injection and Stateless for state machine management, building maintainable and flexible gameplay logic. Passionate about applying solid software engineering principles to create engaging and high-quality game experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMeWindow;
