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
    foodItem: string
}
export const Reptile = () => {
    const navigate = useNavigate();
    const {id, name, sex, species} = useParams();
    const [husbandrys,setHusbandrys] = useState<Husbandry[]>([]);
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [feeds,setFeeds] = useState<Feed[]>([]);

    useEffect(() => {
        async function fetchAll() {
            const resHusbandry = await fetch(`${import.meta.env.VITE_SERVER_URL}/husbandry?id=${id}`);
            // if(resHusbandry.status != 200){
            //     navigate("/signin", {replace: true});
            //     return;
            // }
            const resSchedule = await fetch(`${import.meta.env.VITE_SERVER_URL}/schedulerep?reptileId=${id}`);
            const resFeed = await fetch(`${import.meta.env.VITE_SERVER_URL}/feed?id=${id}`);

            const {husbandry} = await resHusbandry.json();
            const {schedule} = await resSchedule.json();
            const {feed} = await resFeed.json();

            setHusbandrys(husbandry);
            setSchedules(schedule);
            setFeeds(feed);
        }
        fetchAll();
    },[])
    
    return(
        <div>
            <button>Hello</button>
            <div>
                {
                    husbandrys.map((husbandry) => (
                        <div key={husbandry.id}>
                            {husbandry.humidity}
                            {husbandry.length}
                            {husbandry.temperature}
                            {husbandry.weight}
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    schedules.map((schedule) => (
                        <div key={schedule.id}>
                            {schedule.description}
                            {schedule.monday}
                            {schedule.tuesday}
                            {schedule.wednesday}
                            {schedule.thursday}
                            {schedule.friday}
                            {schedule.saturday}
                            {schedule.sunday}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}