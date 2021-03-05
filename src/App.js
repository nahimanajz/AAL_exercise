import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Users from './Users';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
  	users: [],
   
  };
 enableButton =()=> {
   const games =Math.floor(Math.random() * 10);
 this.setState((prevState)=> ({
  games: [prevState.users, games] 
 }))
 }
 addUser =(user) => {
   if(this.isUserExist(user)) {
    	alert(`${user.userName} is already exist Please try another username `);
   } else {
        this.setState((prevState)=> ({
        users: [...prevState.users, user]
      }));
   }
  
 }
isUserExist=(user)=> this.state.users.find((filteredUser) => filteredUser.userName === user.userName);
render() {
   console.log(this.state.users);
    return (
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <main className="main">
                <Signup onAddUser={this.addUser} />
				<Users users={this.state.users} games={this.state.games} toggleText={this.enableButton} />
                
            </main>
      </div>
    );
   
  }
  
}

export default App;
