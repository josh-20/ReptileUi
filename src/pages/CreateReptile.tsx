import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./style/CreateReptile.css"

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
      
      <div className="container">
        <div className="row">
          <h1 className="title">Create a Reptile</h1>
          
          <label className="col-xs-12 col-lg-3">
            <h4>Name</h4>
            <input className="name" value={name} onChange={e => setName(e.target.value)}/>
          </label>
          <label className="col-xs-12 col-lg-3">
            <h4>Gender</h4>
            <input className="sex" value={sex} onChange={e => setSex(e.target.value)} />
          </label>
          <label className="col-xs-12 col-lg-3">
            <select className="species" onChange={e => setSpecies(e.target.value)}>
                <option value="none" selected disabled hidden>Select</option>
                <option value="ball_python">Ball Python</option>
                <option value="king_snake">King Snake</option>
                <option value="corn_snake">Corn Snake</option>
                <option value="redtail_boa">Redtail Boa</option>
            </select>
            </label>
          <div className="col-xs-12 col-lg-3 button-ctn">
            <button className="create-button" onClick={handleCreate}>Create</button>
          </div>
        </div>
      </div>
    )
}