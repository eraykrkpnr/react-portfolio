// Desktop.js
import React, { useState } from "react";
import WindowManager from "./WindowManager";
import DesktopIcon from "./DesktopIcon";

function Desktop() {
    const [windows, setWindows] = useState([]);

    const desktopItems = [
        {
            id: "about",
            label: "About Me",
            icon: "👤",
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: "services",
            label: "Services",
            icon: "⚙️",
            color: "from-purple-500 to-pink-500",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            icon: "💼",
            color: "from-green-500 to-emerald-500",
        },
        {
            id: "gallery",
            label: "Gallery",
            icon: "🖼️",
            color: "from-yellow-500 to-orange-500",
        },
        {
            id: "contact",
            label: "Contact",
            icon: "📧",
            color: "from-orange-500 to-red-500",
        },
    ];

    const openWindow = (item) => {
        // Check if window already exists
        if (windows.find((w) => w.id === item.id)) {
            return;
        }

        const newWindow = {
            id: item.id,
            label: item.label,
            icon: item.icon,
            color: item.color,
            zIndex: Math.max(...windows.map((w) => w.zIndex), 0) + 1,
            isMinimized: false,
            defaultX: typeof window !== 'undefined' ? window.innerWidth / 2 - 300 : 0,
            defaultY: typeof window !== 'undefined' ? window.innerHeight / 2 - 250 : 0,
        };

        setWindows([...windows, newWindow]);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter((w) => w.id !== id));
    };

    const bringToFront = (id) => {
        setWindows(
            windows.map((w) =>
                w.id === id
                    ? { ...w, zIndex: Math.max(...windows.map((w) => w.zIndex), 0) + 1 }
                    : w
            )
        );
    };

    const toggleMinimize = (id) => {
        setWindows(
            windows.map((w) =>
                w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
            )
        );
    };

    return (
        <div className="dark w-full h-screen bg-black overflow-hidden">
            {/* Desktop Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-black opacity-80" />

            {/* Desktop Grid Icons */}
            <div className="relative z-10 p-8 flex flex-col gap-6 w-fit">
                {desktopItems.map((item) => (
                    <DesktopIcon
                        key={item.id}
                        item={item}
                        onDoubleClick={() => openWindow(item)}
                    />
                ))}
            </div>

            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-4 py-2 flex items-center gap-2 z-40">
                <span className="text-gray-400 text-xs">Active Windows:</span>
                {windows.map((w) => (
                    <button
                        key={w.id}
                        onClick={() => toggleMinimize(w.id)}
                        className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded border border-gray-600 transition-colors"
                    >
                        {w.isMinimized ? `📦 ${w.label}` : `${w.icon} ${w.label}`}
                    </button>
                ))}
            </div>

            {/* Windows */}
            <div className="absolute inset-0 pointer-events-none">
                {windows.map((window) => (
                    <WindowManager
                        key={window.id}
                        window={window}
                        onClose={() => closeWindow(window.id)}
                        onBringToFront={() => bringToFront(window.id)}
                        pointer
                    />
                ))}
            </div>
        </div>
    );
}

export default Desktop;
