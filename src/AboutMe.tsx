import React from "react";
import "./PageStyles.css";

const AboutMe: React.FC = () => {
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
                <p><strong>Hello!</strong> My name is <strong>Wonjae</strong>, and this blog is where I document my <strong>past, present, and future journey</strong> in cryptocurrency.</p>
                <p>I am deeply curious about the <strong>fundamentals of transactions</strong>—why certain assets gain favor in the market, whether due to their <strong>intrinsic functional value</strong> or propelled by <strong>external forces</strong> such as <strong>social trends, engineered narratives, or insider influence</strong>.</p>
                <p>I’m particularly interested in how people <strong>allocate capital based on convictions and beliefs</strong>, how they <strong>front-run markets for alpha</strong>, and how they <strong>identify inefficiencies to capitalize on market volatility</strong>. To supplement my understanding, I am currently learning the <strong>basics of full-stack development</strong> at <strong>Rocket Boost Bootcamp</strong> to enhance my <strong>technical foundation</strong>.</p>

                {/* 🔥 Optimized Section Titles */}
                <h2 className="orange-text">🔍 My Primary Interests</h2>
                <ul className="orange-list">
                    <li>🏗 The <strong>inner workings</strong> of foundational networks – Layer 1</li>
                    <li>🎭 The <strong>ponzinomics</strong> of memecoins & speculative assets</li>
                </ul>

                <h2 className="orange-text">🚀 At Rocket Boost Bootcamp</h2>
                <p>I am eager to <strong>deep-dive into the structural mechanics of Layer 1 networks</strong>, understand <strong>how they generate fees from a technical perspective</strong>, and gain the ability to <strong>develop and deploy decentralized applications (dApps) on Ethereum</strong>.</p>
            </section>
        </div>
    );
};

export default AboutMe;