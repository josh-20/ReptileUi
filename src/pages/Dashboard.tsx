import React from 'react';
import { useEffect, useState } from 'react';
import './Dashboard.css';

interface Reptile {
  id: number,
  species: string,
  name: string,
  sex: string,
}
interface Schedule {
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



export const Dashboard: React.FC = () => {
  const [reptiles, setReptiles] = useState<Reptile[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
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
  }

  useEffect(() => {
    const fetchAll = async () => {
      const resRep = await fetch(`${import.meta.env.VITE_SERVER_URL}/reptile`);
      console.log(resRep);
      const {reptiles} = await resRep.json();
      setReptiles(reptiles);

      const resSchedule = await fetch(`${import.meta.env.VITE_SERVER_URL}/scheduleuser`);
      const {schedules} = await resSchedule.json();
      setSchedules(schedules); 
    }
    fetchAll();

  },[])
  
  return (
    <div>
      <h1 className='dashboard-label'>Dashboard</h1>
      <div className='container'>
        <div className='reptile-ctn'>
          {
            reptiles.map((reptile) => (
              <div className="reptile" key={reptile.id}>
                {reptile.name}
                <button className="delete-button" onClick={() => {handleDelete(reptile.id)}}>Delete</button>
              </div>
            ))
          }
        </div>
        <div className='schedule-ctn'>
          {
            schedules.map((schedule) => (
              <div className='schedule'>
                {schedule.description}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};