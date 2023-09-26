import React from 'react';
import "./styles.css";
import CounterWithText from './components/component1/';
import TextInputDisplay from './components/component2';
import NameGenerator from './components/component3';
import AddNames from './components/component4';
import ForceToggle from './components/component5';

export default function App() {
  return (
    <div className="App">
      <div className="flex-row " style={{flexDirection: "column"}}>
        <h1>Level: Medium</h1>
        <img className="image" src="./assets/work1.jpg" alt="work" />
      </div>
      <div className="easy flex-row"  style={{flexDirection: "column"}}>
        <div className="component-container purple">
          <h1>component 1</h1>
          <CounterWithText />
        </div>
        <div className="component-container burnt-orange">
          <h1>component 2</h1>
          <TextInputDisplay />
        </div>
        <div className="component-container green">
          <h1>component 3</h1>
          <NameGenerator />
        </div>
        <div className="component-container maroon">
          <h1>component 4</h1>
          <AddNames />
        </div>
        <div className="component-container powderblue">
          <h1>component 5</h1>
          <ForceToggle />
        </div>
        <div className="component-container grey">
          <h1>component 6</h1>
          {/* put component4 RIGHT here */}
        </div>
      </div>
     
      </div>

  );
}
