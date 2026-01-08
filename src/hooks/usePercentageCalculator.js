import { useState } from 'react';

export const usePercentageCalculator = () => {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');

  const calculatePercentageOf = () => {
    if (value && percentage) {
      const result = (parseFloat(value) * parseFloat(percentage)) / 100;
      setResult(result.toString());
    }
  };

  const calculateWhatPercent = () => {
    if (value && percentage) {
      const result = (parseFloat(value) / parseFloat(percentage)) * 100;
      setResult(result.toFixed(2) + '%');
    }
  };

  const calculatePercentageIncrease = () => {
    if (value && percentage) {
      const increase = (parseFloat(value) * parseFloat(percentage)) / 100;
      const result = parseFloat(value) + increase;
      setResult(result.toString());
    }
  };

  const calculatePercentageDecrease = () => {
    if (value && percentage) {
      const decrease = (parseFloat(value) * parseFloat(percentage)) / 100;
      const result = parseFloat(value) - decrease;
      setResult(result.toString());
    }
  };

  const clear = () => {
    setValue('');
    setPercentage('');
    setResult('');
  };

  return {
    value,
    setValue,
    percentage,
    setPercentage,
    result,
    calculatePercentageOf,
    calculateWhatPercent,
    calculatePercentageIncrease,
    calculatePercentageDecrease,
    clear
  };
};