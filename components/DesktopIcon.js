// DesktopIcon.js
import React, { useState } from "react";

function DesktopIcon({ item, onDoubleClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onDoubleClick={onDoubleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col items-center gap-2 cursor-pointer group select-none"
        >
            {/* Icon */}
            <div
                className={`
                w-20 h-20 rounded-lg flex items-center justify-center text-4xl
                transition-all duration-200 transform
                ${
                    isHovered
                        ? "scale-110 bg-gradient-to-br shadow-lg shadow-purple-500/50"
                        : "bg-gradient-to-br opacity-90 hover:opacity-100"
                }
                ${item.color}
                backdrop-blur-sm border border-white/10
            `}
            >
                {item.icon}
            </div>

            {/* Label */}
            <label
                className={`
                text-center text-xs font-medium px-2 py-1 rounded
                transition-all duration-200
                ${
                    isHovered
                        ? "bg-gray-800/80 text-white"
                        : "text-gray-300 bg-gray-900/50"
                }
                max-w-[100px] text-ellipsis overflow-hidden whitespace-nowrap
            `}
            >
                {item.label}
            </label>
        </div>
    );
}

export default DesktopIcon;
