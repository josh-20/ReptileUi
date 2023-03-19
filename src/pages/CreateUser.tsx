import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  './CreateUser.css';

export const CreateUser = () => {
  const navigate = useNavigate();
  const [firstName, setFristName] = useState("")
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
    <form className="signup-form">
     
      <h2>Create User</h2>
      <label>
        FirstName
        <input type="text" value={firstName} onChange={e => setFristName(e.target.value)}/>
      </label>
      <label>
        LastName
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </label>
      <button type="button" onClick={saveUser}>CreateUser</button>
   
    </form>
  )
}