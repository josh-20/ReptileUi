import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateRep = () => {
  const navigate = useNavigate();
  const {id, name , sex, species} = useParams();
  const [newName, setNewName] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newSpecies, setNewSpecies] = useState("");
    

  async function handleUpdate () {
    console.log(newSpecies)
    console.log(species)
    const res = await fetch (`${import.meta.env.VITE_SURVER_URL}/uprep?id=${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            newName,
            newGender,
            newSpecies,
        })
    });
    if(res.status != 200){
      navigate("/");
      return;
    }
    res.status
    navigate("/dash", {replace: true})
    return

  }

  useEffect(() => {
    setNewName(newName);
    setNewGender(newGender);
    setNewSpecies(newSpecies);
  },[])


  return(
      <div className="container">
      <div className="row adjuster">
        <h1 className="title">Update Reptile</h1>
        
        <label className="name-label col-xs-12 col-sm-6">
          <h4>Name</h4>
          <input className="name" value={newName} onChange={e => setNewName(e.target.value)}/>
        </label>
        <label className="sex-label col-xs-12 col-sm-6">
          <h4>Gender</h4>
          <input className="sex" value={newGender} onChange={e => setNewGender(e.target.value)} />
        </label>
        <label className="dropdown-label col-sm-6">
        <select className="species " onChange={e => setNewSpecies(e.target.value)} defaultValue="none" >
          <option value="none" disabled hidden>Select</option>
          <option value="ball_python">Ball Python</option>
          <option value="king_snake">King Snake</option>
          <option value="corn_snake">Corn Snake</option>
          <option value="redtail_boa">Redtail Boa</option>
        </select>
          </label>
        <div className="button-ctn col-sm-6">
          <button className="button" onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  )
} 