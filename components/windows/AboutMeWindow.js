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
                    Hi! I&apos;m a passionate developer focused on creating beautiful,
                    functional digital experiences. I specialize in modern web
                    technologies and design patterns.
                </p>

                <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "Node.js",
                            "MongoDB",
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
                        Background
                    </h3>
                    <p>
                        With 5+ years of experience in web development, I&apos;ve worked on
                        diverse projects ranging from startups to established companies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMeWindow;
