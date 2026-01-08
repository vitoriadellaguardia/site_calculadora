import React from 'react';
import InterestCalculator from '../components/InterestCalculator.jsx';

export const InterestCalculatorPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Calculadora de Juros</h1>
      <p className="text-white/80 max-w-2xl mx-auto">Calcule juros simples e compostos para investimentos e empréstimos.</p>
    </div>
    <InterestCalculator />
  </div>
);

import UnitConverter from '../components/UnitConverter.jsx';
export const UnitConverterPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Conversor de Unidades</h1>
      <p className="text-white/80 max-w-2xl mx-auto">Converta entre diferentes unidades de medida.</p>
    </div>
    <UnitConverter />
  </div>
);

import DateCalculator from '../components/DateCalculator.jsx';
export const DateCalculatorPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Calculadora de Data</h1>
      <p className="text-white/80 max-w-2xl mx-auto">Calcule diferenças entre datas e adicione dias.</p>
    </div>
    <DateCalculator />
  </div>
);

import AreaCalculator from '../components/AreaCalculator.jsx';
export const AreaCalculatorPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Calculadora de Área</h1>
      <p className="text-white/80 max-w-2xl mx-auto">Calcule áreas de diferentes formas geométricas.</p>
    </div>
    <AreaCalculator />
  </div>
);

import VolumeCalculator from '../components/VolumeCalculator.jsx';
export const VolumeCalculatorPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Calculadora de Volume</h1>
      <p className="text-white/80 max-w-2xl mx-auto">Calcule volumes de sólidos geométricos.</p>
    </div>
    <VolumeCalculator />
  </div>
);