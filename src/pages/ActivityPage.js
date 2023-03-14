import * as React from 'react';
import PropTypes from 'prop-types'

const ActivityPage = ({activities}) => {
   const sessions = activities.map((activity, index) => {
      return (
         <tr key={index}>
            <td>{activity.day} </td>
            <td>{activity.kilogram} </td>
            <td>{activity.calories} </td>
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
      <th>Kilogram</th>
      <th>Calories</th>
      </tr>
   </thead>
   <tbody>
      {sessions}
   </tbody>
   </table> 
   </>
 )
}

ActivityPage.propTypes = {
   activities: PropTypes.array.isRequired
}

export default ActivityPage;