import './App.css'
import StdForm from './components/Form'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import UserCard from './components/UserCard'
import { useState } from 'react'


function App() {
    const [user, setUser] = useState({name: 'Gendalf', age: 1000})
    return (
        <div>
            <UserCard user={user} setUser={setUser}></UserCard>
        </div>
    ) 
}

export default App