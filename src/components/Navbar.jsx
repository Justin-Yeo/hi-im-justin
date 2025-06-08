export default function Navbar() {
  return (
    <nav className="terminal-nav">
      <div className="nav-brand">$ cd ~/justin-portfolio</div>
      <div className="nav-links">
        <a href="/#projects" className="nav-link">projects</a>
        <a href="/#experience" className="nav-link">experience</a>
        <a href="/#skills" className="nav-link">skills</a>
      </div>
    </nav>
  );
}