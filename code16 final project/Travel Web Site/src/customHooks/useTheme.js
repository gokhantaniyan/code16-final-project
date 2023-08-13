import { useState } from "react";


function useTheme(){
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ||
        document.documentElement.dataset.bsTheme ||
        "dark"
    )

    function handleTheme(){
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.dataset.bsTheme = newTheme
    }

    return [theme, handleTheme]
}

export default useTheme;