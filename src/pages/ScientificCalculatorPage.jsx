import React from 'react';
import Calculator from '../components/Calculator.jsx';

const ScientificCalculatorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Calculadora Científica
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Calculadora avançada com funções trigonométricas, logarítmicas, exponenciais e muito mais.
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculatorPage;