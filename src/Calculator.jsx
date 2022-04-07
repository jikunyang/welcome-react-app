import React , { Component, State } from 'react';

export default function Calculator() {
   
const handleNumber = event =>{
        console.log(event.target.value);
        this.setState({ name: event.target.value});
    }

  return (
    <div>
      <div>
          <button onClick={handleNumber(1)}>1</button>
          <button>2</button>
          <button>3</button>
      </div>
      <div>
          <button>+</button>
          <button>-</button>
          <button>x</button>
          <button>/</button>
          <button>=</button>
      </div>
      <p>The result is:</p>
    </div>
  );
}
