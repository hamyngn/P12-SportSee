import React, { useEffect, useState }/* , { useState, useEffect }  */from "react";
import { useParams } from "react-router";
import UserPage from "../pages/UserPage";
import fetchData from "../utils/fetchData";
/* import axios from "axios"; */

const User = () => {
    let {id} = useParams();
    let [data, setData] = useState({})
        const apiData = fetchData('http://localhost:3000/user/'+id);
        setData(apiData)
    
    console.log(data) 
/*     let [data, setData] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                'http://localhost:3000/user/'+id
            );
            console.log(response.data.data)
            setData(response.data.data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);
      if(error) {
        return (
            <div>{error}</div>
        )
      } else if (loading) {
        return(
            <div>Loading...</div>
        )
      } else {
        return (
            <>
            <UserPage user={data}/>
            </>
            );
      }  */  
      return (
        <>
        <UserPage user={data}/>
        </>
        );     
}

export default User;