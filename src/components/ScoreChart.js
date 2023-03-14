import React from "react";
import { RadialBarChart, RadialBar } from "recharts"
import getUserHook from "../hooks/getUserHook";
import styles from "../assets/styles/ScoreChart.module.css"
import PropTypes from 'prop-types'

const ScoreChart = ({id}) => {
    let {user, loading} = getUserHook(id);
    let data;
    if(!loading) {
        if(user.todayScore === "undefined") {
            data = [
                {
                    todayScore: 1,
                },
                {
                    todayScore: user.score,
                }
            ]
        }
        data = [
            {
                todayScore: 1,
            },
            {
                todayScore: user.todayScore || user.score,
            }
        ]
    
    return (
        <div className={styles.container}>
        <span className={styles.title}>Score</span>
        <RadialBarChart 
        cx="50%"
        cy="35%"
        innerRadius='10%'
        outerRadius='120%'
        width={250} 
        height={250} 
        data={data} 
        barSize={10}
        startAngle={90} 
        endAngle={450}
        >
        <RadialBar dataKey='todayScore' fill="#FF0000" cornerRadius='50%'/>
        </RadialBarChart>
        <div className={styles.textContainer}>
          <span className={styles.percent}>{data[1].todayScore * 100}%</span>de votre <br></br> objectif
        </div>
        </div>
    )
}
}

ScoreChart.propTypes = {
    id: PropTypes.string.isRequired
}

export default ScoreChart;