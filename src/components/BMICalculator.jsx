import React from 'react';
import { useBMICalculator } from '../hooks/useBMICalculator.js';

const BMICalculator = () => {
  const {
    weight,
    setWeight,
    height,
    setHeight,
    bmi,
    classification,
    calculateBMI,
    clear
  } = useBMICalculator();

  const Button = ({ onClick, className = '', children, ...props }) => (
    <button
      className={`bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-200 font-medium px-6 py-3 hover:transform hover:-translate-y-0.5 hover:shadow-lg active:transform active:translate-y-0 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  const Input = ({ value, onChange, placeholder, unit, ...props }) => (
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 pr-12 w-full placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
        {...props}
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 text-sm">
        {unit}
      </span>
    </div>
  );

  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl max-w-md mx-auto p-6">
      {/* Result Display */}
      <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-6 text-center">
        {bmi ? (
          <div>
            <div className="text-white text-3xl font-bold mb-2">
              IMC: {bmi}
            </div>
            <div className={`text-lg font-medium ${classification.color}`}>
              {classification.text}
            </div>
          </div>
        ) : (
          <div className="text-white/60 text-lg">
            Digite seu peso e altura
          </div>
        )}
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-white/80 text-sm mb-2">Peso</label>
          <Input
            value={weight}
            onChange={setWeight}
            placeholder="Digite seu peso"
            unit="kg"
            min="1"
            max="500"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Altura</label>
          <Input
            value={height}
            onChange={setHeight}
            placeholder="Digite sua altura"
            unit="cm"
            min="50"
            max="250"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <Button onClick={calculateBMI} className="bg-blue-500/30 hover:bg-blue-500/40 flex-1">
          Calcular IMC
        </Button>
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40">
          Limpar
        </Button>
      </div>

      {/* BMI Table */}
      <div className="text-white/70 text-sm">
        <h3 className="font-semibold mb-3 text-white">Classificação do IMC:</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Abaixo de 18,5</span>
            <span className="text-blue-400">Abaixo do peso</span>
          </div>
          <div className="flex justify-between">
            <span>18,5 - 24,9</span>
            <span className="text-green-400">Peso normal</span>
          </div>
          <div className="flex justify-between">
            <span>25,0 - 29,9</span>
            <span className="text-yellow-400">Sobrepeso</span>
          </div>
          <div className="flex justify-between">
            <span>30,0 - 34,9</span>
            <span className="text-orange-400">Obesidade I</span>
          </div>
          <div className="flex justify-between">
            <span>35,0 - 39,9</span>
            <span className="text-red-400">Obesidade II</span>
          </div>
          <div className="flex justify-between">
            <span>Acima de 40,0</span>
            <span className="text-red-600">Obesidade III</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;