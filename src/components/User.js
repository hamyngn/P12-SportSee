import React from "react";
import { useParams } from "react-router";
import getUserHook from "../hooks/getUserHook";
import UserPage from "../pages/UserPage";
import ActivityChart from "./ActivityChart";

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
          </>
        );
    } 
}

export default User;