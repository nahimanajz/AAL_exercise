import React from 'react';
import './App.css';

export default function Form({value, handleChange}){

 return (
 	<form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
     </form>
 )
}

export default App;
