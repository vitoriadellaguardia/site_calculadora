import { useState } from 'react';

export const useBasicCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [justCalculated, setJustCalculated] = useState(false);

  const inputNumber = (num) => {
    if (justCalculated) {
      setDisplay(String(num));
      setExpression(String(num));
      setJustCalculated(false);
    } else if (waitingForOperand) {
      setDisplay(String(num));
      setExpression(prev => prev + num);
      setWaitingForOperand(false);
    } else {
      const newDisplay = display === '0' ? String(num) : display + num;
      setDisplay(newDisplay);
      setExpression(prev => prev === '0' ? String(num) : prev + num);
    }
  };

  const inputDecimal = () => {
    if (justCalculated) {
      setDisplay('0.');
      setExpression('0.');
      setJustCalculated(false);
    } else if (waitingForOperand) {
      setDisplay('0.');
      setExpression(prev => prev + '0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setExpression(prev => prev + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setExpression('');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setJustCalculated(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);
    const operatorSymbols = { '+': '+', '-': '-', '*': '×', '/': '÷' };

    if (justCalculated) {
      setExpression(display + ' ' + operatorSymbols[nextOperation] + ' ');
      setJustCalculated(false);
    } else {
      setExpression(prev => prev + ' ' + operatorSymbols[nextOperation] + ' ');
    }

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setExpression(prev => prev + ' = ' + newValue);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
      setJustCalculated(true);
    }
  };

  return {
    display: expression || display,
    inputNumber,
    inputDecimal,
    clear,
    performOperation,
    handleEquals
  };
};