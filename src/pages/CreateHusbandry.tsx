import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/routingStyle.css';

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
        <div className="container">
            <div className="row">
                <label>
                    <h3>
                        Weight
                    </h3>
                    <input onChange={e =>setWeight(e.target.value)}/>
                </label>
                <label>
                    <h3>
                        Length
                    </h3>
                    <input onChange={e =>setLength(e.target.value)}/>
                </label>
                <label>
                    <h3>
                        Temperature
                    </h3>
                    <input onChange={e =>setTemperature(e.target.value)}/>
                </label>
                <label>
                    <h3>
                        Humidity
                    </h3>
                    <input onChange={e =>setHumidity(e.target.value)}/>    
                </label>
                <div className="ctn-btn">
                    <button className="button butt-on" onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    )
}