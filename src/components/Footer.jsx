export default function Footer() {
  return (
    <footer className="terminal-footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">Connect with me :)</p>
          <div className="social-links">
            <a
              href="https://github.com/Justin-Yeo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              &gt; github
            </a>
            <a
              href="https://linkedin.com/in/justin-yeo-jun-chen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              &gt; linkedin
            </a>
            <a href="justinyeojc@u.nus.edu" className="social-link">
              &gt; email
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          &gt; console.log("© 2023 Your Name. All rights reserved.");
        </p>
      </div>
    </footer>
  );
}
