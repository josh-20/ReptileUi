import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/routingStyle.css';


export const CreateFeed = () => {
    const navigate = useNavigate();
    const {id,name,sex,species} = useParams();
    const [foodItem, setFoodItem]= useState("")
    

    async function handleSubmit () {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/feed?id=${id}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                foodItem
            })
        })
        if(res.status != 200){
            navigate("/");
            return;
        }
        navigate(`/reptile/${id}/${name}/${sex}/${species}`, {replace: true});
    }
    return (
        <div className="container">
            <div className="schedule-ctn">
                <label>
                    <h3>
                        Feed
                    </h3>
                    <input onChange={e => setFoodItem(e.target.value)}/>
                </label>
            <button className="button" onClick={handleSubmit}>Create</button>
            </div>
        </div>

    )
}