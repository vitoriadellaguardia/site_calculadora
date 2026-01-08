import React from 'react';
import { useUnitConverter } from '../hooks/useUnitConverter.js';

const UnitConverter = () => {
  const {
    category, setCategory,
    fromUnit, setFromUnit,
    toUnit, setToUnit,
    inputValue, setInputValue,
    result,
    units,
    convert,
    clear
  } = useUnitConverter();

  const Button = ({ onClick, className = '', children }) => (
    <button
      className={`bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-200 font-medium px-4 py-3 hover:transform hover:-translate-y-0.5 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <label className="block text-white/80 text-sm mb-2">Categoria</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        >
          <option value="length">Comprimento</option>
          <option value="weight">Peso</option>
          <option value="temperature">Temperatura</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-white/80 text-sm mb-2">De</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            {Object.entries(units[category]).map(([key, unit]) => (
              <option key={key} value={key}>{unit.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Para</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            {Object.entries(units[category]).map(([key, unit]) => (
              <option key={key} value={key}>{unit.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-white/80 text-sm mb-2">Valor</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite o valor"
          className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <Button onClick={convert} className="bg-blue-500/30 hover:bg-blue-500/40 flex-1">
          Converter
        </Button>
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40">
          Limpar
        </Button>
      </div>

      {result && (
        <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center">
          <div className="text-white text-2xl font-bold">
            {result} {units[category][toUnit].name}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitConverter;