import { useState } from 'react';

export const useInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compound, setCompound] = useState('12');
  const [simpleResult, setSimpleResult] = useState(null);
  const [compoundResult, setCompoundResult] = useState(null);

  const calculateSimpleInterest = () => {
    if (principal && rate && time) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseFloat(time);
      
      const interest = p * r * t;
      const total = p + interest;
      
      setSimpleResult({ interest: interest.toFixed(2), total: total.toFixed(2) });
    }
  };

  const calculateCompoundInterest = () => {
    if (principal && rate && time && compound) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseFloat(time);
      const n = parseFloat(compound);
      
      const amount = p * Math.pow((1 + r / n), n * t);
      const interest = amount - p;
      
      setCompoundResult({ interest: interest.toFixed(2), total: amount.toFixed(2) });
    }
  };

  const clear = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setCompound('12');
    setSimpleResult(null);
    setCompoundResult(null);
  };

  return {
    principal, setPrincipal,
    rate, setRate,
    time, setTime,
    compound, setCompound,
    simpleResult,
    compoundResult,
    calculateSimpleInterest,
    calculateCompoundInterest,
    clear
  };
};