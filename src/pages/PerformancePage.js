import React from "react"

const PerformancePage = ({data}) => {
    const performances = Object.entries(data.kind).map(([key, value]) => {
        return (
            <td key={key}>{value}</td>
        )
        }
     );
     const values = data.data.map((data, index) => {
        return (
            <td key={index}>{data.value}</td>
        )
        }
     );
   return (
     <>
    <table>
    <thead>
        <tr>
            <th>Kind</th>
            {performances}
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Value</th>
        {values}
        </tr>
    </tbody>
   </table> 
     </>
   )
}
export default PerformancePage