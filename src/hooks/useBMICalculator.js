import { useState } from 'react';

export const useBMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState('');

  const getBMIClassification = (bmiValue) => {
    if (bmiValue < 18.5) {
      return { text: 'Abaixo do peso', color: 'text-blue-400' };
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return { text: 'Peso normal', color: 'text-green-400' };
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return { text: 'Sobrepeso', color: 'text-yellow-400' };
    } else if (bmiValue >= 30 && bmiValue < 35) {
      return { text: 'Obesidade grau I', color: 'text-orange-400' };
    } else if (bmiValue >= 35 && bmiValue < 40) {
      return { text: 'Obesidade grau II', color: 'text-red-400' };
    } else {
      return { text: 'Obesidade grau III', color: 'text-red-600' };
    }
  };

  const calculateBMI = () => {
    if (weight && height) {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height) / 100; // Convert cm to meters
      const bmiValue = weightNum / (heightNum * heightNum);
      
      setBmi(bmiValue.toFixed(1));
      setClassification(getBMIClassification(bmiValue));
    }
  };

  const clear = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setClassification('');
  };

  return {
    weight,
    setWeight,
    height,
    setHeight,
    bmi,
    classification,
    calculateBMI,
    clear
  };
};