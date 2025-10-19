import './App.css'
import { Route, Routes, Link } from 'react-router';
import headerLogo from "../../assets/images/notelogo.png"
import headerWrittenLogo from "../../assets/images/notetypelogo.png"
import AboutPage from "../AboutPage/AboutPage.jsx"
import HomePage from "../HomePage/HomePage.jsx"

function App() {
  return (<>
      <header>
        <div className="header-logo-container">
          <a href="/">
            <img id="header-img" src={headerLogo} alt="The notes Logo" />
            <img id="header-txtimg" src={headerWrittenLogo} alt="The notes Logo" />
            
          </a>
        </div>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </main>
    </>);
}

export default App;