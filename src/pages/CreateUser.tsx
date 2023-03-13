import { useState } from "react"

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
      const res = await fetch("http://localhost:3000/", {
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
      return (res)
    }


    return(
      <div>
        <h2>Create User</h2>
        <p>FirstName</p>
        <input type="text" placeholder="Text" onChange={e => setFristName(e.target.value)}/>
        <p>LastName</p>
        <input type="text" placeholder="Text" onChange={e => setLastName(e.target.value)}/>
        <p>Email</p>
        <input type="text" placeholder="Text" onChange={e => setEmail(e.target.value)}/>
        <p>Password</p>
        <input type="password" placeholder="Text" onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button onClick={saveUser}>CreateUser</button>
      </div>
    )
}