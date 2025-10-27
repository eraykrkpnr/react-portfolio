// WindowManager.js
import React, { useRef, useState } from "react";
import AboutMeWindow from "./windows/AboutMeWindow";
import ServicesWindow from "./windows/ServicesWindow";
import PortfolioWindow from "./windows/PortfolioWindow";
import ContactWindow from "./windows/ContactWindow";
import GalleryWindow from "./windows/GalleryWindow";

function WindowManager({ window, onClose, onBringToFront, pointer }) {
    const windowRef = useRef(null);
    const dragStateRef = useRef({ isDragging: false, startX: 0, startY: 0 });
    const [position, setPosition] = useState({
        x: window.defaultX || 300,
        y: window.defaultY || 150,
    });
    const [size, setSize] = useState({
        width: 600,
        height: 500,
    });
    const [isResizing, setIsResizing] = useState(false);
    const [resizeType, setResizeType] = useState("");

    const handleMouseDown = (e) => {
        if (e.target.closest(".window-content")) return;

        onBringToFront();
        dragStateRef.current = {
            isDragging: true,
            startX: e.clientX - position.x,
            startY: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e) => {
        if (dragStateRef.current.isDragging) {
            requestAnimationFrame(() => {
                setPosition({
                    x: e.clientX - dragStateRef.current.startX,
                    y: e.clientY - dragStateRef.current.startY,
                });
            });
        }

        if (isResizing) {
            const deltaX = e.clientX - (position.x + size.width);
            const deltaY = e.clientY - (position.y + size.height);

            if (resizeType === "se") {
                setSize({
                    width: Math.max(300, size.width + deltaX),
                    height: Math.max(300, size.height + deltaY),
                });
            }
        }
    };

    const handleMouseUp = () => {
        dragStateRef.current.isDragging = false;
        setIsResizing(false);
    };

    const windowContent = () => {
        switch (window.id) {
            case "about":
                return <AboutMeWindow />;
            case "services":
                return <ServicesWindow />;
            case "portfolio":
                return <PortfolioWindow />;
            case "gallery":
                return <GalleryWindow />;
            case "contact":
                return <ContactWindow />;
            default:
                return null;
        }
    };

    if (window.isMinimized) {
        return null;
    }

    return (
        <div
            ref={windowRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="fixed pointer-events-auto will-change-transform animate-windowOpen"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`,
                zIndex: window.zIndex,
                transform: "translate3d(0, 0, 0)",
            }}
        >
            {/* Window Container */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col h-screen max-h-96">
                {/* Title Bar */}
                <div
                    onMouseDown={handleMouseDown}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 px-4 py-3 flex items-center justify-between cursor-move select-none"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">{window.icon}</span>
                        <span className="text-white font-semibold">{window.label}</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-500 transition-colors font-bold text-lg w-7 h-7 flex items-center justify-center"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="window-content flex-1 overflow-y-auto bg-gray-950 p-6">
                    {windowContent()}
                </div>

                {/* Resize Handle */}
                <div
                    onMouseDown={() => {
                        setIsResizing(true);
                        setResizeType("se");
                    }}
                    className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tl from-purple-500 to-transparent cursor-se-resize"
                    title="Drag to resize"
                />
            </div>
        </div>
    );
}

export default WindowManager;
