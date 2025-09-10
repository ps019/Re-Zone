import { useEffect, useRef, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { Home } from "./contents/Home.jsx";
import { Course } from "./contents/Course.jsx";
import { Contact } from "./contents/Contact.jsx";
import Fix from './course/Fix.jsx';
import Face from './course/face.jsx';
import { IntroBODY } from './course/components/Body-CH/Body-Introduction.jsx';
import './DStyle.css';
import './LStyle.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState('Closed');
  const location = useLocation();
  const NavBar = useRef();

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const isCoursePage = location.pathname.startsWith("/Course");

  const mobile = useMediaQuery({ maxWidth: 767 });
  const computer = useMediaQuery({  minWidth: 1367 });
  const laptop = useMediaQuery({ minWidth: 768, maxWidth: 1366 })

  return (
    <div>

      {mobile && (
        <div className="Mobile">
          <header className="Main-Header">
            <div className="Title-Wrapper">
              <h1 className="Nav-Title roast-logo">
                <span className="char">R</span>
                <span className="char">e</span>
                <span className="char">-</span>
                <span className="char">Z</span>
                <span className="char">o</span>
                <span className="char">n</span>
                <span className="char">e</span>
              </h1>
            </div>

            {/* Hamburger button */}
            <button
              className={`Hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Mobile Nav */}
            <nav className={`Main-Nav ${open ? "show" : ""}`} ref={NavBar}>
              <NavLink className="Contents" to="/" onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink className="Contents" to="/Course" onClick={() => setOpen(false)}>Course</NavLink>
              <a className="Contents" href="/#contact" onClick={() => setOpen(false)}>Contact Us</a>
              <button
                className="ThemeToggleBtn"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
              </button>
            </nav>
          </header>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Course" element={<Course />}>
              <Route path="Weak-Areas" element={<Face theme={theme} />} />
              <Route path="Improve" element={<Fix theme={theme} />} >
                  <Route path="body-intro" element={<IntroBODY />} /> 
                </Route>
            </Route>
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          {!isCoursePage && (
            <section style={{ height: "100vh" }}>
              <h1>Welcome to Home</h1>
            </section>
          )}

          {/* Footer */}
          <footer> <div className='all-Fotter'> <section id="contact"> <h2>Contact Us</h2> <p>This is the Contact section.</p> </section> <section id="FAO"> <h2>FAOs</h2> <ul> <li>Instagram: <a href='https://www.instagram.com/rezonelife'>Click</a></li> <li>E-mail: rezonelife@gmail.com</li> </ul> </section> </div> </footer>
        </div>
      )}


    {laptop && 
    <div className='Laptop'>
      <header className="Main-Header">
        <div className="Title-Wrapper">
          <h1 className="Nav-Title roast-logo">
            <span className="char">R</span><span className="char">e</span><span className="char">-</span>
            <span className="char">Z</span><span className="char">o</span>
            <span className="char">n</span><span className="char">e</span>
          </h1>
        </div>
        <nav className='Main-Nav'>
          <NavLink className="Contents" to="/">Home</NavLink>
          <NavLink className="Contents" to="/Course">Course</NavLink>
          <a className="Contents" href="/#contact">Contact Us</a>
          <button
            className="ThemeToggleBtn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />}>
          <Route path="Weak-Areas" element={<Face theme={theme} />} />
          <Route path="Improve" element={<Fix theme={theme} />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {!isCoursePage && (
        <section style={{ height: '100vh' }}>
          <h1>Welcome to Home</h1>
        </section>
      )}

      <footer>
        <div className='all-Fotter'>
          <section id="contact">
            <h2>Contact Us</h2>
            <p>This is the Contact section.</p>
          </section>
          <section id="FAO">
            <h2>FAOs</h2>
            <ul>
              <li>Instagram: <a href='https://www.instagram.com/rezonelife'>Click</a></li>
              <li>E-mail: rezonelife@gmail.com</li>
            </ul>
          </section>
        </div>
      </footer>
      </div>}


      {computer && <div className="Computer">
        <header className="Main-Header">
        <div className="Title-Wrapper">
          <h1 className="Nav-Title roast-logo">
            <span className="char">R</span><span className="char">e</span><span className="char">-</span>
            <span className="char">Z</span><span className="char">o</span>
            <span className="char">n</span><span className="char">e</span>
          </h1>
        </div>
        <nav className='Main-Nav'>
          <NavLink className="Contents" to="/">Home</NavLink>
          <NavLink className="Contents" to="/Course">Course</NavLink>
          <a className="Contents" href="/#contact">Contact Us</a>
          <button
            className="ThemeToggleBtn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Course/Improve" element={<Fix theme={theme} />} />
        <Route path="/Course/Improve/body-intro" element={<IntroBODY />} /> 
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {!isCoursePage && (
        <section style={{ height: '100vh' }}>
          <h1>Welcome to Home</h1>
        </section>
      )}

      <footer>
        <div className='all-Fotter'>
          <section id="contact">
            <h2>Contact Us</h2>
            <p>This is the Contact section.</p>
          </section>
          <section id="FAO">
            <h2>FAOs</h2>
            <ul>
              <li>Instagram: <a href='https://www.instagram.com/rezonelife'>Click</a></li>
              <li>E-mail: rezonelife@gmail.com</li>
            </ul>
          </section>
        </div>
      </footer>
      </div>}
    </div>
  );
}

export default App;
