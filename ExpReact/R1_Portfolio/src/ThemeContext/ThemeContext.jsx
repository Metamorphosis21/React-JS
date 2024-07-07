import React from 'react'
import { createContext,useContext,useEffect,useState } from 'react'

const ThemeContext = createContext()

export const usetheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(
        () =>localStorage.getItem('theme') ||'light'
    )

    useEffect( () => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme',theme)
    }, [theme])

    const toggleTheme = () => {
        console.log("Theme Switched");
        setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'))
    }

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}