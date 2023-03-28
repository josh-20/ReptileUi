import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



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
        navigate(`/reptile/${id}/${name}/${sex}/${species}`, {replace: true});
    }
    return (
        <div>
            <label>
                Feed
                <input onChange={e => setFoodItem(e.target.value)}/>
            </label>
            <button onClick={handleSubmit}>Create</button>
        </div>

    )
}