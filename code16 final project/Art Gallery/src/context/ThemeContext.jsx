import { createContext } from "react";
import useTheme from "../customHooks/useThem";

const ThemeContext = createContext()

function ThemeContextProvider({children}) {
 const [theme, handleTheme] = useTheme()

 const context = {
    theme: theme,
    handleTheme: handleTheme
 }

 return <ThemeContext.Provider value={context}>
    {children}
 </ThemeContext.Provider>
}

export {ThemeContext, ThemeContextProvider}