import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AverageSessionPage from "../pages/AverageSessionPage";

const AverageSession = () => {
    let {id} = useParams();
    let [sessions, setSessions] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/user/'+ id + '/average-sessions')
          .then((res) => res.json())
          .then(
            (result) => {
                setIsLoaded(true);
                setSessions(result.data.sessions);
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
            <AverageSessionPage sessions={sessions}/>
        </>
          );
    }
}
export default AverageSession;