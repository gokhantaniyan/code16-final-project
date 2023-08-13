import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavItem(props) {
 const {theme, handleTheme} = useContext(ThemeContext)
 return (
  <>
    <button className="btn btn-light" onClick={handleTheme}>
        {theme} Theme
    </button>
  </>
 )
}

export default NavItem;