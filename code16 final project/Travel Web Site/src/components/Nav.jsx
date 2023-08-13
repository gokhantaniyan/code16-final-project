import { useState } from "react";
import { NavLink } from "react-router-dom"
import NavItem from "./NavItem";

function Nav(props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleDropdown = () => {
      setIsExpanded(!isExpanded)
   }


    return (
      <>
       <div className={`collapse ${isExpanded ? 'show' : ''}`} id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-dark p-4">
          <NavLink className="nav-link" to="/" style={{color: "white"}}>Home</NavLink>
          <NavLink className="nav-link" to="/About" style={{color: "white"}}>About</NavLink>
          <NavLink className="nav-link" to="/Contact" style={{color: "white"}}>Contact</NavLink>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <div className="container">
          <NavLink to="/">
            <img src="./src/Images/Logo-3 1.svg" alt="Logo" />
          </NavLink>
          <div className="d-flex justify-content-end">
            <NavItem />
            <NavLink to="/BookNow">
              <button className="btn btn-lg ms-3 me-3" type="button" style={{ backgroundColor: '#219EBC', color: 'white' }}>
                Book now
              </button>
            </NavLink>
            <button style={{ border: 'none' }} className="navbar-toggler" type="button" onClick={toggleDropdown}
              aria-controls="navbarToggleExternalContent" aria-expanded={isExpanded} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Nav;