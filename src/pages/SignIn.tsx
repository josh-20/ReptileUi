import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
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
    }
    return(
        <form className="signin-form">
            <label>
                Email
                <input type="email" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Password
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={SignIn}>Sign in</button>
            <button onClick={() => {navigate("/",{replace: true})}}>Create User</button>
        </form>
    )
    }