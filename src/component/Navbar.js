import {HashLink as Link} from "react-router-hash-link";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState (false);
  const showNavItem = () => {
      setShow(!show);      
  };
    return (
    <> 
    <nav className="hide-item navbar navbar-expand-lg fixed-top">
    <div className="sidebar container">
    <Link className="navbar-brand logo" to="#home"><span className="border border-1 border-white p-1"><span className="bg-blue text-white">RIDOY</span> <span className="nav-shop">MONDOL</span></span></Link>
      <div className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="link" aria-current="page" to="#home" smooth>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="#about" smooth>About</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="#services" smooth>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="#skills" smooth>Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="#projects" smooth>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="#contact" smooth>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="#faq" smooth>FAQ</Link>
        </li>
      </div>
  
    <div className="navbar-nav">
      <Link className="nav-btn text-decoration-none" to ="#contact">Hire Me</Link>
    </div>
    </div>
  </nav>

  <div className="mobile-sidebar">
      <div className={`sidebar ${show ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="close-button" onClick={showNavItem}>
          <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
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
          <Link className="link" to="#contact" smooth>Contact</Link>
        </li>
        <li>
          <Link className="link" to="#faq" smooth>FAQ</Link>
        </li>
        </ul>


      </div>
      <div className="content my-auto">
        <button className="menu-button" onClick={showNavItem}>
        <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {show && <div className="backdrop" onClick={showNavItem}></div>}

    <Link className="navbar-brand py-2 logo-mobile logo my-auto overflow-hidden" to="#home"><span className="xxx border border-1 border-white p-2 ms- my-auto"><span className="bg-blue text-white">RIDOY</span> <span className="nav-shop">MONDOL</span></span></Link>

    </div>
  </>
    )
}
export default Navbar;
