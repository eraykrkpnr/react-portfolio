// windows/GalleryWindow.js
import React, { useState, useEffect } from "react";

function GalleryWindow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");

    // Sample gallery images - bunları kendi resimlerinizle değiştirebilirsiniz
    const images = [
        {
            id: 1,
            title: "Project 1",
            description: "Modern Web Design",
            url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        },
        {
            id: 2,
            title: "Project 2",
            description: "Mobile App Interface",
            url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Dashboard Design",
            url: "https://images.unsplash.com/photo-1554224311-beee415c201f?w=600&h=400&fit=crop",
        },
        {
            id: 4,
            title: "Project 4",
            description: "UI Components",
            url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
        },
        {
            id: 5,
            title: "Project 5",
            description: "Brand Identity",
            url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        },
    ];

    // Preload all images
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image.url;
        });
    }, [images]);

    const nextImage = () => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setDirection("left");
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const currentImage = images[currentIndex];

    return (
        <div className="space-y-4 flex flex-col h-full overflow-hidden">

            {/* Image Display with Animation */}
            <div className="relative flex-1 bg-gray-800 rounded-lg overflow-hidden min-h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        key={currentIndex}
                        src={currentImage.url}
                        alt={currentImage.title}
                        className={`w-full h-full object-cover transition-all duration-500 transform ${
                            direction === "right"
                                ? "animate-slideInRight"
                                : "animate-slideInLeft"
                        }`}
                    />
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10 transition-all"
                >
                    ❮
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10 transition-all"
                >
                    ❯
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 bg-black/70 px-3 py-1 rounded-full text-xs text-white">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Image Info */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-yellow-300">
                    {currentImage.title}
                </h3>
                <p className="text-base text-gray-400">{currentImage.description}</p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto overflow-y-hidden pb-2 flex-shrink-0">
                {images.map((img, idx) => (
                    <button
                        key={img.id}
                        onClick={() => {
                            setDirection(idx > currentIndex ? "right" : "left");
                            setCurrentIndex(idx);
                        }}
                        className={`flex-shrink-0 w-12 h-12 rounded border-2 transition-all ${
                            idx === currentIndex
                                ? "border-yellow-500 scale-110"
                                : "border-gray-600 hover:border-yellow-400 opacity-70 hover:opacity-100"
                        }`}
                    >
                        <img
                            src={img.url}
                            alt={img.title}
                            className="w-full h-full object-cover rounded"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GalleryWindow;
