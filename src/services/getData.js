import {useState, useEffect} from "react";
import fetchData from "../utils/fetchData";

export default function getData(id) {

    const [activities, setActivities] = useState(null)
    const [sessions, setSessions] = useState(null)
    const [performance, setPerformance] = useState(null)
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    let api, url
    api = false
    if(api) {
        url = 'http://localhost:3000/user/'+ id
    } else {
        url = 'http://localhost:8000/user/'+ id
    }

    useEffect(() => {
        fetchData(url, api).then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                setUser(response)
            }
        });
        fetchData(url + '/activity', api).then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                if(api) {
                    setActivities(response.sessions)
                } else {
                    setActivities(response[0].sessions)
                }
            }
        });
        fetchData(url + '/average-sessions', api).then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                if(api) {
                    setSessions(response.sessions)
                } else {
                    setSessions(response[0].sessions)
                }
                
            }
        });
        fetchData(url + '/performance', api).then ((res) => {
            const {response, error} = res
            if(error) {
                setErr(error)
            } else {
                if(api){
                    setPerformance(response)
                } else {
                    setPerformance(response[0])
                }
                
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