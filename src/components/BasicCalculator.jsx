import React from 'react';
import { useBasicCalculator } from '../hooks/useBasicCalculator.js';

const BasicCalculator = () => {
  const { display, inputNumber, inputDecimal, clear, performOperation, handleEquals } = useBasicCalculator();

  const Button = ({ onClick, className = '', children, ...props }) => (
    <button
      className={`bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-200 font-medium text-xl hover:transform hover:-translate-y-0.5 hover:shadow-lg active:transform active:translate-y-0 min-h-[60px] ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-sm mx-auto p-6">
      {/* Display */}
      <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-6">
        <div className="text-right text-white text-2xl md:text-3xl font-light overflow-hidden break-all min-h-[40px] flex items-center justify-end">
          {display}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-4">
        {/* Row 1 */}
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40 col-span-2">
          AC
        </Button>
        <Button onClick={() => performOperation('/')} className="bg-orange-500/30 hover:bg-orange-500/40">
          ÷
        </Button>
        <Button onClick={() => performOperation('*')} className="bg-orange-500/30 hover:bg-orange-500/40">
          ×
        </Button>

        {/* Row 2 */}
        <Button onClick={() => inputNumber(7)}>7</Button>
        <Button onClick={() => inputNumber(8)}>8</Button>
        <Button onClick={() => inputNumber(9)}>9</Button>
        <Button onClick={() => performOperation('-')} className="bg-orange-500/30 hover:bg-orange-500/40">
          −
        </Button>

        {/* Row 3 */}
        <Button onClick={() => inputNumber(4)}>4</Button>
        <Button onClick={() => inputNumber(5)}>5</Button>
        <Button onClick={() => inputNumber(6)}>6</Button>
        <Button onClick={() => performOperation('+')} className="bg-orange-500/30 hover:bg-orange-500/40">
          +
        </Button>

        {/* Row 4 */}
        <Button onClick={() => inputNumber(1)}>1</Button>
        <Button onClick={() => inputNumber(2)}>2</Button>
        <Button onClick={() => inputNumber(3)}>3</Button>
        <Button onClick={handleEquals} className="bg-blue-500/30 hover:bg-blue-500/40 row-span-2 flex items-center justify-center text-2xl">
          =
        </Button>

        {/* Row 5 */}
        <Button onClick={() => inputNumber(0)} className="col-span-2 text-lg">0</Button>
        <Button onClick={inputDecimal} className="text-lg">.</Button>
      </div>
    </div>
  );
};

export default BasicCalculator;