import './App.css'
import ContainerLogin from './components/ContainerLogin'
import styled from "styled-components"
import backgroundLogin from "./assets/images/background-netflix.jpg"

const LoginPage = styled.div`
  
`

function App() {
  return (
    <LoginPage className='login-page'>
      <ContainerLogin/>
    </LoginPage>
  )
}

export default App
