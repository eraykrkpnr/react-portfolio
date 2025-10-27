// Home.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
import LoadingScreen from "./LoadingScreen";
import Desktop from "./Desktop";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Preload gallery images
        const galleryImages = [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1554224311-beee415c201f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
        ];

        galleryImages.forEach((url) => {
            const img = new Image();
            img.src = url;
        });

        // Her sayfaya girildiğinde yükleme ekranını göster
        setIsLoading(true);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="dark font-Coolvetica">
            <Head>
                <title>Kray - Portfolio OS</title>
                <meta name="description" content="Kray Portfolio Operating System" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gray-900 h-screen w-screen overflow-hidden">
                {isLoading ? (
                    <LoadingScreen onLoadingComplete={handleLoadingComplete} />
                ) : (
                    <Desktop />
                )}
            </main>
        </div>
    );
}

export default Home;
