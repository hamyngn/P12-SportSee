import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import styles from "../assets/styles/PerformanceChart.module.css"
import PropTypes from 'prop-types'

const PerformanceChart = ({id, performance}) => {
    let mergedData;
    let reverseData;

    const kind = performance.kind;
    kind[1] = "Cardio";
    kind[2] = "Energy";
    kind[3] = "Endurance";
    kind[4] = "Force";
    kind[5] = "Vitesse";
    kind[6] = "Intensité";
    
    mergedData = performance.data.map((i)=> {
        for(let j = 0; j < Object.keys(kind).length; j += 1) {
            if(i.kind.toString() === Object.keys(kind)[j]){
                i.kind = Object.values(kind)[j];
            }
        }
        return i;
    })
    reverseData = mergedData.reverse();

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
            <PolarGrid gridType="polygon" radialLines={false}/>
            <PolarAngleAxis dataKey="kind"
            stroke="rgba(255, 255, 255, 1)"
            tickLine={false}
            />
            <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)"/>
            </RadarChart>
        </div>
    )
}

PerformanceChart.propTypes = {
    id: PropTypes.string.isRequired
}

export default PerformanceChart;