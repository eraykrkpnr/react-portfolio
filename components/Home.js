// Home.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
import LoadingScreen from "./LoadingScreen";
import Desktop from "./Desktop";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
