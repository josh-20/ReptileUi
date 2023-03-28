import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export const CreateScheduleRep = () => {
    const navigate = useNavigate();
    const {id,name,sex,species} = useParams();
    const [type, setType] = useState("");
    const [description,setDescription] = useState("");
    const [monday,setMonday] = useState(false);
    const [tuesday, setTuesday] = useState(false);
    const [wednesday,setWednesday] = useState(false);
    const [thursday, setThursday] = useState(false);
    const [friday,setFriday] = useState(false);
    const [saturday,setSaturday] = useState(false);
    const [sunday,setSunday] = useState(false);
    

    async function handleSubmit() {
        console.log(description)
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/schedulerep?reptileId=${id}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type,
                description,
                monday,
                tuesday,
                wednesday,
                thursday,
                friday,
                saturday,
                sunday
            })
        });
        navigate(`/reptile/${id}/${name}/${sex}/${species}`);
    }
    return(
        <div>
            <select onChange={e => setType(e.target.value)}>
                <option value="none" selected disabled hidden>Select</option>
                <option value="feed">Feed</option>
                <option value="record">Record</option>
                <option value="clean">Clean</option>
            </select>
            <span>Description</span>
            <input type="text" onChange={e => setDescription(e.target.value)}/>
            <label>
                Monday
                <input type="checkbox" defaultChecked={monday} onChange={() => {setMonday(!monday)}}/>
            </label>
            <label>
                Tuesday
                <input type="checkbox" defaultChecked={tuesday} onChange={() => {setTuesday(!tuesday)}}/>
            </label>
            <label>
                Wednesday
                <input type="checkbox"defaultChecked={wednesday} onChange={() => {setWednesday(!wednesday)}}/>
            </label>
            <label>
                Thursday
                <input type="checkbox"defaultChecked={thursday} onChange={() => {setThursday(!thursday)}}/>
            </label>
            <label>
                Friday
                <input type="checkbox"defaultChecked={friday} onChange={() => {setFriday(!friday)}}/>
            </label>
            <label>
                Saturday
                <input type="checkbox"defaultChecked={saturday} onChange={() => {setSaturday(!saturday)}}/>
            </label>
            <label>
                Sunday
                <input type="checkbox"defaultChecked={sunday} onChange={() => {setSunday(!sunday)}}/>
            </label>
            <button onClick={handleSubmit}>Create Schedule</button>
        </div>
    )
}