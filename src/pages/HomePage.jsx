import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorCard from '../components/CalculatorCard.jsx';
import Calculator from '../components/Calculator.jsx';

const HomePage = () => {
  const calculators = [
    {
      title: 'Calculadora Básica',
      description: 'Operações matemáticas simples: soma, subtração, multiplicação e divisão.',
      icon: '🔢',
      path: '/basic',
      available: true
    },
    {
      title: 'Calculadora de Porcentagem',
      description: 'Calcule porcentagens, descontos, aumentos e variações percentuais.',
      icon: '📊',
      path: '/percentage',
      available: true
    },
    {
      title: 'Calculadora de IMC',
      description: 'Calcule seu Índice de Massa Corporal e veja sua classificação.',
      icon: '⚖️',
      path: '/bmi',
      available: true
    },
    {
      title: 'Calculadora de Juros',
      description: 'Calcule juros simples e compostos para investimentos e empréstimos.',
      icon: '💰',
      path: '/interest',
      available: true
    },
    {
      title: 'Conversor de Unidades',
      description: 'Converta entre diferentes unidades de medida: comprimento, peso, temperatura.',
      icon: '📏',
      path: '/converter',
      available: true
    },
    {
      title: 'Calculadora de Data',
      description: 'Calcule diferenças entre datas, adicione ou subtraia dias.',
      icon: '📅',
      path: '/date',
      available: true
    },
    {
      title: 'Calculadora de Área',
      description: 'Calcule áreas de diferentes formas geométricas.',
      icon: '📐',
      path: '/area',
      available: true
    },
    {
      title: 'Calculadora de Volume',
      description: 'Calcule volumes de sólidos geométricos diversos.',
      icon: '📦',
      path: '/volume',
      available: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
          Calculadorinha 
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Sua central de calculadoras online. Resolva cálculos científicos, financeiros e do dia a dia.
        </p>
      </div>

      {/* Featured Calculator */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Calculadora Científica
        </h2>
        <Calculator />
      </div>

      {/* Other Calculators */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Outras Calculadoras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {calculators.map((calc, index) => (
            <CalculatorCard
              key={index}
              title={calc.title}
              description={calc.description}
              icon={calc.icon}
              path={calc.path}
              available={calc.available}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-white/60 py-8 border-t border-white/10">
        <p>© 2024 CalcHub. Todas as calculadoras em um só lugar.</p>
      </div>
    </div>
  );
};

export default HomePage;