import { Link } from 'react-router-dom'

function Navigation() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation