import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="terminal-nav">
      <div className="nav-brand">$ cd ~/justin-portfolio</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">$cd ~/home</Link>
        <Link to="/" className="nav-link">projects.txt</Link>
        <Link to="/" className="nav-link">experience.txt</Link>
      </div>
    </nav>
  );
}