import { useState } from "react";
import styled from 'styled-components'
import QRCode from 'qrcode.react'


const QRCodeGenerator = () => {

    const Container = styled.div`
    
    `
    const Title = styled.h1`
    
    `
    const Input = styled.input`
    
    `
    const QRContainer = styled.div`
    
    `

    const [text, setText] = useState('')

    return (
        <Container>
            <Title></Title>
            <Input type="text" value={text} onChange={(event) => {
                setText(event.target.value)
            }}/>

            <QRContainer>
                <QRCode value={text} size={100}/>
            </QRContainer>
        </Container>
    )
}

export default QRCodeGenerator