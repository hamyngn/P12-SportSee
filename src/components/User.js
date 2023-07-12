import React from "react";
import { useParams } from "react-router";
import getData from "../services/getData";
import UserPage from "../pages/UserPage";
import ActivityChart from "./ActivityChart";
import SessionChart from "./SessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";
import styles from "../assets/styles/User.module.css"

const User = () => {
    let {id} = useParams();
    const { user, activities, sessions, performance, error, loading } = getData(id);

    if(loading) {
      return <div>Loading...</div>
    } else {
      if (error) {
        return(
            <div className={styles.error}>{error}</div>
        )
      } else {
        return (
          <>
          <UserPage user={user}/>
          <ActivityChart id={id} activities = {activities}/>
          <div className={styles.container}>
          <SessionChart id={id} sessions={sessions}/>
          <PerformanceChart id={id} performance={performance}/>
          <ScoreChart id={id} user={user}/>
          </div>
          </>
        );
    }
  }
}

export default User;