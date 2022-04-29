import Login from '../components/Login';
import { useState, useEffect } from 'react';

export default function Homepage() {

    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        console.log(user)
    }, [user])
    
    return (
        <div>
           <Login setLogged={setLogged} setUser={setUser} />
        </div>
    )
}