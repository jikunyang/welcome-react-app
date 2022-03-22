import { render } from '@testing-library/react';
import React, { Component } from 'react';
import InputField from './InputField';

export default class Welcome extends Component {

render(){
    return (
        <div>
          <p>
           Welcome   
          </p>
          <p>{this.props.name.state.value}</p>
        </div>
        
    
      );
}
  
  
}
