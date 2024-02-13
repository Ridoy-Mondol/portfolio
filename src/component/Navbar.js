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
      <div className="sidebar container-fluid">
    <div className="ms-auto align-start brand-align">
    <Link className="nav-brand" to="#home">RIDOY</Link>
    </div>
      <div className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link exact activeClassName="active-page" className="link" aria-current="page" to="#home" smooth>Home</Link>
        </li>
        <li className="nav-item">
          <Link exact activeClassName="active-page" className="link" to="#about" smooth>About</Link>
        </li>
        <li className="nav-item">
          <Link exact activeClassName="active-page" className="link" to="#services" smooth>Services</Link>
        </li>
        <li className="nav-item">
          <Link exact activeClassName="active-page" className="link" to="#skills" smooth>Skills</Link>
        </li>
        <li className="nav-item">
          <Link exact activeClassName="active-page" className="link" to="#portfolio" smooth>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link exact activeClassName="active-page" className="link" to="#contact" smooth>Contact</Link>
        </li>
      </div>
  
    <div className="navbar-nav me-auto">
      <Link className="nav-btn text-decoration-none" to ="#contact">Hire Me</Link>
    </div>
    </div>
  </nav>

  <div className="mobile-sidebar">
      <div className={`sidebar ${show ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="close-button" onClick={showNavItem}>
          <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="sidebar-menu">
          <li><Link exact activeClassName="active-page" className="link" aria-current="page" to="#home" smooth>Home</Link></li>
          <li><Link exact activeClassName="active-page" className="link" aria-current="page" to="#about" smooth>About</Link></li>
        <li>
          <Link exact activeClassName="active-page" className="link" to="#services" smooth>Services</Link>
        </li>
        <li>
          <Link exact activeClassName="active-page" className="link" to="#skills" smooth>Skills</Link>
        </li>
        <li>
          <Link exact activeClassName="active-page" className="link" to="#portfolio" smooth>Portfolio</Link>
        </li>
        <li>
          <Link exact activeClassName="active-page" className="link" to="#contact" smooth>Contact</Link>
        </li>
        </ul>


      </div>
      <div className="content my-auto">
        <button className="menu-button" onClick={showNavItem}>
        <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      {show && <div className="backdrop" onClick={showNavItem}></div>}

      <div className="ms-auto my-auto align-start brand-align">
    <Link className="nav-brand" to="#home">RIDOY</Link>
    </div>

    </div>
  </>
    )
}
export default Navbar;
