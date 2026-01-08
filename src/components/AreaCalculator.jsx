import React from 'react';
import { useAreaCalculator } from '../hooks/useAreaCalculator.js';

const AreaCalculator = () => {
  const {
    shape, setShape,
    dimensions,
    result,
    shapes,
    fieldLabels,
    calculateArea,
    updateDimension,
    clear
  } = useAreaCalculator();

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
        <label className="block text-white/80 text-sm mb-2">Forma geométrica</label>
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        >
          {Object.entries(shapes).map(([key, shapeData]) => (
            <option key={key} value={key}>{shapeData.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {shapes[shape].fields.map(field => (
          <div key={field}>
            <label className="block text-white/80 text-sm mb-2">{fieldLabels[field]}</label>
            <input
              type="number"
              value={dimensions[field] || ''}
              onChange={(e) => updateDimension(field, e.target.value)}
              placeholder="0"
              className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-6">
        <Button onClick={calculateArea} className="bg-blue-500/30 hover:bg-blue-500/40 flex-1">
          Calcular Área
        </Button>
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40">
          Limpar
        </Button>
      </div>

      {result && (
        <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center">
          <div className="text-white text-2xl font-bold">
            Área: {result} unidades²
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaCalculator;