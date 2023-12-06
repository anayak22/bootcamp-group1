import './Aram.css'
import React from 'react';
import { useState, useEffect } from 'react';

function Aram() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (answer.toLowerCase() === 'r') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [answer]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className="AppAram">
      <h1 className="heading">Hi, my name is Aram</h1>
      <h2 className="heading">My favorite movies are:</h2>
      <ul>
        <li>The Godfather</li>
        <li>Pirates of the Caribbean, At World's End</li>
        <li>Antman: Quantumania</li>
      </ul>
      <h2 className="heading">My hobbies are:</h2>
      <ul>
        <li>Soccer</li>
        <li>Swimming</li>
        <li>Writing</li>
      </ul>
      <h2 className="heading" id="riddle">
        I love riddles, so solve this one: What is seen in the middle of March
        and April that can’t be seen at the beginning or end of either month?
      </h2>
      <input type="text" value={answer} onChange={handleInputChange} />
      {isCorrect && <p style = {{textAlign:'center', fontStyle:'normal'}}>Congratulations! You solved the riddle.</p>}
    </div>
  );
}
export default Aram;