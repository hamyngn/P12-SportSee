import React from "react";
import { useParams } from "react-router";
import ActivityPage from "../pages/ActivityPage";
import getActivityHook from "../hooks/getActivityHook";

const Activity = () => {
    let {id} = useParams();
    let {activities, isLoaded} = getActivityHook(id);

    if (!isLoaded) {
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