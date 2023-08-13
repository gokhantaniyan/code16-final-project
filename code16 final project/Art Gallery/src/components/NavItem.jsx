import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function NavItem(props) {
 const {theme, handleTheme} = useContext(ThemeContext)
 
 return (
  <>
    <button className="btn" style={{background: "#F8F4ED"}} onClick={handleTheme}>
        {theme} Theme
    </button>
  </>
 )
}

export default NavItem;