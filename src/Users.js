import React from 'react';
import PropTypes from 'prop-types';

const Users =({users, toggleText})=> { 
 
  const toggleShow= ()=>
  
    document.querySelector("ul").classList.toggle("hide");
    
  
      
   return ( 
   		  <div className="list">
             <h2>List of Users</h2> 
     		<ul>
               {users && users.map(user=> <li key={user.userName}> {user.userName} played {0} number of games </li>)}  
           </ul>
         <button onClick={toggleShow}> {} </button>
     </div>
   
  )
}
Users.propTypes = {
 users: PropTypes.arr,
  toggleText: PropTypes.func.isRequired
}; 
export default Users;