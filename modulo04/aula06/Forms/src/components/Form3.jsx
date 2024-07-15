import { useState } from "react";

function Form3() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const handleSubmit = (event) => {
        let empty = false

        event.preventDefault()

        for (let index in user) {
            if(user[index] == '') {
                empty = true
            }
        }
        if (empty) {
            alert('Preencha todos os dados')
        } else {
            if (user.password.length < 8) {
                alert('A senha deve conter no minimo 8 caracteres')
            } else {
                if (user.password != user.passwordConfirm) {
                    alert("A confimação de senha deve ser igual a senha")
                } else {
                    if (!/\S+@\S+\S+.\S+/.test(user.email)) {
                        alert('Insira um email válido')
                    } else {
                        alert(`Dados enviados:
                        Nome: ${user.name}    
                        Email: ${user.email}    
                        Senha: ${user.password}    
                        `)
                    }
                }
            }
        }
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Email:
                <input type="text" name="email" id="" value={user.email} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Senha:
                <input type="password" name="password" value={user.password} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Confirmar senha:
                <input type="password" name="passwordConfirm" value={user.passwordConfirm} onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}  

export default Form3