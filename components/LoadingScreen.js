// LoadingScreen.js
import React, { useEffect, useState } from "react";

function LoadingScreen({ onLoadingComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setTimeout(() => onLoadingComplete(), 500);
                    return 100;
                }
                return prev + Math.random() * 30;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            {/* Logo/Title */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    KRAY OS
                </h1>
                <p className="text-gray-400 text-sm">Portfolio Operating System v1.0</p>
            </div>

            {/* Loading Animation */}
            <div className="mb-8 w-48">
                <div className="relative h-2 bg-gray-800 rounded overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded transition-all duration-300"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">
                    {Math.min(Math.floor(progress), 100)}%
                </p>
            </div>

            {/* System Messages */}
            <div className="text-gray-500 text-xs space-y-1 mt-8 w-80">
                <p>► Initializing system...</p>
                <p>► Loading portfolio modules...</p>
                <p>► Configuring desktop environment...</p>
                <p>► Preparing presentation layers...</p>
            </div>
        </div>
    );
}

export default LoadingScreen;
