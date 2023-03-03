import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const getActivityHook = (id) => {
    let [activities, setActivities] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        fetchData('http://localhost:3000/user/'+ id + '/activity').then ((res) => {
            setIsLoaded(true);
            setActivities(res.sessions);
      });
      }, [])


    return ({activities: activities, isLoaded: isLoaded})
}

export default getActivityHook