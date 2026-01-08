import React from 'react';
import PercentageCalculator from '../components/PercentageCalculator.jsx';

const PercentageCalculatorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Calculadora de Porcentagem
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Calcule porcentagens, descontos, aumentos e variações percentuais de forma rápida e fácil.
        </p>
      </div>
      
      <div className="flex justify-center">
        <PercentageCalculator />
      </div>
    </div>
  );
};

export default PercentageCalculatorPage;