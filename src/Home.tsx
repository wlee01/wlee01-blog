import React from "react";
import "./Home.css";

// Define the type for Bitcoin objects
interface Bitcoin {
    id: number;
    left: number;
    delay: number;
    duration: number;
}

// Define the type for Home props
interface HomeProps {
    bitcoins: Bitcoin[];
}

const Home: React.FC<HomeProps> = ({ bitcoins }) => {
    return (
        <div className="home-container">
            <h1 className="glitzy-title">Welcome to My Blog 🚀</h1>
            <p className="subtitle">Exploring the world of cryptocurrency, technology, and personal growth.</p>

            {/* Falling Bitcoin Animation */}
            {bitcoins.map(({ id, left, delay, duration }: Bitcoin) => (
                <img
                    key={id}
                    src={`${process.env.PUBLIC_URL}/bitcoin-logo.png`}
                    className="falling-bitcoin"
                    style={{
                        left: `${left}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                    }}
                    alt="Bitcoin"
                />
            ))}
        </div>
    );
};

export default Home;