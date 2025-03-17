import React, { useEffect } from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
    useEffect(() => {
        const createRaindrop = () => {
            const raindrop = document.createElement("div");
            raindrop.classList.add("raindrop");

            // Container width & side area
            const containerWidth = document.querySelector(".about-container")?.clientWidth || 0;
            const sideRainArea = 50;

            // Random side: -1 for left, 1 for right
            const side = Math.random() < 0.5 ? -1 : 1;

            let leftPosition: number;
            if (side === -1) {
                // Left side
                leftPosition = Math.random() * sideRainArea;
            } else {
                // Right side
                leftPosition = containerWidth - sideRainArea + Math.random() * sideRainArea;
            }
            raindrop.style.left = `${leftPosition}px`;

            // Make raindrops fall for 1~3s randomly
            const randomDuration = Math.random() * 2 + 1; // 1~3 seconds
            raindrop.style.animationDuration = `${randomDuration}s`;

            // Append to container
            document.querySelector(".about-container")?.appendChild(raindrop);

            // Remove DOM after max possible animation + buffer
            setTimeout(() => {
                raindrop.remove();
            }, (randomDuration + 0.5) * 1000);
        };

        // Create multiple raindrops at intervals
        const interval = setInterval(() => {
            createRaindrop();
            createRaindrop(); // 2 at a time
        }, 80); // 0.08s interval

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-container">
            {/* ☁️ Floating Cloud Elements */}
            <img src={`${process.env.PUBLIC_URL}/images/cloud.png`} className="cloud cloud-1" alt="Cloud" />
            <img src={`${process.env.PUBLIC_URL}/images/cloud.png`} className="cloud cloud-2" alt="Cloud" />
            <img src={`${process.env.PUBLIC_URL}/images/cloud.png`} className="cloud cloud-3" alt="Cloud" />
            <img src={`${process.env.PUBLIC_URL}/images/cloud.png`} className="cloud cloud-4" alt="Cloud" />
            <img src={`${process.env.PUBLIC_URL}/images/cloud.png`} className="cloud cloud-5" alt="Cloud" />

            <section className="about-section">
                <h1 className="about-title">📘 About Me</h1>
                <p>
                    <strong>Hello!</strong> My name is <strong>Wonjae</strong>, and this blog is where I document my{" "}
                    <strong>past, present, and future journey</strong> in cryptocurrency.
                </p>
                <p>
                    I am deeply curious about the <strong>fundamentals of transactions</strong>—why certain assets gain favor in the market,
                    whether due to their <strong>intrinsic functional value</strong> or propelled by <strong>external forces</strong>
                    such as <strong>social trends, engineered narratives, or insider influence</strong>.
                </p>
                <p>
                    I’m particularly interested in how people <strong>allocate capital based on convictions and beliefs</strong>,
                    how they <strong>front-run markets for alpha</strong>, and how they{" "}
                    <strong>identify inefficiencies to capitalize on market volatility</strong>. To supplement my understanding,
                    I am currently learning the <strong>basics of full-stack development</strong> at{" "}
                    <strong>Rocket Boost Bootcamp</strong> to enhance my <strong>technical foundation</strong>.
                </p>

                {/* 🔥 Optimized Section Titles */}
                <h2 className="orange-text">🔍 My Primary Interests</h2>
                <ul className="orange-list">
                    <li>🏗 The <strong>inner workings</strong> of foundational networks – Layer 1</li>
                    <li>🎭 The <strong>ponzinomics</strong> of memecoins & speculative assets</li>
                </ul>

                <h2 className="orange-text">🚀 At Rocket Boost Bootcamp</h2>
                <p>
                    I am eager to <strong>deep-dive into the structural mechanics of Layer 1 networks</strong>,
                    understand <strong>how they generate fees from a technical perspective</strong>,
                    and gain the ability to <strong>develop and deploy decentralized applications (dApps) on Ethereum</strong>.
                </p>
            </section>
        </div>
    );
};

export default AboutMe;