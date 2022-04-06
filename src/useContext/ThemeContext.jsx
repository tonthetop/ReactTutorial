import { useState, createContext } from "react";
const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [toggled, setToggled] = useState(false);

    function toggleTheme() {
        setToggled(!toggled)
    }


    const value = {
        toggled, toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}
export { ThemeContext, ThemeProvider}