import React from 'react';
import Button from './Button.jsx';

const ButtonGrid = ({ 
  onNumber, 
  onOperator, 
  onFunction, 
  onExp, 
  onSign, 
  onMemory, 
  onMemoryRecall, 
  onAns, 
  onBackspace, 
  onClear, 
  onCalculate,
  onToggleDegRad 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl">
      <div className="grid grid-cols-5 grid-rows-10 gap-2 min-h-[500px]">
        {/* Row 1 */}
        <Button variant="special" onClick={() => onFunction('sin', 'sin')}>sin</Button>
        <Button variant="special" onClick={() => onFunction('cos', 'cos')}>cos</Button>
        <Button variant="special" onClick={() => onFunction('tan', 'tan')}>tan</Button>
        <Button variant="special" onClick={onToggleDegRad}>Deg/Rad</Button>
        <Button variant="delete" onClick={onBackspace}>⬅</Button>

        {/* Row 2 */}
        <Button variant="special" onClick={() => onFunction('asin', 'sin⁻¹')}>sin⁻¹</Button>
        <Button variant="special" onClick={() => onFunction('acos', 'cos⁻¹')}>cos⁻¹</Button>
        <Button variant="special" onClick={() => onFunction('atan', 'tan⁻¹')}>tan⁻¹</Button>
        <Button variant="special" onClick={() => onOperator('Math.PI', 'π')}>π</Button>
        <Button variant="special" onClick={() => onOperator('Math.E', 'e')}>e</Button>

        {/* Row 3 */}
        <Button variant="special" onClick={() => onOperator('**', '^')}>x<sup>y</sup></Button>
        <Button variant="special" onClick={() => onOperator('**(3)', '³')}>x³</Button>
        <Button variant="special" onClick={() => onOperator('**(2)', '²')}>x²</Button>
        <Button variant="special" onClick={() => onFunction('Math.exp(', 'e^')}>e<sup>x</sup></Button>
        <Button variant="special" onClick={() => onFunction('Math.pow(10,', '10^')}>10<sup>x</sup></Button>

        {/* Row 4 */}
        <Button variant="special" onClick={() => onFunction('Math.pow(', 'ʸ√')}>ʸ√x</Button>
        <Button variant="special" onClick={() => onFunction('Math.cbrt(', '³√')}>³√x</Button>
        <Button variant="special" onClick={() => onFunction('Math.sqrt(', '√')}>√x</Button>
        <Button variant="special" onClick={() => onFunction('Math.log(', 'ln')}>ln</Button>
        <Button variant="special" onClick={() => onFunction('Math.log10(', 'log')}>log</Button>

        {/* Row 5 */}
        <Button variant="special" onClick={() => onOperator('(', '(')}>(</Button>
        <Button variant="special" onClick={() => onOperator(')', ')')}>)</Button>
        <Button variant="special" onClick={() => onOperator('**(-1)', '⁻¹')}>1/x</Button>
        <Button variant="special" onClick={() => onOperator('/100', '%')}>%</Button>
        <Button variant="special" onClick={() => onFunction('factorial(', '!')}>n!</Button>

        {/* Row 6 */}
        <Button variant="number" onClick={() => onNumber(7)}>7</Button>
        <Button variant="number" onClick={() => onNumber(8)}>8</Button>
        <Button variant="number" onClick={() => onNumber(9)}>9</Button>
        <Button variant="special" onClick={() => onOperator('+', '+')}>+</Button>
        <Button variant="special" onClick={onAns}>Ans</Button>

        {/* Row 7 */}
        <Button variant="number" onClick={() => onNumber(4)}>4</Button>
        <Button variant="number" onClick={() => onNumber(5)}>5</Button>
        <Button variant="number" onClick={() => onNumber(6)}>6</Button>
        <Button variant="special" onClick={() => onOperator('-', '−')}>–</Button>
        <Button variant="special" onClick={() => onMemory('plus')}>M+</Button>

        {/* Row 8 */}
        <Button variant="number" onClick={() => onNumber(1)}>1</Button>
        <Button variant="number" onClick={() => onNumber(2)}>2</Button>
        <Button variant="number" onClick={() => onNumber(3)}>3</Button>
        <Button variant="special" onClick={() => onOperator('*', '×')}>×</Button>
        <Button variant="special" onClick={() => onMemory('minus')}>M-</Button>

        {/* Row 9 */}
        <Button variant="number" onClick={() => onNumber(0)}>0</Button>
        <Button variant="special" onClick={() => onOperator('.', '.')}>.</Button>
        <Button variant="special" onClick={onExp}>EXP</Button>
        <Button variant="special" onClick={() => onOperator('/', '/')}>/</Button>
        <Button variant="special" onClick={onMemoryRecall}>MR</Button>

        {/* Row 10 */}
        <Button variant="special" onClick={onSign}>±</Button>
        <Button variant="special" onClick={() => onFunction('randomNumber()', 'RND', false)}>RND</Button>
        <Button variant="clear" onClick={onClear}>AC</Button>
        <Button variant="equal" onClick={onCalculate}>=</Button>
        <Button variant="special"></Button>
      </div>
    </div>
  );
};

export default ButtonGrid;