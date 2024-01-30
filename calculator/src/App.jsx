import React, { useState } from 'react';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    switch (value) {
      case '=':
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput('Error');
        }
        break;
      case 'AC':
        setInput('');
        break;
      case 'DEL':
        setInput(input.slice(0, -1));
        break;
      default:
        setInput(input + value);
        break;
    }
  };
  

  const buttonData = [
    'AC', 'DEL', '=',
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3', '-',
    '0', '+', '/', '*'
  ];

  return (
    <div className="calculator">
      <CalculatorDisplay value={input} />
      <div className="buttons">
        {buttonData.map((label) => (
          <CalculatorButton key={label} label={label} onClick={() => handleClick(label)} />
        ))}
      </div>
    </div>
  );
};

export default App;
