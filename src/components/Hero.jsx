export default function Hero() {
    return (
      <section className="terminal-hero" id="home">
        <div className="container">
          <div className="glowing-text">
            <img className ="my-face" src="/logos/myface.jpeg" alt="Justin Yeo"/>
            <h1 className="hero-title">&gt; hi im justin</h1>
            <h2 className="hero-subtitle">{/* Y3 NUS Computer Science */}Y3 NUS Computer Science</h2>
            <p className="hero-description">const bio = `Full-stack Developer passionate about Parallel Computing and Database Systems`;</p>
          </div>
        </div>
      </section>
    );
  }