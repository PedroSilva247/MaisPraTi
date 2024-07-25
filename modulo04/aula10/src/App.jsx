import './App.css'
import LanguageTranslator from './components/LanguageTranslator'
import QRCodeGenerator from './components/QRCodeGenerator'
import SearchIpAddress from './components/SearchIpAddress'
import Login from './components/Login'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [isLogged, log] = useState(false)

  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/Login' element={<Login log={log}/>}/>
          <Route path='/SearchIpAddress' element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <SearchIpAddress/>
            </ProtectedRoute>
          }/>
          <Route path='/QRCodeGenerator' element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <QRCodeGenerator/>
            </ProtectedRoute>
          }/>
          <Route path='/LanguageTranslator' element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <LanguageTranslator/>
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
