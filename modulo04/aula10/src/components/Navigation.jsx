import { Link } from 'react-router-dom'

function Navigation() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/SearchIpAddress">SearchIpAddress</Link></li>
                    <li><Link to="/QRCodeGenerator">QRCodeGenerator</Link></li>
                    <li><Link to="/LanguageTranslator">LanguageTranslator</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation