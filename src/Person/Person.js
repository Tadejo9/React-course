import React from 'react';

import './Person.css';
const person = props => {
return (
  <div className="Person">
    <p>My name is {props.name} and I am {props.age} years old.</p>
    <p>{props.children}</p>

    <div>
      <label>Enter your name:</label>
      <input type="text" onChange={props.changedName}></input>
    </div>

    <div>
      <label>Enter your age:</label>
      <input type="text" onChange={props.editAge}></input>
    </div>
  </div>
) 
}

export default person;