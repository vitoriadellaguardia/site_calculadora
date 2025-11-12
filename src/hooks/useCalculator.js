import { useState, useCallback } from 'react';

export const useCalculator = () => {
  const [displayValues, setDisplayValues] = useState([]);
  const [calculateValues, setCalculateValues] = useState([]);
  const [result, setResult] = useState('=');
  const [ans, setAns] = useState(0);
  const [memory, setMemory] = useState(0);
  const [isDegMode, setIsDegMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [expMode, setExpMode] = useState(false);

  const factorial = (n) => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
      if (result === Infinity) return Infinity;
    }
    return result;
  };

  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const toDegrees = (radians) => radians * (180 / Math.PI);
  const randomNumber = () => Math.random();

  const updateDisplay = useCallback(() => {
    return displayValues.join('');
  }, [displayValues]);

  const addToCalculation = (calcValue, dispValue) => {
    setCalculateValues(prev => [...prev, calcValue]);
    setDisplayValues(prev => [...prev, dispValue]);
  };

  const handleNumber = (num) => {
    addToCalculation(num, num);
  };

  const handleOperator = (op, display) => {
    if (expMode && op !== '.' && op !== 'sign') {
      setCalculateValues(prev => [...prev, ')']);
      setDisplayValues(prev => [...prev, ')']);
      setExpMode(false);
    }
    addToCalculation(op, display);
  };

  const handleFunction = (func, display, needsParens = true) => {
    if (expMode) {
      setCalculateValues(prev => [...prev, ')']);
      setDisplayValues(prev => [...prev, ')']);
      setExpMode(false);
    }
    
    let calcFunc = func;
    if (func.includes('sin') || func.includes('cos') || func.includes('tan')) {
      if (func.startsWith('a')) {
        calcFunc = isDegMode ? `toDegrees(Math.${func}(` : `Math.${func}(`;
      } else {
        calcFunc = isDegMode ? `Math.${func}(toRadians(` : `Math.${func}(`;
      }
    }
    
    addToCalculation(calcFunc, display);
    if (needsParens) {
      addToCalculation('(', '(');
    }
  };

  const handleExp = () => {
    addToCalculation('*10**(', '×10^(');
    setExpMode(true);
  };

  const handleSign = () => {
    let index = calculateValues.length - 1;
    const newCalc = [...calculateValues];
    const newDisp = [...displayValues];
    
    while (index >= 0 && (newCalc[index] === '.' || typeof newCalc[index] === 'number')) {
      index--;
    }
    
    if (newCalc[index] !== '-' && newCalc[index] !== '+') {
      newCalc.splice(index + 1, 0, '-');
      newDisp.splice(index + 1, 0, '-');
    } else if (newCalc[index] === '-') {
      newCalc[index] = '+';
      newDisp[index] = '+';
    } else if (newCalc[index] === '+') {
      newCalc[index] = '-';
      newDisp[index] = '-';
    }
    
    setCalculateValues(newCalc);
    setDisplayValues(newDisp);
  };

  const handleMemory = (operation) => {
    if (calculateValues.length === 0) return;
    
    const expr = calculateValues.join('');
    try {
      // eslint-disable-next-line no-new-func
      const value = new Function('factorial', 'randomNumber', 'toRadians', 'toDegrees', 'Math', `return ${expr}`)(
        factorial, randomNumber, toRadians, toDegrees, Math
      );
      if (operation === 'plus') {
        setMemory(prev => prev + value);
      } else if (operation === 'minus') {
        setMemory(prev => prev - value);
      }
    } catch (e) {
      console.log('Memory error');
    }
  };

  const handleMemoryRecall = () => {
    addToCalculation(memory, 'MR');
  };

  const handleAns = () => {
    addToCalculation(ans, 'Ans');
  };

  const backspace = () => {
    if (displayValues.length === 0) return;
    
    const lastDisplay = displayValues[displayValues.length - 1];
    if (lastDisplay === ')' && expMode) {
      setExpMode(false);
    }
    if (lastDisplay === '×10^(') {
      setExpMode(false);
    }
    
    setCalculateValues(prev => prev.slice(0, -1));
    setDisplayValues(prev => prev.slice(0, -1));
  };

  const clear = () => {
    setCalculateValues([]);
    setDisplayValues([]);
    setResult('=');
    setExpMode(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const countParenthesesAndFix = (expression) => {
    const openCount = (expression.match(/\(/g) || []).length;
    const closeCount = (expression.match(/\)/g) || []).length;
    const diff = openCount - closeCount;
    
    return expression + ')'.repeat(Math.max(0, diff));
  };

  const evaluateExpression = (expr) => {
    // eslint-disable-next-line no-new-func
    return new Function('factorial', 'randomNumber', 'toRadians', 'toDegrees', 'Math', `return ${expr}`)(
      factorial, randomNumber, toRadians, toDegrees, Math
    );
  };

  const calculate = () => {
    if (expMode) {
      setCalculateValues(prev => [...prev, ')']);
      setExpMode(false);
    }
    
    let expression = calculateValues.join('');
    
    // Fix implicit multiplication
    const found = expression.match(/\d+(?=\()|d+(?=M)/g);
    if (found) {
      expression = expression.replace(/\d+(?=\()|d+(?=M)/g, `(${found})*`);
    }
    expression = expression.replace(/\)(?=\d+)/g, ")*");
    expression = expression.replace(/\)\(/g, ")*(");
    
    expression = countParenthesesAndFix(expression);
    expression = expression.replace(/\s/g, '');
    
    try {
      const calcResult = evaluateExpression(expression);
      setResult(`= ${calcResult}`);
      setAns(calcResult);
      
      // Add to history
      const equation = displayValues.join('');
      if (calcResult !== undefined && !isNaN(calcResult) && calcResult !== Infinity) {
        setHistory(prev => [{
          equation,
          result: calcResult,
          displayValues: [...displayValues],
          calculateValues: [...calculateValues]
        }, ...prev]);
      }
      
      return calcResult;
    } catch (err) {
      setResult('= Error');
      return 'Error';
    }
  };

  const loadFromHistory = (historyItem) => {
    setCalculateValues(historyItem.calculateValues);
    setDisplayValues(historyItem.displayValues);
    setResult(`= ${historyItem.result}`);
  };

  const toggleDegRad = () => {
    setIsDegMode(prev => !prev);
  };

  return {
    displayValues: updateDisplay(),
    result,
    isDegMode,
    history,
    handleNumber,
    handleOperator,
    handleFunction,
    handleExp,
    handleSign,
    handleMemory,
    handleMemoryRecall,
    handleAns,
    backspace,
    clear,
    clearHistory,
    calculate,
    loadFromHistory,
    toggleDegRad
  };
};