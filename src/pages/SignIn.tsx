import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style/Signin.css';

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
        <div className="container">
            <div className="row">
                <form className="signin-form col-xs-12">
                    <h1 className="title">Sign in</h1>
                    <label className="signin-label col-xs-12">
                        <h4 id="email" >Email:</h4> 
                        <input type="email" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label className="signin-label">
                        <h4 id="password">Password:</h4> 
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button className="col-xs-12 button" id="button" type="button" onClick={login}>Sign in</button>
                    <button className="col-xs-12 button" id="button" onClick={() => {navigate("/createUser",{replace: true})}}>Sign Up</button>
                </form>
            </div>
        </div>
        )
    }