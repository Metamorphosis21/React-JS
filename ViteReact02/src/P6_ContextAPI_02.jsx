import React, { useEffect, useState } from "react"
import { ThemeProvider } from "./Context/ThemeContext_02"
import ThemeButton from "./Components/ThemeButton_06"
import ThemeCard from "./Components/ThemeCard_06"


// theme Switcher
export default function P6_ContextAPI_02() {
  const [theme, setTheme] = useState("light")

  const lightTheme = () => {
    setTheme("light")   
  }
  const darkTheme = () => {
    setTheme("dark")   
  }

  // how to change theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }
  ,[theme])

  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeCard/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
