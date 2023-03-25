import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signin.css';

export const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login () {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/signin`, {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        navigate("/dash", {replace: true})
    }
    return(
        <form className="signin-form">
            <h1 className="title">Sign in</h1>
            <label>
                Email: 
                <input type="email" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Password: 
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={login}>Sign in</button>
            <button onClick={() => {navigate("/createUser",{replace: true})}}>Create User</button>
        </form>
        )
    }