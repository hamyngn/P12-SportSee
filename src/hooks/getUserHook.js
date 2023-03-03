import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

const getUserHook = (id) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchData('http://localhost:3000/user/'+id).then ((res) => {
        setUser(res)
        setLoading(false)
    });
    }, [])

    return ({user: user, loading: loading})
}

export default getUserHook