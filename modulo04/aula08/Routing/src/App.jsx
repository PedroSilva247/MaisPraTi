import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Router>
        <Navigation/> 
        <Routes>
          {/* <Route path='/' Component={Home}/>
          <Route path='/About' Component={About}/>
          <Route path='/Contact' Component={Contact}/> */}
          
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
