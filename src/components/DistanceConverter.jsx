import React, { useState } from 'react';
export default function DistanceConverter(){
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('meters');
  const [fromValue, setFromValue] = useState('');
  const [convertedValue, setConvertedValue] = useState(null);

  const conversionFactors = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
  };

  const convertDistance = () => {
    const inputValue = parseFloat(fromValue);

    if (isNaN(inputValue)) {
      alert('Please enter a valid number for distance.');
      return;
    }

    const result = (inputValue * conversionFactors[fromUnit]) / conversionFactors[toUnit];
    setConvertedValue(result.toFixed(3) + ' ' + toUnit);
  };

  return (
    <div>
      <h1>Distance Converter</h1>

      {/* Select Elements for Units */}
      <label htmlFor="fromUnit">From Unit:</label>
      <select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        {Object.keys(conversionFactors).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>

      <label htmlFor="toUnit">To Unit:</label>
      <select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        {Object.keys(conversionFactors).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>

      {/* Number Input Field */}
      <label htmlFor="fromValue">Enter Distance:</label>
      <input type="number" id="fromValue" value={fromValue} onChange={(e) => setFromValue(e.target.value)} />

      {/* Convert Button */}
      <button onClick={convertDistance} id='convert'>Convert</button>

      {/* Result Display */}
      {convertedValue && <div id="outputValue">Converted Distance: {convertedValue}</div>}
    </div>
  );
};


