import { useState } from "react";
import styled from 'styled-components'
import axios from "axios";


const Container = styled.div`
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
`
const ContainerInput = styled.div`
display: flex;
justify-content: center;
gap: 10px;
`
const Input = styled.input`
width: 60%;
padding: 5px;
padding-left: 10px;
border-radius: 10px;
font-size: 15px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif;
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
`



const SearchIpAddress = () => {
    const [city, setCity] = useState('')
    const [postal, setPostal] = useState('')
    const [region, setRegion] = useState('')
    const [ip, setIp] = useState('')

    const searchIp = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            setCity(response.data.city)
            setPostal(response.data.postal)
            setRegion(response.data.region)
            

        } catch (error) {
            console.error("Error fetching address data:", error)
        }
    }

    return (
        <Container>
            <ContainerInput>
                <Input type="text" value={ip} placeholder="Enter the ip..." onChange={(event) => {
                    setIp(event.target.value)
                }} />
                <Button type="button" onClick={searchIp}>Search</Button>
            </ContainerInput>
            <br />
            <p>City: {city}</p>
            <p>Postal: {postal}</p>
            <p>Region: {region}</p>
            
        </Container>
    )

}

export default SearchIpAddress