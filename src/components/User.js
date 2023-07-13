import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../services/getData";
import UserPage from "../pages/UserPage";
import ActivityChart from "./ActivityChart";
import SessionChart from "./SessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";
import styles from "../assets/styles/User.module.css"
import dataModel from "../model/dataModel";

const User = () => {
    let {id} = useParams();
    const [activities, setActivities] = useState(null)
    const [sessions, setSessions] = useState(null)
    const [performance, setPerformance] = useState(null)
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect (() => {
      async function getDatas() {
        const { user, activities, sessions, performance, error } = await getData(id);
        if(user && activities && sessions && performance) {
          setActivities(activities)
          setUser(user)
          setPerformance(performance)
          setSessions(sessions)
          setLoading(false)
        }
        if(error) {
          setErr(error)
          setLoading(false)
        }
    }
      getDatas()
    })
    
    if(loading) {
      return <div>Loading...</div>
    } else {
      if (err) {
        return(
            <div className={styles.error}>{err}</div>
        )
      } else {
        const {newPerformance, newSessions} = dataModel({sessions, performance})
        return (
          <>
          <UserPage user={user}/>
          <ActivityChart id={id} activities = {activities}/>
          <div className={styles.container}>
          <SessionChart id={id} sessions={newSessions}/>
          <PerformanceChart id={id} performance={newPerformance}/>
          <ScoreChart id={id} user={user}/>
          </div>
          </>
        );
      }
  }
}

export default User;