import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Login(props) {

    const [name, setName] = useState();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const toggleChange = e => {
        setName(e.target.value);
    }

    const toggleSubmit = e => {
        e.preventDefault();
        props.setLogged(true);
        props.setUser(name);
        Navigate(from, {replace: true})
    }

    return (
        <form onSubmit={toggleSubmit}>
            <input type="text" placeholder="Log In" onChange={toggleChange}/>
        </form>
    )
}