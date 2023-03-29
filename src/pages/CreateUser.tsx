import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import  './style/CreateUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CreateUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function saveUser() {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      })
    });
    navigate("/signin",{replace: true}); 
  }

  return(
    <div className="container">
      <div className="row stuff">
        <form className="signup-form">
          <h2 className="form-title">Sign Up</h2>
          <label>
            <h4 id="first-name" >FirstName</h4>
            <input className="input-box" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
          </label>
          <label>
            <h4 id="last-name">LastName</h4>
            <input className="input-box" type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
          </label>
          <label>
            <h4 id="email">Email</h4>
            <input className="input-box" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            <h4 id="password">Password</h4>
            <input className="input-box" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>

            <button className="button" id="button" type="button" onClick={saveUser}>CreateUser</button>
            <button className="button" id="button" type="button" onClick={() => {navigate("/signin", {replace: true})}}>SignIn</button> 
          </div>
        </form>
      </div>
    </div>
  )
}