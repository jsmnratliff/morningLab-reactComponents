import React, { useState } from "react";
import { setSourceMapRange } from "typescript";

function NameGenerator() {

  const [names, setNames] = useState([
    'Harry Potter',
    'Hermione Granger',
    'Ron Weasley',
    'Albus Dumbledore',
    'Severus Snape',
    'Rubeus Hagrid',
    'Sirius Black',
    'Remus Lupin',
    'Ginny Weasley',
    'Neville Longbottom',
    'Luna Lovegood',
    'Draco Malfoy',
    'Bellatrix Lestrange',
    'Voldemort (Tom Riddle)',
    'Dobby',
    'Fred Weasley',
    'George Weasley',
    'Molly Weasley',
    'Arthur Weasley',
    'Lucius Malfoy',
  ])
 
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random()* names.length)) 
  const handleClick=() => {
    setRandomIndex((Math.floor(Math.random()* names.length)))
  };
  return (
    <div>
      <h1>Pick Your Fighter</h1>
      <div>{names[randomIndex]}</div>
      <button onClick={handleClick}>click here</button>
      </div>
  );
}

export default NameGenerator;