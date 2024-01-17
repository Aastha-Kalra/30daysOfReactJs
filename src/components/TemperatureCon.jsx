import React, { useState } from 'react';
import styled from 'styled-components';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertToKelvin = (celsius) => {
    return celsius + 273.15;
  };

  const handleInputChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    if (!isNaN(inputValue)) {
      setCelsius(inputValue);
    }
  };

  return (
    <ConverterContainer>
      <InputLabel data-testid="input-label">Enter temperature in Celsius:</InputLabel>
      <Input
        data-testid="input-element"
        type="number"
        value={celsius}
        onChange={handleInputChange}
      />
      <OutputLabel data-testid="output-label">Converted temperatures:</OutputLabel>
      <Output data-testid="output-string">
        {`Fahrenheit: ${convertToFahrenheit(celsius).toFixed(2)} °F, 
          Kelvin: ${convertToKelvin(celsius).toFixed(2)} K`}
      </Output>
    </ConverterContainer>
  );
};

export default TemperatureConverter;

const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const OutputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Output = styled.div`
  font-size: 16px;
`;
