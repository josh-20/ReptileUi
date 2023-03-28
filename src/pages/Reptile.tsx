import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";


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
        <div>
            <div>
                {
                    husbandrys?.map((husbandry) => (
                        <div key={husbandry.id}>
                            Humiidity: {husbandry.humidity}
                            length: {husbandry.length}
                            Temperature: {husbandry.temperature}
                            Weight: {husbandry.weight}
                        </div>
                    ))
                    
                }
            </div>
            <div>
                {
                    schedules?.map((schedule) => (
                        <div key={schedule.id}>
                            {schedule.description}
                            <label>
                                Monday
                                <input type="checkbox" checked={schedule.monday} disabled/>
                            </label>
                            <label>
                                Tuesday
                                <input type="checkbox" checked={schedule.tuesday} disabled/>
                            </label>
                            <label>
                                Wednesday
                                <input type="checkbox" checked={schedule.wednesday} disabled/>
                            </label>
                            <label>
                                Thursday
                                <input type="checkbox" checked={schedule.thursday} disabled/>
                            </label>
                            <label>
                                Friday
                                <input type="checkbox" checked={schedule.friday}  disabled/>
                            </label>
                            <label>
                                Saturday
                                <input type="checkbox" checked={schedule.saturday} disabled/>
                            </label>
                            <label>
                                Sunday
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
                            Feed: {feed.foodItem}
                        </div>
                    ))
                }
            </div>
                <button onClick={handleCreateHusbandry}>Create Husbandry</button>
                <button onClick={handleCreateSchedule}>Create Schedule</button>
                <button onClick={handleCreateFeed}>Create feeding</button>
        </div>
    )
}