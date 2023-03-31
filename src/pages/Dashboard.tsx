import { useEffect, useState } from 'react';
import './style/Dashboard.css';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


interface Reptile {
  id: number,
  species: string,
  name: string,
  sex: string
}
interface Schedule {
  reptileId: number,
  id: number,
  type: string,
  description: string,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday:  boolean,
  saturday: boolean,
  sunday:  boolean,
}


export const Dashboard = () => {
  const [reptiles, setReptiles] = useState<Reptile[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const navigate = useNavigate();

  // Delete Reptile
  async function handleDelete (id: number){
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/delrep`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
      })
    });
    setReptiles((reptiles) => reptiles.filter((reptiles) => reptiles.id != id))
    setSchedules([...schedules]);
  }
  function handleSelect(id: number, name: string, sex: string, species: string) {
    navigate(`/reptile/${id}/${name}/${sex}/${species}`);
  }
// create Reptile
  async function handleCreateReptile() {
    navigate("/createRep")
  }


  useEffect(() => {
    const fetchAll = async () => {
      const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
      const d = new Date();
      let dayofWeek = weekday[d.getDay()];

      const resRep = await fetch(`${import.meta.env.VITE_SERVER_URL}/reptile`);
      if (resRep.status == 401){
        navigate("/");
        return;
      }else{
        const {reptiles} = await resRep.json();
        setReptiles(reptiles);
  
        const resSchedule = await fetch(`${import.meta.env.VITE_SERVER_URL}/scheduleuser?day=${dayofWeek}`);
        const {schedules} = await resSchedule.json();
        setSchedules(schedules); 
      }
    }
    fetchAll();
  },[])
  return (
    <div className='container'>
      <div className='row border-design'>
        <h1 className='dashboard-label'>Dashboard</h1>
        <h5 className="col-sm-4 name-label">Reptile Name</h5>
        <h5 className="col-sm-4 name-label" id="please">Schedule Name</h5>
        {reptiles.map((reptile) => (
          <div className='reptile' key={reptile.id}>
              <div className='row'>
                <div className='col-sm-4 reptile-name' onClick={() => { handleSelect(reptile.id, reptile.name, reptile.sex, reptile.species) }}>
                  {reptile.name}
                </div>
                <div className='col-sm-4 spacer'>
                  {schedules.filter((schedule) => schedule.reptileId === reptile.id).map((schedule) => (
                    <div className='schedule' key={schedule.id}>
                      {schedule.description}
                    </div>
                  ))}
                </div>
                <div className='col-sm-4 reptile-buttons'>
                <button className='button' onClick={() => { handleDelete(reptile.id) }}>Delete</button>
              </div> 
              </div>
          </div>
          ))}
        <div className='col-sm-12'>
          <button className="button" onClick={handleCreateReptile}>Create Reptile</button>
        </div>
      </div>
    </div>
  );
};
