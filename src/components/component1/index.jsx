import React, {useState} from 'react';

function CounterWithText () {
  const [count, setCount] = useState(0);

return (
  <div>
    <h2>10pts to Join The Dark Side</h2>
    <p>Force Points: {count}</p>
    <button onClick={() => setCount(count + 1)}>Yaaasss, Anakin!</button>
    <button onClick={() => setCount(count - 1)}>"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering"</button>

  </div>
    );
    }


export default CounterWithText;