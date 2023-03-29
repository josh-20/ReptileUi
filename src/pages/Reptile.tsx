import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import './style/routingStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Husbandry {
    id: number,
    weight: number,
    length: number,
    temperature: number,
    humidity: number,
}

interface Schedule {
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
interface Feed {
    id: number,
    foodItem: string
}
export const Reptile = () => {
    const navigate = useNavigate();
    const {id, name, sex, species} = useParams();
    const [husbandrys,setHusbandrys] = useState<Husbandry[]>([]);
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [feeds,setFeeds] = useState<Feed[]>([]);


    function handleCreateHusbandry() {
        navigate(`/createHusbandry/${id}/${name}/${sex}/${species}`,{replace:true})

    }
    function handleCreateSchedule () {
        navigate(`/createScheduleRep/${id}/${name}/${sex}/${species}`, {replace: true})

    }
    function handleCreateFeed () {
        navigate(`/createFeed/${id}/${name}/${sex}/${species}`, {replace: true});
    }

    useEffect(() => {
        try {
            async function fetchAll() {
                // make request for Husbandry
                const resHusbandry = await fetch(`${import.meta.env.VITE_SERVER_URL}/husbandry?id=${id}`);
                if(resHusbandry.status != 200){
                    navigate("/signin", {replace: true});
                    return;
                }
                const {husbandry} = await resHusbandry.json();
                setHusbandrys(husbandry);

                // make request for schedules
                const resSchedule = await fetch(`${import.meta.env.VITE_SERVER_URL}/schedulerep?reptileId=${id}`);
                const{schedules}= await resSchedule.json();
                setSchedules(schedules);

                //make request for feed
                const resFeed = await fetch(`${import.meta.env.VITE_SERVER_URL}/feed?id=${id}`);
                const {feedings} = await resFeed.json();
                setFeeds(feedings);
            }
                fetchAll();
        } catch (error) {
            console.log(error);        
        }
    },[])
    useEffect(() => {
        console.log(husbandrys)
    },[husbandrys])
return(
  <div className="container styling">
    <h1>Reptile Info</h1>
    <div className="row containment">
      {
        husbandrys?.map((husbandry) => (
          <div key={husbandry.id}>
            <h3>
              Humidity: {husbandry.humidity}
            </h3>
            <h3>
              length: {husbandry.length} 
            </h3>
            <h3>
              Temperature: {husbandry.temperature} 
            </h3>
            <h3>
              Weight: {husbandry.weight} 
            </h3>
          </div>
        ))
      }
    </div>
    <div>
      {
        schedules?.map((schedule) => (
          <div key={schedule.id}>
            <h3 className="schedule-label">
            Schedule: {schedule.description}
            </h3>
            <label>
              <h5>
                Monday
              </h5>
              <input type="checkbox" checked={schedule.monday} disabled/>
            </label>
            <label>
              <h5>
                Tuesday
              </h5>
              <input type="checkbox" checked={schedule.tuesday} disabled/>
            </label>
            <label>
              <h5>
                Wednesday
              </h5>
              <input type="checkbox" checked={schedule.wednesday} disabled/>
            </label>
            <label>
              <h5>
                Thursday
              </h5>
              <input type="checkbox" checked={schedule.thursday} disabled/>
            </label>
            <label>
              <h5>
                Friday
              </h5>
              <input type="checkbox" checked={schedule.friday}  disabled/>
            </label>
            <label>
              <h5>
                Saturday
              </h5>
              <input type="checkbox" checked={schedule.saturday} disabled/>
            </label>
            <label>
              <h5>
                Sunday
              </h5>
              <input type="checkbox" checked={schedule.sunday} disabled/>
            </label>
          </div>
        ))
      }
      </div>
      <div>
        {
          feeds?.map((feed) => (
            <div key={feed.id}>
              <h5 className="feed-label">
              Feed: {feed.foodItem}
              </h5>
            </div>
          ))
        }
      </div>
      <button className="button router-button col-xs-12" onClick={handleCreateHusbandry}>Create Husbandry</button>
      <button className="button router-button col-xs-12" onClick={handleCreateSchedule}>Create Schedule</button>
      <button className="button router-button col-xs-12" onClick={handleCreateFeed}>Create Feeding</button>
    </div>
  )
}