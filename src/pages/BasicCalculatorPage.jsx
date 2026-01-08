import React from 'react';
import BasicCalculator from '../components/BasicCalculator.jsx';

const BasicCalculatorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Calculadora Básica
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Calculadora simples para operações matemáticas básicas: soma, subtração, multiplicação e divisão.
        </p>
      </div>
      
      <div className="flex justify-center">
        <BasicCalculator />
      </div>
    </div>
  );
};

export default BasicCalculatorPage;