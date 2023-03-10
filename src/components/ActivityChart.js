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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
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
      width={800}
      height={250}
      data={activities}
      barSize={7}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis 
      dataKey="day" 
      scale="point" 
      stroke="#9B9EAC" 
      fontFamily={'Roboto, sans-serif'}
      fontSize={14}
      fontWeight={500}
      tickFormatter={dateTickFormatter} 
      tickLine={false} 
      padding={{ left: 9, right: 9 }}
      tickCount={10}
       />
      <YAxis yAxisId="left" tickCount={3} dataKey="calories" orientation="left" hide textAnchor="start"/>
      <YAxis 
        yAxisId="right" 
        dataKey="kilogram" 
        orientation="right" 
        tickCount={3} 
        type="number" 
        axisLine={false}
        tickLine={false}
        domain={['dataMin - 1','','dataMax + 1']}
        fontFamily={'Roboto, sans-serif'}
        fontSize={14}
        fontWeight={500}
      />
      <Tooltip 
      wrapperStyle={{ outline: "none" }} 
      content={<CustomTooltip />} 
      contentStyle={{backgroundColor:"rgba(0, 0, 0, 0.1)"}}
      position={{
        y: 30
      }}
      />
      <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]}>
      </Bar> 
      <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
    </BarChart>
    </div>
  )
}

export default ActivityChart
