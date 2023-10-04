import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Details from "./pages/Details";

import header from './images/bg.png'




function App() {


  return (
    <>
      <header>
        <div className="container-logo">
          <Link to='/home'><img src={header} alt="logo" /></Link>
          <Link to='/home'> <h1>DiegoDev</h1></Link>
        </div>
        <nav>
          <li ><Link className="menu-links" to="/home">Home</Link></li>
          <li ><Link className="menu-links" to="/about">About</Link></li>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>


    </>
  )
}

export default App
