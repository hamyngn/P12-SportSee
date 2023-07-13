import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"
import styles from "../assets/styles/PerformanceChart.module.css"
import PropTypes from 'prop-types'

const PerformanceChart = ({id, performance}) => {

    return (
        <div id="radar" className={styles.container}>
            <RadarChart 
            className={styles.radar}
            width={255} 
            height={255} 
            data={performance} 
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