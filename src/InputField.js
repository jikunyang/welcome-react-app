import React from 'react';

export default class InputField extends React.Component {
    state={
        name:""
    }
    handleChange = event =>{
        //console.log(event.target.value);
        this.setState({ name: event.target.value});
    }
    render(){
        return (
            <div>
              <input value={this.state.name} onChange={this.handleChange} />
              
            </div>
          );
    }
  
}
