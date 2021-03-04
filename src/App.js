import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Items from './Items';
import RemoveLastItem from './DeleteItem';


class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState((prevState)=>({
     items: [...prevState.items, item]
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <Form addNewItem={this.addItem} />
        <RemoveLastItem LastItemToDelete={this.deleteLastItem} isTheListEmpty={this.noItemsFound} />
	     <Items items = {this.state.items} /> 
      </div>
    );
  }
}

export default App;
