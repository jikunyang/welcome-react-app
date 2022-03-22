import React from 'react';

export default class InputField extends React.Component {
    state={
        name:""
    }
    handleChange = event =>{
        //console.log(event.target.value);
        this.setState({ name: event.target.value});
    }
    handleSubmit = () =>{
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <p>
                   Enter your name here. We don't steal data. 
                </p>
              <input value={this.state.name} onChange={this.handleChange} />
              <button onClick={this.handleSubmit}>submit</button>
            </div>
          );
    }
  
}
