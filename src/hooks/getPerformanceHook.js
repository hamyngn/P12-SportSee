import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const getPerformanceHook = (id) => {
    let [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        fetchData('http://localhost:3000/user/'+ id + '/performance').then ((res) => {
            setData(res)
            setLoading(false)
        });
    }, []);

    return ({data: data, loading: loading})
}

export default getPerformanceHook;