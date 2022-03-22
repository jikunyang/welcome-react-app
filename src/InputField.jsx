import React, { Component } from "react";
import { Link, useNavigate } from 'react-router-dom';



export default class InputField extends React.Component {

  constructor(props){
    super(props)
    this.state={
        name:""
    };
}
    
    
    handleChange = event =>{
        //console.log(event.target.value);
        this.setState({ name: event.target.value});
    }
    handleSubmit = (event) => {
      const navigate = useNavigate();

        event.preventDefault();
        this.navigate(
          '/welcome', 
          { 
            state: 
            { name:this.state}
          
        });
      }
    render(){
        const {name} = this.state
        return (
            <div>
                <p>
                   Enter your name here. We don't steal data. 
                </p>
                <p>name is : {name}</p>
              <input value={this.state.name} onChange={this.handleChange} />
              
              <button onClick={this.handleSubmit}>
                  submit
              </button>
            </div>
          );
    }
  
}
