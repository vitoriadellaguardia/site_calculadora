import React from 'react';
import { usePercentageCalculator } from '../hooks/usePercentageCalculator.js';

const PercentageCalculator = () => {
  const {
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
  } = usePercentageCalculator();

  const Button = ({ onClick, className = '', children, ...props }) => (
    <button
      className={`bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-200 font-medium px-4 py-3 hover:transform hover:-translate-y-0.5 hover:shadow-lg active:transform active:translate-y-0 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  const Input = ({ value, onChange, placeholder, ...props }) => (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
      {...props}
    />
  );

  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl max-w-2xl mx-auto p-6">
      {/* Result Display */}
      <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-6">
        <div className="text-center text-white text-2xl font-light">
          Resultado: {result || '0'}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-white/80 text-sm mb-2">Valor</label>
          <Input
            value={value}
            onChange={setValue}
            placeholder="Digite o valor"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Porcentagem</label>
          <Input
            value={percentage}
            onChange={setPercentage}
            placeholder="Digite a porcentagem"
          />
        </div>
      </div>

      {/* Calculation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Button onClick={calculatePercentageOf} className="bg-blue-500/30 hover:bg-blue-500/40">
          {percentage}% de {value}
        </Button>
        <Button onClick={calculateWhatPercent} className="bg-green-500/30 hover:bg-green-500/40">
          {value} é que % de {percentage}
        </Button>
        <Button onClick={calculatePercentageIncrease} className="bg-purple-500/30 hover:bg-purple-500/40">
          {value} + {percentage}%
        </Button>
        <Button onClick={calculatePercentageDecrease} className="bg-orange-500/30 hover:bg-orange-500/40">
          {value} - {percentage}%
        </Button>
      </div>

      {/* Clear Button */}
      <div className="text-center">
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40 px-8">
          Limpar
        </Button>
      </div>

      {/* Examples */}
      <div className="mt-6 text-white/60 text-sm">
        <h3 className="font-semibold mb-2">Exemplos:</h3>
        <ul className="space-y-1">
          <li>• 20% de 100 = 20</li>
          <li>• 50 é 25% de 200</li>
          <li>• 100 + 10% = 110</li>
          <li>• 100 - 10% = 90</li>
        </ul>
      </div>
    </div>
  );
};

export default PercentageCalculator;