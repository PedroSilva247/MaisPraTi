import Home from "./components/Home"
import Login from "./components/Login"
import Navigation from "./components/Navigation"
import ProtectedRoute from "./components/ProtectedRoute"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route 
            path="/Home"
            element={
              <ProtectedRoute isLoggedIn={false}>
                <Home/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
