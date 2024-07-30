import styled from "styled-components"
import '..//App.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #000000b0;
    padding: 35px 70px;
    margin: 0 auto;
    border-radius: 4px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
`
const Title = styled.h2`

`
const Input = styled.input`
    background-color: #101010c1;
    border: 1px solid #5E5E5F;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    color: #fff;
`
const Entrar = styled.button`
    background-color: #E50914;
    border: none;
    border-radius: 5px;
    padding: 9px;
    font-size: 16px;
`
const Ou = styled.p`
    margin: 0 auto;
    font-size: 16px;
    color: #ffffffB3;
    margin-block: 10px;
`
const Esqueceu = styled.a`
    margin: 0 auto;
    margin-block: 15px;
    cursor: pointer;
`
const Lembre = styled.label`
    
`
const CheckBox = styled.input`
    width: 15px;

    cursor: pointer;
`

const Desc = styled.p`
    font-size: 13px;
    color: #8C8C8C;
`
const A = styled.a`
    font-size: 13px;
    color: #0071EB;
`
const Novo = styled.p`
    font-size: 16px;
    color: #ffffffB3;
`
const Assine = styled.a`
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
`

function ContainerLogin() {
    return (
        <Container className="font">
            <Title>Entrar</Title>
            <Form className="font">
                <Input 
                type="text"
                placeholder="Email ou número de celular"/>
                
                <Input 
                type="password"
                placeholder="Senha"/>
                
                <Entrar type="submit">Entrar</Entrar>
            </Form>
            <Ou>OU</Ou>

            <button type="" className="button">Usar um código de acesso</button>

            <Esqueceu>Esqueceu a senha?</Esqueceu>

            <Lembre className="reset"><CheckBox className="reset" type="checkbox" name="" id="" />Lembre-se de mim</Lembre>
            <Novo>Novo por aqui? <Assine href="">Assine agora</Assine>.</Novo>

            <Desc>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <A href="">Saiba mais.</A></Desc>
            

        </Container>
    )
}

export default ContainerLogin