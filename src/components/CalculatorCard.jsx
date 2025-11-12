import React from 'react';
import { Link } from 'react-router-dom';

const CalculatorCard = ({ title, description, icon, path, available = true }) => {
  const CardContent = () => (
    <div className={`bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:transform hover:scale-105 hover:shadow-xl ${!available ? 'opacity-60' : ''}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      {!available && (
        <span className="inline-block bg-yellow-500/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-medium">
          Em breve
        </span>
      )}
    </div>
  );

  return available ? (
    <Link to={path} className="block">
      <CardContent />
    </Link>
  ) : (
    <div className="cursor-not-allowed">
      <CardContent />
    </div>
  );
};

export default CalculatorCard;