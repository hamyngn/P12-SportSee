import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"
import getActivityHook from "../hooks/getActivityHook";
import styles from "../assets/styles/ActivityChart.module.css"

const ActivityChart = ({id}) => {
let {activities} = getActivityHook(id);

const dateTickFormatter = (tick) => {
  const date = new Date(tick);
  return date.getDate();
};

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <span className={styles.title}>Activité quotidienne</span>
        <div className={styles.key}>
        <div style = {{marginRight: "32px"}}><span className={styles.point}></span> Poids (kg)</div>
        <div><span className={styles.pointRed}></span> Calories brûlées (kCal)</div>
        </div>
      </div>
    <BarChart 
      margin= {{ top: 64, right: 0, bottom: 20, left: 40 }}
      width={820}
      height={250} 
      data={activities}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" stroke="#9B9EAC" tickFormatter={dateTickFormatter} tickLine={false} />
      <YAxis yAxisId="left" tickCount={3} dataKey="calories" orientation="left" hide/>
      <YAxis 
        yAxisId="right" 
        dataKey="kilogram" 
        orientation="right" 
        tickCount={3} 
        type="number" 
        axisLine={false}
        tickLine={false}
        domain={['dataMin - 1','auto', 'dataMax + 1']}
      />
      <Tooltip />
      <Bar barSize={7} yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
      <Bar barSize={7} yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
    </BarChart>
    </div>
  )
}

export default ActivityChart
