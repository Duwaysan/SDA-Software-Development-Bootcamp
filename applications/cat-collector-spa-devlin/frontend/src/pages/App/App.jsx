import './App.css'
import { Routes, Route, Link } from 'react-router';
import { useLocation, Navigate } from 'react-router';
import HeaderLogo from "../../assets/images/header-logo.svg"
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import CatIndexPage from '../CatIndexPage/CatIndexPage';
import CatDetailPage from '../CatDetailPage/CatDetailPage';
import CatFormPage from '../CatFormPage/CatFormPage';

function App() {
  const location = useLocation();

  const routes = ["about", "cats", "home"]
  const mainCSS = routes.filter(r => location.pathname.includes(r) ? r : "").join(" ")

  return (<>
    <header>
      <div className={`${mainCSS} header-logo-container`}>
        <Link to="/"><img src={HeaderLogo} alt="The Cat Collector Logo" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cats">All Cats</Link></li>
          <li><Link to="/cats/new">Create New Cat</Link></li>
        </ul>
      </nav>
    </header>
    <main className={mainCSS}>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cats" element={<CatIndexPage />} />
        <Route path="/cats/new" element={<CatFormPage createCat={true} />} />
        <Route path="/cats/edit/:id"           element={<CatFormPage editCat={true}   />}/>
        <Route path="/cats/confirm_delete/:id" element={<CatFormPage deleteCat={true} />}/>
        <Route path="/cats/:catId" element={<CatDetailPage />} />
        <Route path="/*" element={<Navigate to="/home"/>}/>
      </Routes>
    </main>
  </>)
}

export default App
