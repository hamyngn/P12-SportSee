import React from "react";
import getAverageSession from "../hooks/getAverageSession";
import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts"
import styles from "../assets/styles/SessionChart.module.css"

const SessionChart = ({id}) => {
let {sessions} = getAverageSession(id)

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
            <LineChart width={245} height={180} data={sessions}
            margin={{ top: 0, right: 0, left: 20, bottom: 0 }}>
            <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                <stop offset="30%" stopColor="#rgba(255, 255, 255, 1)" stopOpacity={0.5}  />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.106534" />
            </linearGradient>
            </defs>
            <XAxis fontFamily={'Roboto, sans-serif'} fontSize={12}
            dataKey="day" tickFormatter={dateTickFormatter} tickLine={false} axisLine={false} tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}/>
            <YAxis hide/>
            <Tooltip cursor={false} wrapperStyle={{ outline: "none" }} content={<CustomTooltip />}/>
            <Line id="line" connectNulls type="monotone" dataKey="sessionLength" 
            strokeWidth={2} dot={false}
            fill="url(#colorUv)"
            activeDot={{ stroke: 'rgba(255, 255, 255, 0.198345)', strokeWidth: 10 }}
            />
            </LineChart>
        </div>
    )
}

export default SessionChart