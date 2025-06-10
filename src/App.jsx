import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { projects, experience } from './data';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="terminal-theme">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects projects={projects} />
                <Experience experience={experience} />
                <Skills />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;