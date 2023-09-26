import React, {useState} from 'react'; 

function ForceToggle() {

  const [force, setForce] = useState('light');

  const handleForce = () => {
    setForce(force === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`force-container ${force}-force`}>
      <h2>Use The Force</h2>
      <button onClick={handleForce}>Feel the Force</button>
      <div className="content">
        <p>This is the {force === 'light' ? 'light' : 'dark'} theme.</p>
      </div>
    </div>
  );
}

export default ForceToggle;