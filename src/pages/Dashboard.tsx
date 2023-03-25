import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Schedules } from './Schedules';
import { Reptile } from './Reptile';

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
  }
  function handleSelect(id: number) {
    navigate(`/reptile/${id}`, {replace: true});
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
      <h1>Dashboard</h1>
      <div>
        {
          reptiles.map((reptile) => (
            <div key={reptile.id}>
               {reptile.name}
              <button onClick={() => {handleDelete(reptile.id)}}>Delete</button>
              <button onClick={() => {handleSelect(reptile.id)}}>Select</button>
            </div>
          ))
        }
      </div>
      <div>
        {
          schedules.map((schedule) => (
            <div>
              {schedule.description}
            </div>
          ))
        }
      </div>
    </div>
  );
};