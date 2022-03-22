import React from 'react';

export default class InputField extends React.Component {
    state={
        name:''
    }
    handleChange = event =>{
        console.log(event.target.value);
    }
    render(){
        return (
            <div>
              <input onChange={this.handleChange} type="text" id="name" name="name"/>
            </div>
          );
    }
  
}
