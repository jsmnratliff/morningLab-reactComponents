import React, {useState} from 'react';

function TextInputDisplay() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowTextClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div>
      <h2>Who Loves Orange Soda</h2>
      <input
        type="text"
        placeholder="Kel Loves Orange Soda"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleShowTextClick}>Show Text On Screen</button>
      <div>
        <p>{displayText}</p>
      </div>
    </div>
  );
}

export default TextInputDisplay;