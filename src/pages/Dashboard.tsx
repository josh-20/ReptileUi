import React from 'react';
import { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { Reptile } from './Reptile';


interface Reptile {
  id: number,
  species: string,
  name: string,
  sex: string,
  schedule: []
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
  function handleSelect(id: number) {
    navigate(`/reptile/${id}`, {replace: true});
  }

  async function handleLogout () {
    await fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
      method: "post"
    });
    navigate("/signin", {replace: true})
  }
  useEffect(() => {
    const fetchAll = async () => {
      const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
      const d = new Date();
      let dayofWeek = weekday[d.getDay()];

      const resRep = await fetch(`${import.meta.env.VITE_SERVER_URL}/reptile`);
      if (resRep.status != 200){
        navigate("/signin", {replace: true});
        console.log("hello in side")
        return;
      }else{
        console.log("still here")
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
    <div>

      <h1 className='dashboard-label'>Dashboard</h1>
      <div id='container'>
      <div className="label-container">
        <div className='name'>
          Name
        </div>
        <div className='spacer'></div>
        <div className='schedule'>
          Schedule
        </div>
      </div>
      {reptiles.map((reptile) => (
        <div className='reptile' key={reptile.id}>
          <div className='reptile-info'>
            <div className='reptile-name'>
              {reptile.name}

            </div>
            <div className='reptile-buttons'>
              <button className="button"onClick={() => {handleSelect(reptile.id)}}>Select</button>
              <button className='button' onClick={() => {handleDelete(reptile.id)}}>Delete</button>
            </div>
          </div>
          <div className='schedule-row'>
            {schedules.filter((schedule) => schedule.reptileId === reptile.id).map((schedule) => (
              <div className='schedule' key={schedule.id}>
                {schedule.description}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};