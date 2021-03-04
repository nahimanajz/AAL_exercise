import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
   state = {
   		x: Math.floor(Math.random() * 100),
 		y: Math.floor(Math.random() * 100),
		z: Math.floor(Math.random() * 100),
     	p: Math.floor(Math.random() * 100) + this.x + this.y + this.z ,
        numOfQeuestion: 0,
        numCorrect:  0 
   };
   handleClick =() => {
     
     this.setState((prevState) => ({
       x:  Math.floor(Math.random() * 100),
       y:  Math.floor(Math.random() * 100),
       z:  Math.floor(Math.random() * 100),
       p:  prevState.x + prevState.y + prevState.z,
       numOfQeuestion: prevState.numOfQeuestion +1,
       numCorrect: prevState.p === prevState.x + prevState.y + prevState.z  ? prevState.numCorrect : prevState.numCorrect++
     })
    );

        }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.x} + ${this.state.y} + ${this.state.z} = ${this.state.p}`}</p>
          </div>
          <button onClick={this.handleClick}>True</button>
          <button onClick={this.handleClick}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numOfQeuestion}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
