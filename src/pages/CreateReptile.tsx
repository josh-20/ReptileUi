import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const CreateReptile = () => {
    const navigate = useNavigate();
    const [species,setSpecies] = useState("");
    const [name, setName] = useState("");
    const [sex,setSex] = useState("");


    async function handleCreate() {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/reptile`, {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                species,
                name,
                sex
            })
        });
        if (res.status != 200){
            navigate("/signin", {replace: true});
            return
        }
        res.json();
        navigate("/dash",{replace: true});
    }



    return(
        <div>
            <select value={species} onChange={e => setSpecies(e.target.value)}>
                <option value="ball_python">Ball Python</option>
                <option value="king_snake">king_snake</option>
                <option value="corn_snake">corn_snake</option>
                <option value="redtail_boa">redtail_boa</option>
            </select>
            <label>
                <h4>Name</h4>
            <label>
                <input value={name} onChange={e => setName(e.target.value)}>Name</input>
            </label>
                <h4>Gender</h4>
            </label>
                <input value={sex} onChange={e => setSex(e.target.value)}>Sex</input>
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}