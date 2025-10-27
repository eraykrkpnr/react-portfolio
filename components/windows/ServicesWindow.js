// windows/ServicesWindow.js
import React from "react";

function ServicesWindow() {
    const services = [
        {
            icon: "🎨",
            title: "UI/UX Design",
            description: "Beautiful, user-centered designs that convert",
        },
        {
            icon: "⚛️",
            title: "Frontend Development",
            description: "React, Vue, and modern JavaScript frameworks",
        },
        {
            icon: "🔧",
            title: "Backend Development",
            description: "Robust APIs and database architecture",
        },
        {
            icon: "📱",
            title: "Responsive Design",
            description: "Mobile-first approach for all projects",
        },
        {
            icon: "⚡",
            title: "Performance Optimization",
            description: "Lightning-fast loading times and smooth interactions",
        },
        {
            icon: "🚀",
            title: "Deployment & DevOps",
            description: "CI/CD pipelines and cloud infrastructure setup",
        },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg hover:border-purple-500/50 transition-colors"
                    >
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <h3 className="font-semibold text-purple-300">{service.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesWindow;
