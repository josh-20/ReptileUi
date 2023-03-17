import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


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
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    });
    const resultBody = await res.json();
    navigate("/signin",{replace: true}); 
  }


  return(
    <form className="signup-form">
      <h2>Create User</h2>
      <label>
        FirstName
        <input type="text" value={firstName} placeholder="Text" onChange={e => setFristName(e.target.value)}/>
      </label>
      <label>
        LastName
        <input type="text" value={lastName} placeholder="Text" onChange={e => setLastName(e.target.value)}/>
      </label>
      <label>
        Email
        <input type="email" value={email} placeholder="Text" onChange={e => setEmail(e.target.value)}/>
      </label>
      <label>
        Password
        <input type="password" value={password} placeholder="Text" onChange={e => setPassword(e.target.value)}/>
      </label>
      <br/>
      <button type="button" onClick={saveUser}>CreateUser</button>
    </form>
  )
}