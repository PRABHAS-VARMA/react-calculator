// CalculatorDisplay.jsx
import React from 'react';

const CalculatorDisplay = ({ value }) => (
  <input type="text" value={value} readOnly />
);

export default CalculatorDisplay;
