import { Component } from 'react'
// MyComponent é o papagaio e Component é a ave
// tudo o que a ave tem o papagaio tbm tem mas ele tambem fala, tem coisas a mais
class MyComponent extends Component {
    constructor(props) {
        super(props) // pega o constructor do Component

        this.state = {
            contador: 0
        }
    }

    add = () => {
        this.setState({ contador: this.state.contador + 1})
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.add}>Incrementar</button>
            </div>
        )
    }
}

export default MyComponent