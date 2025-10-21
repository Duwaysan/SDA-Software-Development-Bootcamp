import './App.css'
import { Route, Routes, Link } from 'react-router';
import headerLogo from "../../assets/images/notelogo.png"
import headerWrittenLogo from "../../assets/images/notetypelogo.png"
import AboutPage from "../AboutPage/AboutPage.jsx"
import HomePage from "../HomePage/HomePage.jsx"
import NoteIndexPage from '../NoteIndexPage/NoteIndexPage.jsx';
import { useLocation, Navigate } from 'react-router';
import NoteDetailPage from '../NoteDetailPage/NoteDetailPage.jsx';
import NoteFormPage from '../NoteFormPage/NoteFormPage.jsx';

function App() {
  const location = useLocation()
  
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
            <li><Link to="/notes">All Notes</Link></li>
            <li><Link to="/notes/new">Create Notes</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/home"                       element={<HomePage />}/>
          <Route path="/about"                      element={<AboutPage />} />
          <Route path="/notes"                      element={<NoteIndexPage />} />
          <Route path="/notes/:id"                  element={ <NoteDetailPage/>}/>
          <Route path="/*"                          element={ <Navigate to="/home"/>}/>
          <Route path="/notes/new"                  element={<NoteFormPage  createNote={true}/>}/>
          <Route path="/notes/edit/:id"              element={<NoteFormPage editNote={true}   />}/>
          <Route path="/notes/confirm_delete/:id"    element={<NoteFormPage deleteNote={true} />}/>
          
      </Routes>
      </main>
    </>);
}

export default App;