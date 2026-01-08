import React from 'react';
import BMICalculator from '../components/BMICalculator.jsx';

const BMICalculatorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Calculadora de IMC
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Calcule seu Índice de Massa Corporal (IMC) e descubra se seu peso está dentro da faixa ideal para sua altura.
        </p>
      </div>
      
      <div className="flex justify-center">
        <BMICalculator />
      </div>
    </div>
  );
};

export default BMICalculatorPage;