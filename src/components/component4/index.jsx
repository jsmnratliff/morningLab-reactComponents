import React, { useState } from 'react';

function AddNames() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Enter the Reaping</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Katniss Everdeen"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddNames;