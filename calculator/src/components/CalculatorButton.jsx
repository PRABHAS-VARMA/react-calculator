// CalculatorButton.jsx
import React from 'react';

const CalculatorButton = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

export default CalculatorButton;
