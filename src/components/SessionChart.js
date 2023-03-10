import React from "react";
import getAverageSession from "../hooks/getAverageSession";
import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts"
import styles from "../assets/styles/SessionChart.module.css"
import PropTypes from 'prop-types'

const SessionChart = ({id}) => {
let {sessions} = getAverageSession(id)

if(sessions.length === 7) {
    sessions.unshift(
        {day: 0,
        sessionLength: sessions[0].sessionLength - 5}
    )
    sessions.push(
        {day: 8,
        sessionLength: sessions[7].sessionLength + 5}
    )
}

const dateTickFormatter = (tick) => {
    let date;
    switch(tick) {
        case 1:
            date = "L";
            break;
        case 2:
            date = "M";
            break;
        case 3:
            date = "M";
            break;
        case 4:
            date = "J";
            break;
        case 5:
            date = "V";
            break;
        case 6:
            date = "S";
            break;
        case 7:
            date = "D";
            break;
        default:
        date = null;
    }
    return date;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  
    return null;
  };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
            Durée moyenne des sessions
            </div>
            <div className={styles.rectangle}></div>
            <LineChart width={280} height={180} data={sessions} margin={{left: -20}}>
            <defs>
            <linearGradient id="colorUv">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
            </defs>
            <XAxis 
            ontFamily={'Roboto, sans-serif'} 
            fontSize={12}
            dataKey="day" 
            tickFormatter={dateTickFormatter} 
            tickLine={false} axisLine={false} 
            tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
            />
            <YAxis hide/>
            <Tooltip 
            cursor={false} 
            wrapperStyle={{ outline: "none" }} 
            content={<CustomTooltip />} 
            contentStyle={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}
            />
            <Line
            connectNulls 
            type="monotone" 
            dataKey="sessionLength" 
            strokeWidth={2} dot={false}
            stroke="url(#colorUv)"
            activeDot={{ stroke: 'rgba(255, 255, 255, 0.198345)', strokeWidth: 10 }}
            />
            </LineChart>
        </div>
    )
}

SessionChart.propTypes = {
    id: PropTypes.string
}

export default SessionChart