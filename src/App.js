import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    userName: '',
    firstName: '',
    lastName: '',
  	users: []
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
  submitProfile = e =>{
    const {userName, firstName, lastName} = this.state; 
    const user = {userName, firstName, lastName} ;
    console.log(user);
      	e.preventDefault();
    this.setState((prevState)=> {
     users: [...prevState.users, {firstName, lastName, userName}]
    });
      };
  render() {
    const {userName, firstName, lastName} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<main className="main">
			<div className="form">
					<h2>Register a User</h2>
				<form onSubmit={this.submitProfile}>
    				
					<input placeholder="FirstName" value={firstName} onChange={(e)=>this.setFirstName(e.target.value)} />
					<input placeholder="LastName" value={lastName} onChange={(e)=>this.setLastName(e.target.value)} />
					<input placeholder="Username" value={userName} onChange={(e)=>this.setUserName(e.target.value)} />
					

					/*<button type="submit" disabled={this.toggleButton()}> Sign up </button> */
					<button type="submit"> Sign up </button>
				</form>
			</div>

			<div className="list">
					<h2>List of Users</h2> 
					<ul>
						<li>username played X number of games</li>
						<li>Janvier played 0 games</li>
						<li>Fils played 9  games</li>
					</ul>
					<button> Hide / show </button>
			</div>
		</main>
      </div>
    );
  }
}

export default App;
