import React, { Component } from "react";
import { Link, useLocation } from 'react-router-dom';
import Welcome from "./Welcome";


export default class InputField extends React.Component {

  constructor(props){
    super(props)
    this.state={
        name:"",
        ifSubmit:false
    };
}
    
    
    handleChange = event =>{
        //console.log(event.target.value);
        this.setState({ name: event.target.value});
    }
    handleSubmit = (event) => {
      // const navigate = useNavigate();
      //   event.preventDefault();
      //   this.navigate(
      //     '/welcome', 
      //     { 
      //       state: 
      //       { name:this.state}
          
      //   });
      //const location = useLocation();
        this.setState({ifSubmit:true});
      }
      handleWelcome = () =>{
        if(this.state.ifSubmit){
          return <Welcome name ={this.state.name}/>
        }else{
          return null
        }
       
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
             
              {this.handleWelcome()}
            </div>
          );
    }
  
}
