import React from "react";
import { useParams } from "react-router";
import getAverageSession from "../hooks/getAverageSession";
import AverageSessionPage from "../pages/AverageSessionPage";

const AverageSession = () => {
    let {id} = useParams();
    let {sessions, loading} = getAverageSession(id);
    
    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
        <>
            <AverageSessionPage sessions={sessions}/>
        </>
          );
    }
}
export default AverageSession;