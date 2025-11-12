import React, { useEffect } from 'react';
import { useCalculator } from '../hooks/useCalculator.js';
import Display from './Display.jsx';
import ButtonGrid from './ButtonGrid.jsx';
import History from './History.jsx';

const Calculator = () => {
  const {
    displayValues,
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
  } = useCalculator();

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      
      if (e.key === 'Escape') {
        clear();
      } else if (e.key === 'Enter') {
        calculate();
      } else if (e.key === 'Backspace') {
        backspace();
      } else if (e.key === '*') {
        handleOperator('*', '×');
      } else if (/[0-9]/.test(e.key)) {
        handleNumber(parseInt(e.key));
      } else if (['.', '+', '/', '-', '(', ')', '^'].includes(e.key)) {
        const displayMap = {
          '.': '.',
          '+': '+',
          '/': '/',
          '-': '−',
          '(': '(',
          ')': ')',
          '^': '^'
        };
        const calcMap = {
          '.': '.',
          '+': '+',
          '/': '/',
          '-': '-',
          '(': '(',
          ')': ')',
          '^': '**'
        };
        handleOperator(calcMap[e.key], displayMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNumber, handleOperator, backspace, clear, calculate]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-6xl p-5 animate-fadeIn hover:shadow-3xl transition-shadow duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
          {/* Display and Buttons - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-4">
            <Display 
              displayValue={displayValues}
              result={result}
              isDegMode={isDegMode}
              onToggleDegRad={toggleDegRad}
            />
            <ButtonGrid
              onNumber={handleNumber}
              onOperator={handleOperator}
              onFunction={handleFunction}
              onExp={handleExp}
              onSign={handleSign}
              onMemory={handleMemory}
              onMemoryRecall={handleMemoryRecall}
              onAns={handleAns}
              onBackspace={backspace}
              onClear={clear}
              onCalculate={calculate}
              onToggleDegRad={toggleDegRad}
            />
          </div>
          
          {/* History - Takes 1 column */}
          <div className="lg:col-span-1 h-full min-h-[400px] lg:min-h-[600px]">
            <History
              history={history}
              onClearHistory={clearHistory}
              onLoadFromHistory={loadFromHistory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;