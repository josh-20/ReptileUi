import { useState, useEffect } from "react"

type user = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
}

export const CreateUser = () => {
    const [user, setUser] = useState<user>()
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
      const {user} = await res.json() 
      setUser(user);
      console.log(user)
    }


    return(
      <div>
        <h2>Create User</h2>
        <li>FirstName</li>
        <input type="text" placeholder="Text" onChange={e => setFristName(e.target.value)}/>
        <li>LastName</li>
        <input type="text" placeholder="Text" onChange={e => setLastName(e.target.value)}/>
        <li>Email</li>
        <input type="text" placeholder="Text" onChange={e => setEmail(e.target.value)}/>
        <li>Password</li>
        <input type="password" placeholder="Text" onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button onClick={saveUser}>CreateUser</button>
      </div>
    )
}