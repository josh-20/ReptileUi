import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/routingStyle.css';

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
        if (res.status != 200){
          navigate("/");
          return
        }
        navigate(-1);
        return 
    }
    return (
        <div className="container">
          <div className="schedule-ctn">
          <div className="row ">
            <div className="col-xs-12 col-sm-4 col-lg-1">
              <label>
                <h5>Monday</h5>
                <input type="checkbox" defaultChecked={monday} onChange={() => {setMonday(!monday)}}/>
              </label>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-2">
              <label>
                <h5>Tuesday</h5>
                <input type="checkbox" defaultChecked={tuesday} onChange={() => {setTuesday(!tuesday)}}/>
              </label>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-2">
              <label>
                <h5>Wednesday</h5>
                <input type="checkbox" defaultChecked={wednesday} onChange={() => {setWednesday(!wednesday)}}/>
              </label>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-2">
              <label>
                <h5>Thursday</h5>
                <input type="checkbox" defaultChecked={thursday} onChange={() => {setThursday(!thursday)}}/>
              </label>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-2">
              <label>
                <h5>Friday</h5>
                <input type="checkbox" defaultChecked={friday} onChange={() => {setFriday(!friday)}}/>
              </label>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-1">
              <label>
                <h5>Saturday</h5>
                <input type="checkbox" defaultChecked={saturday} onChange={() => {setSaturday(!saturday)}}/>
              </label>
            </div>
            <div className="col-xs-12 col-sm-4 col-lg-2">
              <label>
                <h5>Sunday</h5>
                <input type="checkbox" defaultChecked={sunday} onChange={() => {setSunday(!sunday)}}/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h5 className="service">Service</h5>
              <select onChange={e => setType(e.target.value)}>
                <option value="none" selected disabled hidden>Select</option>
                <option value="feed">Feed</option>
                <option value="record">Record</option>
                <option value="clean">Clean</option>
              </select>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label id="desc" htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" onChange={e => setDescription(e.target.value)} />
              </div>
            </div>
            <div className="col-sm-4">
              <button className="button" id="butt-on" onClick={handleSubmit}>Create Schedule</button>
            </div>
          </div>
          </div>
        </div>
      );
}