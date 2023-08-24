import { useState } from "react";



function TwoNumbers() {
  const [values, setValues] = useState({ random1: 0, random2: 0 });
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const generateRandomValues = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2 = Math.floor(Math.random() * 50);
    setValues({ random1, random2 });
    setResult(''); // Clear previous result
  };

  const guessTheNumber = () => {
    const sum = values.random1 + values.random2;
    if (parseInt(input) === sum) {
      setResult('You guessed right!');
    } else {
      setResult('Try Again');
    }
  };

  return (
    <div>
      <h1>Guess the Sum</h1>
      <p>Random Number 1: {values.random1}</p>
      <p>Random Number 2: {values.random2}</p>
      <button onClick={generateRandomValues}>Generate Random Numbers</button>
      <br />
      <label>
        Enter your guess:
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button onClick={guessTheNumber}>Check Guess</button>
      <p>{result}</p>
    </div>
  );
}

export default TwoNumbers;
