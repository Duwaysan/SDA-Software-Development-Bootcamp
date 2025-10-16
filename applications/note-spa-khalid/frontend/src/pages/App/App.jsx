import './App.css'
import { Route, Routes, Link } from 'react-router';

function App() {
  return (<>
      <header>
        <div className="header-logo-container">
          <a href="/">
            <img src="" alt="The Cat Collector Logo" />
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
          <Route path="/*" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About Page</h2>} />
        </Routes>
      </main>
    </>);
}

export default App;