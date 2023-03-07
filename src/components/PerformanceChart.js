import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import getPerformanceHook from "../hooks/getPerformanceHook";
import styles from "../assets/styles/PerformanceChart.module.css"

const PerformanceChart = ({id}) => {
    const {data, loading} = getPerformanceHook(id);
    let mergedData;
    let reverseData;

    if(!loading) {
        const kind = data.kind;
        kind[1] = "Cardio";
        kind[2] = "Energy";
        kind[3] = "Endurance";
        kind[4] = "Force";
        kind[5] = "Vitesse";
        kind[6] = "Intensité";
        
        mergedData = data.data.map((i)=> {
            for(let j = 0; j < Object.keys(kind).length; j += 1) {
                if(i.kind.toString() === Object.keys(kind)[j]){
                    i.kind = Object.values(kind)[j];
                }
            }
            return i;
        })
        reverseData = mergedData.reverse();
    }
    return (
        <div id="radar" className={styles.container}>
            <RadarChart 
            className={styles.radar}
            width={255} 
            height={255} 
            data={reverseData} 
            fontFamily={'Roboto, sans-serif'} 
            fontSize={12}
            margin={{top: 20, left: 30}}
            >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind"  />
            <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
            </RadarChart>
        </div>
    )
}
export default PerformanceChart;