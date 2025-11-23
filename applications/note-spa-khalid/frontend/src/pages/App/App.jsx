import Navbar from '../../components/NavBar/NavBar.jsx';
import NoteFormPage from '../NoteFormPage/NoteFormPage.jsx';
import NoteDetailPage from '../NoteDetailPage/NoteDetailPage.jsx';
import AboutPage from "../AboutPage/AboutPage.jsx"
import HomePage from "../HomePage/HomePage.jsx"
import NoteIndexPage from '../NoteIndexPage/NoteIndexPage.jsx';
import CategoryFormPage from '../CategoryFormPage/CategoryFormPage.jsx';
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage.jsx';
import SignupPage from '../SignupPage/SignupPage.jsx';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage.jsx';
import './styles.css'
import { Route, Routes, Link } from 'react-router';
import { useLocation, Navigate } from 'react-router';
import { useState, useEffect} from 'react';
import { getUser } from '../../utilities/users-api.js';

import headerLogo from "../../assets/images/notelogo.png"
import headerWrittenLogo from "../../assets/images/notetypelogo.png"

function App() {
  const location = useLocation()
  const [user, setUser] = useState(null)

   useEffect(() => {
    async function checkUser() {
      const foundUser = await getUser();
      setUser(foundUser)
    }
    checkUser()
  }, [])
  
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
      <Navbar user={user} setUser={setUser} />
    </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {user ? <>
          <Route path="/*"                                     element={<Navigate to="/home"/>}/>
          <Route path="/home"                                  element={<HomePage user={user} setUser={setUser} />}/>
          <Route path="/about"                                 element={<AboutPage />} />
          <Route path="/notes"                                 element={<NoteIndexPage />} />
          <Route path="/notes/:id"                             element={<NoteDetailPage/>}/>
          <Route path="/notes/new"                             element={<NoteFormPage  createNote={true}/>}/>
          <Route path="/notes/edit/:id"                        element={<NoteFormPage editNote={true}   />}/>
          <Route path="/notes/confirm_delete/:id"              element={<NoteFormPage deleteNote={true} />}/>
          <Route path="/categories/:id"                        element={<CategoryDetailPage/>} />
          <Route path="/categories"                            element={<CategoryIndexPage />} />
          <Route path="/categories/new"                        element={<CategoryFormPage  createCategory={true} />} />
          <Route path="/categories/edit/:id"                   element={<CategoryFormPage  editCategory={true}/>} />
          <Route path="/categories/confirm_delete/:id"         element={<CategoryFormPage  deleteCategory={true}/>} />
          </>
          : 
          <>
          <Route path="/*"                                     element={<Navigate to="/home"/>}/>
          <Route path="/home"                                  element={<HomePage user={user} setUser={setUser}/>}/>
          <Route path="/about"                                 element={<AboutPage />} />
          <Route path="/signup"                                element={<SignupPage user={user} setUser={setUser} />}/>
          </>}
      </Routes>
      </main>
    </>);
}

export default App;