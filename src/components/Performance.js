import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchData from "../utils/fetchData";
import PerformancePage from "../pages/PerformancePage"

const Performance = () => {
    let {id} = useParams();
    let [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        fetchData('http://localhost:3000/user/'+ id + '/performance').then ((res) => {
            setData(res)
            setLoading(false)
        });
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
        <>
            <PerformancePage data={data}/>
        </>
          );
    }
}

export default Performance