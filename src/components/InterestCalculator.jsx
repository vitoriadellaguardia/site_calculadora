import React from 'react';
import { useInterestCalculator } from '../hooks/useInterestCalculator.js';

const InterestCalculator = () => {
  const {
    principal, setPrincipal,
    rate, setRate,
    time, setTime,
    compound, setCompound,
    simpleResult,
    compoundResult,
    calculateSimpleInterest,
    calculateCompoundInterest,
    clear
  } = useInterestCalculator();

  const Button = ({ onClick, className = '', children }) => (
    <button
      className={`bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-200 font-medium px-4 py-3 hover:transform hover:-translate-y-0.5 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  const Input = ({ value, onChange, placeholder, type = "number" }) => (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
    />
  );

  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl max-w-2xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-white/80 text-sm mb-2">Capital inicial (R$)</label>
          <Input value={principal} onChange={setPrincipal} placeholder="1000" />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Taxa de juros (% ao ano)</label>
          <Input value={rate} onChange={setRate} placeholder="5" />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Tempo (anos)</label>
          <Input value={time} onChange={setTime} placeholder="2" />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Capitalização (vezes/ano)</label>
          <select
            value={compound}
            onChange={(e) => setCompound(e.target.value)}
            className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            <option value="1">Anual</option>
            <option value="12">Mensal</option>
            <option value="365">Diária</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Button onClick={calculateSimpleInterest} className="bg-blue-500/30 hover:bg-blue-500/40">
          Juros Simples
        </Button>
        <Button onClick={calculateCompoundInterest} className="bg-green-500/30 hover:bg-green-500/40">
          Juros Compostos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {simpleResult && (
          <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <h3 className="text-white font-semibold mb-2">Juros Simples</h3>
            <p className="text-white/80">Juros: R$ {simpleResult.interest}</p>
            <p className="text-white">Total: R$ {simpleResult.total}</p>
          </div>
        )}
        {compoundResult && (
          <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <h3 className="text-white font-semibold mb-2">Juros Compostos</h3>
            <p className="text-white/80">Juros: R$ {compoundResult.interest}</p>
            <p className="text-white">Total: R$ {compoundResult.total}</p>
          </div>
        )}
      </div>

      <div className="text-center">
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40">
          Limpar
        </Button>
      </div>
    </div>
  );
};

export default InterestCalculator;