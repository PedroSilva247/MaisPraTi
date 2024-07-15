import { useState } from "react";

function Form2() {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleSubmit = (event) => {
        let empty = false
        event.preventDefault()
        for (let index in address) {
            if (address[index] == '') {
                empty = true
            } 
        }
        if (empty == false) {
            alert(`
                Rua: ${address.street}    
                Cidade: ${address.city}    
                CEP: ${address.postalCode}    
            `)
        } else {
            
            alert("Preencha todos os campos")
            
        }
        
    }

    const handleChange = (event) => {
        if (event.target.name == 'rua') {
            setAddress({
                street: event.target.value,
                city: address.city,
                postalCode: address.postalCode
            })
        } else if (event.target.name == 'cidade') {
            setAddress({
                street: address.street,
                city: event.target.value,
                postalCode: address.postalCode
            })
        } else if (event.target.name == 'cep') {
            setAddress({
                street: address.street,
                city: address.city,
                postalCode: event.target.value
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="rua" value={address.street} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="cidade" value={address.city} onChange={handleChange}/>
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="cep" value={address.postalCode} onChange={handleChange}/>
            </label>
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Form2