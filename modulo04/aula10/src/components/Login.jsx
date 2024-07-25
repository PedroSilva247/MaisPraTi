import { useState } from "react";
import styled from 'styled-components'



const Container = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
width: 70%;
background-color: #9cdaa4;
border-radius: 10px;
padding: 20px;
font-size: 17px;
margin: 0 auto;
font-family: 'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif;
gap: 10px;
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 15px 0;



`
const ContainerInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;




`
const Input = styled.input`
width: 60%;
padding: 5px;
padding-left: 10px;
border-radius: 10px;
font-size: 15px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif;
border: none;

`
const Button = styled.button`
width: 100px;
cursor: pointer;
border-radius: 10px;
font-size: 15px;
background-color: yellowgreen;
border: none;
box-shadow: 0px 0px 10px #00000053;
font-family: 'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif;
margin: 0 auto;
margin-top: 20px;
padding: 5px;
`

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


    const hendleSubmit = () => {
        event.preventDefault()
        if(email == 'pedro@gmail.com' && password == '12345678') {
            alert('Entrou!')
            props.log(true)
        } else {
            alert('Tente novamente!')
            setPassword('')
            props.log(false)
        }
    }

    return (
        <Container onSubmit={hendleSubmit}>
            <Title>Login</Title>
            <ContainerInput>Email: <Input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/></ContainerInput>
            <ContainerInput>Password: <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></ContainerInput>

            <Button type="submit">Enter</Button>
            
        </Container>
    )
    
}

export default Login