import './App.css'

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">My Portfolio</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Hello, I'm Rohan Sirsat</h2>
        <p>Final Year IT Student | Data Analyst</p>
        <a href="#contact" className="hire-btn">Hire Me</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a final year IT student who enjoys working with data and
          building web projects.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>
          <a
            href="https://audix-sound.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Audix - Beyond the Beats
          </a>
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Email:{' '}
          <a href="mailto:Rohan0807@gmail.com">Rohan0807@gmail.com</a>
        </p>
      </section>
    </div>
  )
}

export default App