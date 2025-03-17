import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/">🏠 Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/learned">What I Learned</Link></li>
                <li><Link to="/future">Future Plans</Link></li>
                <li><Link to="/ethereum-vs-solana">Ethereum vs Solana</Link></li>
                <li><Link to="/token-economy">Token Economy: Compound</Link></li>
                {/* New link for Wallet */}
                <li><Link to="/wallet">💼 Wallet</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;