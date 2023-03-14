import React from "react";
import PropTypes from 'prop-types'

const AverageSessionPage = ({sessions}) => {
    const sessionsDetails = sessions.map((session, index) => {
        return (
           <tr key={index}>
              <td>{session.day} </td>
              <td>{session.sessionLength} </td>
           </tr>
        )
        }
     );
   return (
     <>
     <table>
     <thead>
        <tr>
        <th>Day</th>
        <th>Session length</th>
        </tr>
     </thead>
     <tbody>
        {sessionsDetails}
     </tbody>
     </table> 
     </>
   )
}

AverageSessionPage.propTypes = {
   sessions: PropTypes.array.isRequired
}

export default AverageSessionPage;