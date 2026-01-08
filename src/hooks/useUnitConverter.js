import { useState } from 'react';

export const useUnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const units = {
    length: {
      m: { name: 'Metro', factor: 1 },
      cm: { name: 'Centímetro', factor: 100 },
      mm: { name: 'Milímetro', factor: 1000 },
      km: { name: 'Quilômetro', factor: 0.001 },
      in: { name: 'Polegada', factor: 39.3701 },
      ft: { name: 'Pé', factor: 3.28084 }
    },
    weight: {
      kg: { name: 'Quilograma', factor: 1 },
      g: { name: 'Grama', factor: 1000 },
      lb: { name: 'Libra', factor: 2.20462 },
      oz: { name: 'Onça', factor: 35.274 }
    },
    temperature: {
      c: { name: 'Celsius', factor: 1 },
      f: { name: 'Fahrenheit', factor: 1 },
      k: { name: 'Kelvin', factor: 1 }
    }
  };

  const convertTemperature = (value, from, to) => {
    let celsius = value;
    if (from === 'f') celsius = (value - 32) * 5/9;
    if (from === 'k') celsius = value - 273.15;
    
    if (to === 'c') return celsius;
    if (to === 'f') return celsius * 9/5 + 32;
    if (to === 'k') return celsius + 273.15;
  };

  const convert = () => {
    if (!inputValue) return;
    
    const value = parseFloat(inputValue);
    let convertedValue;

    if (category === 'temperature') {
      convertedValue = convertTemperature(value, fromUnit, toUnit);
    } else {
      const fromFactor = units[category][fromUnit].factor;
      const toFactor = units[category][toUnit].factor;
      convertedValue = (value / fromFactor) * toFactor;
    }

    setResult(convertedValue.toFixed(6).replace(/\.?0+$/, ''));
  };

  const clear = () => {
    setInputValue('');
    setResult('');
  };

  return {
    category, setCategory,
    fromUnit, setFromUnit,
    toUnit, setToUnit,
    inputValue, setInputValue,
    result,
    units,
    convert,
    clear
  };
};