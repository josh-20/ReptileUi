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
        navigate(`/createHusbandry/${id}/${name}/${sex}/${species}`)

    }
    function handleCreateSchedule () {
        navigate(`/createScheduleRep/${id}/${name}/${sex}/${species}`)

    }
    function handleCreateFeed () {
        navigate(`/createFeed/${id}/${name}/${sex}/${species}`);
    }
    function returnToDash () {
        navigate("/dash", {replace: true});
    }

    useEffect(() => {
        async function fetchAll() {
            // make request for Husbandry
            const resHusbandry = await fetch(`${import.meta.env.VITE_SERVER_URL}/husbandry?id=${id}`);
            if(resHusbandry.status != 200){
                navigate("/");
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
      return () => {
        setHusbandrys([]);
        setSchedules([]);
        setFeeds([]);
      }
    },[])
return(
  <div className="container styling">
    
    <h1 id="reptile-info">Reptile Info</h1>
    <div className="row">
      <div className="col-sm-12">
        <h6 className="red">Name: {name?.toUpperCase()}</h6>
        <h6 className="red">Gender: {sex?.toUpperCase()}</h6>
        <h6 className="red">Species: {species?.replace("_", " ").toUpperCase()} </h6>
      </div>
    </div>
    <div className="row">
      <div className="containment col-sm-4">
        {
          husbandrys?.map((husbandry) => (
            <div key={husbandry.id} className="col-sm-12" id="husbandry-padder ">
              <div className="husbandry-ctn">
                <h4 className="red">
                  Husbandry: 
                </h4>
                <h5>
                  Humidity: {husbandry.humidity}
                </h5>
                <h5>
                  length: {husbandry.length} 
                </h5>
                <h5>
                  Temperature: {husbandry.temperature} 
                </h5>
                <h5>
                  Weight: {husbandry.weight} 
                </h5>
              </div>
            </div>
          ))
        }
      </div>
      <div className="col-sm-4 containment">
        {
          schedules?.map((schedule) => (
            <div key={schedule.id} className="col-sm-12">
              <div className="husbandry-ctn">
                <h4 className="red">Schedule: </h4>
                <h5 className="schedule-label">
                  {schedule.description}
                </h5>
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
            </div>
          )) 
        }
      </div>
      <div className="col-sm-4 containment">
        {
          feeds?.map((feed) => (
            <div key={feed.id} className="col-sm-12">
              <div className="husbandry-ctn">
                <h4 className="red">Feeding:</h4>
                <h5 className="feed-label">
                  {feed.foodItem}
                </h5>
              </div>
            </div>
          ))
        }
      </div>
      <div className="router-button-ctn">
        <button className="button router-button col-xs-12" onClick={handleCreateHusbandry}>Create Husbandry</button>
        <button className="button router-button col-xs-12" onClick={handleCreateSchedule}>Create Schedule</button>
        <button className="button router-button col-xs-12" onClick={handleCreateFeed}>Create Feeding</button>
        <button className="button router-button col-xs-12" onClick={returnToDash}>To Dashboard</button>
      </div>
    </div>
  </div>

  )
}