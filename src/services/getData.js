import {useState, useEffect} from "react";
import fetchData from "../utils/fetchData";

export default function getData(id) {

    const [activities, setActivities] = useState(null)
    const [sessions, setSessions] = useState(null)
    const [performance, setPerformance] = useState(null)
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    const url = 'http://localhost:3000/user/'+ id
    
    useEffect(() => {
        fetchData(url).then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                setUser(response)
            }
        });
        fetchData(url + '/activity').then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                setActivities(response.sessions)
            }
        });
        fetchData(url + '/average-sessions').then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                setSessions(response.sessions)
            }
        });
        fetchData(url + '/performance').then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                setPerformance(response)
            }
        });
      }, [])

      useEffect(() => {
        if((user && activities && sessions && performance) || err) {
            setLoading (false)
        }
      }, [user, activities, sessions, performance, err])

      return ({ user: user, activities: activities, sessions: sessions, performance: performance, error: err, loading: loading })
}