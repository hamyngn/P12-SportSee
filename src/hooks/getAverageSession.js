import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const getAverageSession = (id) => {
    let [sessions, setSessions] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        fetchData('http://localhost:3000/user/'+ id + '/average-sessions').then ((res) => {
            setSessions(res.sessions)
            setLoading(false)
        });
    }, [])


    return ({sessions: sessions, loading: loading})
}

export default getAverageSession