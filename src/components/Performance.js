import React from "react";
import { useParams } from "react-router";
import getPerformanceHook from "../hooks/getPerformanceHook";
import PerformancePage from "../pages/PerformancePage"

const Performance = () => {
    let {id} = useParams();
    let {data, loading} = getPerformanceHook(id);
    
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