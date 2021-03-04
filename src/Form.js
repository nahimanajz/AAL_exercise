import React from 'react';
import PropTypes from 'prop-types';

 class Form extends React.Component{
  state = { value: ''};
   
inputChangeHandler(newText){
	 this.setState(()=>({
      value:newText
     }))	 
}
 inputHasNoValue =() => this.state.value === '';

submitRecord =(e)=> {
  e.preventDefault();
 this.props.addNewItem(this.state.value);
}

render() {
	return (
 	<form onSubmit={this.submitRecord}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={(e)=>this.inputChangeHandler(e.target.value)}
          />
          <button disabled={this.inputHasNoValue()}>Add</button>
     </form>
 )
} 
}
Form.propTypes= {
addNewItem: PropTypes.func.isRequired
};

export default Form;