import React from 'react';
import { useDateCalculator } from '../hooks/useDateCalculator.js';

const DateCalculator = () => {
  const {
    startDate, setStartDate,
    endDate, setEndDate,
    addDays, setAddDays,
    baseDate, setBaseDate,
    difference,
    addResult,
    calculateDifference,
    addDaysToDate,
    clear
  } = useDateCalculator();

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
      <div className="mb-8">
        <h3 className="text-white font-semibold mb-4">Diferença entre datas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Data inicial</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Data final</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
          </div>
        </div>
        <Button onClick={calculateDifference} className="bg-blue-500/30 hover:bg-blue-500/40 w-full">
          Calcular Diferença
        </Button>
        {difference && (
          <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div><span className="block text-2xl font-bold">{difference.days}</span>Dias</div>
              <div><span className="block text-2xl font-bold">{difference.weeks}</span>Semanas</div>
              <div><span className="block text-2xl font-bold">{difference.months}</span>Meses</div>
              <div><span className="block text-2xl font-bold">{difference.years}</span>Anos</div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-white font-semibold mb-4">Adicionar dias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Data base</label>
            <input
              type="date"
              value={baseDate}
              onChange={(e) => setBaseDate(e.target.value)}
              className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Dias a adicionar</label>
            <input
              type="number"
              value={addDays}
              onChange={(e) => setAddDays(e.target.value)}
              placeholder="30"
              className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 w-full placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
          </div>
        </div>
        <Button onClick={addDaysToDate} className="bg-green-500/30 hover:bg-green-500/40 w-full">
          Adicionar Dias
        </Button>
        {addResult && (
          <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-4 mt-4 text-center">
            <div className="text-white text-xl font-bold">
              Nova data: {new Date(addResult).toLocaleDateString('pt-BR')}
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <Button onClick={clear} className="bg-red-500/30 hover:bg-red-500/40">
          Limpar Tudo
        </Button>
      </div>
    </div>
  );
};

export default DateCalculator;