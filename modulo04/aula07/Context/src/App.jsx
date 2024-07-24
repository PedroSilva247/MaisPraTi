// import {MyProvider} from './components/Contexto'
// import MyChildren from './components/Filho'
import './App.css'
import { useState, createContext, useContext } from "react"

const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}})

function App() {

    const [ theme, setTheme ] = useState('light')

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme == 'light' ? 'dark' : 'light')
    }

    return (
        <>
            {/* <MyProvider>
                <MyChildren/>
            </MyProvider> */}

            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div>
                    <Toolbar/>
                    <button onClick={toggleTheme}>Trocar tema</button>
                </div>
            </ThemeContext.Provider>

        </>
    )
}

function Toolbar() {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            Tema utilizado - {theme}
        </div>
    )
}

export default App