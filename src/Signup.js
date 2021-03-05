import React from 'react';
import PropTypes from 'prop-types';


class Signup extends React.Component { 
  state = {
    userName: '',
    firstName: '',
    lastName: '',
 };
toggleButton = () => this.state.userName.length===0 || this.state.firstName.length===0 || this.state.lastName.length ===0;

   setUserName = username => {
    this.setState(() => ({
    		userName: username
    }))
   };
	setFirstName = (firstName)=> {
      
   this.setState(()=> ({
    	firstName: firstName
    })) 
      
    };
	 setLastName= (lastName)=> {       
      this.setState(()=> ({
          lastName: lastName
      }))

    };
  submitProfile = e => {
    const { userName, firstName, lastName } = this.state; 
      	e.preventDefault();
    	this.props.onAddUser({userName, firstName, lastName, games:0});
      };
 render () { 
   const { userName, firstName, lastName } = this.state; 
   return (
 	  <div className="form">
         <h2>Register a User</h2>
           <form onSubmit={this.submitProfile}>
              <input placeholder="FirstName" value={firstName} onChange={(e)=>this.setFirstName(e.target.value)} />
              <input placeholder="LastName" value={lastName} onChange={(e)=>this.setLastName(e.target.value)} />
              <input placeholder="Username" value={userName} onChange={(e)=>this.setUserName(e.target.value)} />

              <button type="submit" disabled={this.toggleButton()}> Sign up </button> 
       	   </form>
           
	   </div>
	)
 }
}
Signup.propTypes = {
 onAddUser: PropTypes.func.isRequired 
}; 
export default Signup;