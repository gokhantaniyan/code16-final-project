import { createContext } from "react";
import useTheme from "../customHooks/useTheme";


const ThemeContext = createContext()

function ThemeContextProvider({children}) {
 const [theme, handleTheme] = useTheme()

 const context = {
    theme: theme,
    handleTheme: handleTheme
 }
 return (
  <>
    <ThemeContext.Provider value={context}>
        <div className={`app-background-${theme}`}>
          {children}
        </div>
    </ThemeContext.Provider>
  </>
 )
 
}

export {ThemeContext, ThemeContextProvider};