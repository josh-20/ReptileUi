import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export const CreateHusbandry = () => {
    const {id, name, sex, species} = useParams();
    const navigate = useNavigate();
    const [weight, setWeight] = useState("");
    const [length, setLength] = useState("");
    const [temperature, setTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    
    async function handleSubmit() {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/husbandry?id=${id}`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                weight,
                length,
                temperature,
                humidity
            })
        })
        navigate(`/reptile/${id}/${name}/${sex}/${species}`, {replace: true})
    }

    return(
        <div>
            <label>
                Weight
                <input onChange={e =>setWeight(e.target.value)}/>
            </label>
            <label>
                Length
                <input onChange={e =>setLength(e.target.value)}/>
            </label>
            <label>
                Temperature
                <input onChange={e =>setTemperature(e.target.value)}/>
            </label>
            <label>
                Humidity
                <input onChange={e =>setHumidity(e.target.value)}/>    
            </label>
            <button onClick={handleSubmit}>Create</button>
        </div>
    )
}