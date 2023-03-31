import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const handleCreate = () => {
    const {id, name , sex, species} = useParams();
    const [newName, setNewName] = useState("");
    const [newGender, setNewGender] = useState("");
    const [newSpecies, setNewSpecies] = useState("");
    

    async function handleUpdate () {

        await fetch (`${import.meta.env.VITE_SURVER_URL}/uprep?id${id}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newName,
                newGender,
                newSpecies,
            })
        })


    }

    useEffect(() => {
        setNewName(name!);
        setNewGender(sex!);
        setNewSpecies(species!);
    },[])


    return(
        <div className="container">
        <div className="row adjuster">
          <h1 className="title">Create a Reptile</h1>
          
          <label className="name-label col-xs-12 col-sm-6">
            <h4>Name</h4>
            <input className="name" value={name} onChange={e => setNewName(e.target.value)}/>
          </label>
          <label className="sex-label col-xs-12 col-sm-6">
            <h4>Gender</h4>
            <input className="sex" value={sex} onChange={e => setNewGender(e.target.value)} />
          </label>
          <label className="dropdown-label col-sm-6">
            <select className="species " onChange={e => setNewSpecies(e.target.value)}>
                <option value="none" selected disabled hidden>Select</option>
                <option value="ball_python">Ball Python</option>
                <option value="king_snake">King Snake</option>
                <option value="corn_snake">Corn Snake</option>
                <option value="redtail_boa">Redtail Boa</option>
            </select>
            </label>
          <div className="button-ctn col-sm-6">
            <button className="create-button" onClick={handleCreate}>Update</button>
          </div>
        </div>
      </div>
    )
} 