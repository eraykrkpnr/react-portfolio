// windows/SnakeWindow.js
import React, { useState, useEffect, useRef } from "react";

function SnakeWindow() {
    const GRID_WIDTH = 20;
    const GRID_HEIGHT = 15;
    const CELL_SIZE = 20;

    const [snake, setSnake] = useState([
        { x: 10, y: 7 },
        { x: 9, y: 7 },
        { x: 8, y: 7 },
    ]);
    const [food, setFood] = useState({ x: 15, y: 7 });
    const [direction, setDirection] = useState({ x: 1, y: 0 });
    const [nextDirection, setNextDirection] = useState({ x: 1, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const gameLoopRef = useRef(null);
    const keysRef = useRef({});

    // Generate random food position
    const generateFood = () => {
        let newFood;
        let isOnSnake = true;
        while (isOnSnake) {
            newFood = {
                x: Math.floor(Math.random() * GRID_WIDTH),
                y: Math.floor(Math.random() * GRID_HEIGHT),
            };
            isOnSnake = snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y);
        }
        return newFood;
    };

    // Handle keyboard input
    useEffect(() => {
        const handleKeyDown = (e) => {
            keysRef.current[e.key.toLowerCase()] = true;

            // Arrow keys
            if (e.key === "ArrowUp" && direction.y === 0) setNextDirection({ x: 0, y: -1 });
            if (e.key === "ArrowDown" && direction.y === 0) setNextDirection({ x: 0, y: 1 });
            if (e.key === "ArrowLeft" && direction.x === 0) setNextDirection({ x: -1, y: 0 });
            if (e.key === "ArrowRight" && direction.x === 0) setNextDirection({ x: 1, y: 0 });

            // WASD keys
            if ((e.key === "w" || e.key === "W") && direction.y === 0) setNextDirection({ x: 0, y: -1 });
            if ((e.key === "s" || e.key === "S") && direction.y === 0) setNextDirection({ x: 0, y: 1 });
            if ((e.key === "a" || e.key === "A") && direction.x === 0) setNextDirection({ x: -1, y: 0 });
            if ((e.key === "d" || e.key === "D") && direction.x === 0) setNextDirection({ x: 1, y: 0 });
        };

        const handleKeyUp = (e) => {
            keysRef.current[e.key.toLowerCase()] = false;
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [direction]);

    // Game loop
    useEffect(() => {
        if (gameOver) return;

        gameLoopRef.current = setInterval(() => {
            setSnake((prevSnake) => {
                setDirection(nextDirection);

                const head = prevSnake[0];
                const newHead = {
                    x: head.x + nextDirection.x,
                    y: head.y + nextDirection.y,
                };

                // Check wall collision
                if (newHead.x < 0 || newHead.x >= GRID_WIDTH || newHead.y < 0 || newHead.y >= GRID_HEIGHT) {
                    setGameOver(true);
                    return prevSnake;
                }

                // Check self collision
                if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
                    setGameOver(true);
                    return prevSnake;
                }

                let newSnake = [newHead, ...prevSnake];

                // Check food collision
                if (newHead.x === food.x && newHead.y === food.y) {
                    setScore((prev) => prev + 10);
                    setFood(generateFood());
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        }, 150);

        return () => clearInterval(gameLoopRef.current);
    }, [gameOver, food, nextDirection]);

    const resetGame = () => {
        setSnake([
            { x: 10, y: 7 },
            { x: 9, y: 7 },
            { x: 8, y: 7 },
        ]);
        setFood({ x: 15, y: 7 });
        setDirection({ x: 1, y: 0 });
        setNextDirection({ x: 1, y: 0 });
        setGameOver(false);
        setScore(0);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-green-400 mb-2">🐍 SNAKE</h2>
                <p className="text-base text-gray-300">Score: {score}</p>
            </div>

            {/* Game Grid */}
            <div
                className="bg-black border-4 border-green-400 relative"
                style={{
                    width: GRID_WIDTH * CELL_SIZE,
                    height: GRID_HEIGHT * CELL_SIZE,
                    position: "relative",
                }}
            >
                {/* Food */}
                <div
                    style={{
                        position: "absolute",
                        left: food.x * CELL_SIZE,
                        top: food.y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        backgroundColor: "#ef4444",
                        borderRadius: "2px",
                    }}
                />

                {/* Snake */}
                {snake.map((segment, index) => (
                    <div
                        key={index}
                        className={`absolute ${index === 0 ? "bg-lime-400" : "bg-lime-500"}`}
                        style={{
                            left: segment.x * CELL_SIZE,
                            top: segment.y * CELL_SIZE,
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            border: "1px solid #00aa00",
                        }}
                    />
                ))}
            </div>

            {/* Game Over Screen */}
            {gameOver && (
                <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-red-500">GAME OVER!</p>
                    <p className="text-base text-gray-300">Final Score: {score}</p>
                    <button
                        onClick={resetGame}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded text-base transition-colors"
                    >
                        Play Again
                    </button>
                </div>
            )}

            {/* Controls */}
            {!gameOver && (
                <div className="text-center text-sm text-gray-400">
                    <p>Use ARROW KEYS or WASD to move</p>
                </div>
            )}
        </div>
    );
}

export default SnakeWindow;
