import {HashLink as Link} from "react-router-hash-link";
import { useState } from "react";
import { useMode } from "./context";
const Navbar = () => {
  const [show, setShow] = useState (false);
  const showNavItem = () => {
      setShow(!show);      
  };

  const {toggleMode, mode} = useMode ();
    return (
    <> 
    <nav className={`hide-item navbar navbar-expand-lg fixed-top ${mode ? "light-bg" : ""}`}>
    <div className="sidebar container">
    <Link className="navbar-brand logo" to="#home"><span className={`p-1 ${mode ? "border-black" : "white-border"}`}><span className="bg-blue text-white">RIDOY</span> <span className="nav-shop">MONDOL</span></span></Link>
      <div className="navbar-nav mx-aut mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} aria-current="page" to="#home" smooth>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} to="#about" smooth>About</Link>
        </li>
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} to="#services" smooth>Services</Link>
        </li>
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} to="#skills" smooth>Skills</Link>
        </li>
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} to="#projects" smooth>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} to="#faq" smooth>FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className={`link ${mode ? "dark" : ""}`} to="#contact" smooth>Contact</Link>
        </li>
      </div>

      <div className={`navbar-nav toggle-btn text-white ${mode ? "toggle-btn-light" : ""}`} onClick={toggleMode}>
      <i className={`uil ${mode ? "uil-sun" : "uil-moon"}`}></i>
    </div>
  
    <div className="navbar-nav">
      <Link className={`nav-btn text-decoration-none ${mode ? "dark-btn" : ""}`} to ="#contact">Hire Me</Link>
    </div>
    </div>
  </nav>

  <div className={`mobile-sidebar ${mode ? "light" : ""}`}>
      <div className={`sidebar ${show ? 'active' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between">
          <div>
          <button className="close-button" onClick={showNavItem}>
          <i className="fa-solid fa-xmark"></i>
          </button>
          </div>

          <div>
          <button className="close-button toggle-mobile" onClick={toggleMode}>
          <i className={`uil ${mode ? "uil-sun" : "uil-moon"}`}></i> 
          </button>
          </div>

        </div>
        <ul className="sidebar-menu">
          <li className="home-link">
            <Link className="link" aria-current="page" to="#home" smooth>Home</Link>
          </li>
          <li>
            <Link className="link" aria-current="page" to="#about" smooth>About</Link>
          </li>
        <li>
          <Link className="link" to="#services" smooth>Services</Link>
        </li>
        <li>
          <Link className="link" to="#skills" smooth>Skills</Link>
        </li>
        <li>
          <Link className="link" to="#projects" smooth>Projects</Link>
        </li>
        <li>
          <Link className="link" to="#faq" smooth>FAQ</Link>
        </li>
        <li>
          <Link className="link" to="#contact" smooth>Contact</Link>
        </li>
        </ul>


      </div>
      <div className="content my-auto">
        <button className={`menu-button ${mode ? "light-bg menu-btn-light" : ""}`} onClick={showNavItem}>
        <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {show && <div className="backdrop" onClick={showNavItem}></div>}

    <Link className="navbar-brand py-2 logo-mobile logo my-auto overflow-hidden" to="#home"><span className={`xxx border border-1 border-white logo-padding my-auto ${mode ? "border-black" : ""}`}><span className="bg-blue text-white">RIDOY</span> <span className="nav-shop">MONDOL</span></span></Link>

    </div>
  </>
    )
}
export default Navbar;