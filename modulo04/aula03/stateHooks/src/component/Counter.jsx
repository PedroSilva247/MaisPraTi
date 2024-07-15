import { useState } from "react";

let ids = 0
function Counter() {
    const [count, setCount] = useState('')
    function gravar() {
        
        let newLi = document.createElement('li')
        let newItem = document.createElement('div')
        newItem.id = "item"+ids
        newItem.className = "item"
        let divBtn = document.createElement('button')
        divBtn.className = "divBtn"
        let removeBtn = document.createElement('button')
        let liHr = document.createElement('li')
        liHr.className = "liHr"
        

        let hr = document.createElement('hr')
        newItem.innerHTML = count
        newItem.id = ids
        removeBtn.innerHTML = "Remover"
        removeBtn.id = "botao"+ids
        divBtn.appendChild(removeBtn)
        newLi.appendChild(newItem)
        newLi.appendChild(divBtn)
        liHr.appendChild(hr)
        document.getElementById('ul').appendChild(newLi)
        document.getElementById('ul').appendChild(liHr)
        

        removeBtn.onclick = () => {
            newLi.remove()
            newItem.remove()
            removeBtn.remove()
            liHr.remove()
            hr.remove()
        }
        
        document.getElementById('input').value = ''
        ids++

    }
    
    return(
        <div id="div">
            <div className="addTask">
                <input type="text" name="" id="input" onChange={() => setCount(document.getElementById('input').value)}/>
                <div className="divBtn-gravar">
                    <button id="botao" onClick={() => {
                        gravar()
                    }}>Gravar</button>
                </div>
            </div>
            <div className="divH2">
                <h2>To do List</h2>
            </div>
            <ul id="ul">
                <li className="liHr"><hr/></li>
            </ul>
        </div>
    )
}

export default Counter