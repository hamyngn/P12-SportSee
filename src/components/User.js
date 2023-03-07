import React from "react";
import { useParams } from "react-router";
import getUserHook from "../hooks/getUserHook";
import UserPage from "../pages/UserPage";
import ActivityChart from "./ActivityChart";
import SessionChart from "./SessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";
import styles from "../assets/styles/User.module.css"

const User = () => {
    let {id} = useParams();
    let {user, loading} = getUserHook(id);

    if (loading) {
      return(
          <div>Loading...</div>
      )
    } else {
      return (
          <>
          <UserPage user={user}/>
          <ActivityChart id={id}/>
          <div className={styles.container}>
          <SessionChart id={id}/>
          <PerformanceChart id={id} />
          <ScoreChart id={id} />
          </div>
          </>
        );
    } 
}

export default User;