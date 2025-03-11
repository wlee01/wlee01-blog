import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Sidebar styles

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/">🏠 Home</Link></li>
                <li><Link to="/about">📘 About Me</Link></li>
                <li><Link to="/learned">📖 What I Learned</Link></li>
                <li><Link to="/future">🚀 Future Plans</Link></li>
                <li><Link to="/ethereum-vs-solana">⚖️ Ethereum vs Solana</Link></li> {/* ✅ New Tab Added */}
            </ul>
        </nav>
    );
};

export default Sidebar;