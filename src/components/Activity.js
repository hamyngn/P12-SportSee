import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ActivityPage from "../pages/ActivityPage";

const Activity = () => {
    let {id} = useParams();
    let [activities, setActivities] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/user/'+ id + '/activity')
          .then((res) => res.json())
          .then(
            (result) => {
                setIsLoaded(true);
                setActivities(result.data.sessions);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            });
          
      }, []);

    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <>
            <ActivityPage activities={activities}/>
        </>
          );
    }
}

export default Activity;