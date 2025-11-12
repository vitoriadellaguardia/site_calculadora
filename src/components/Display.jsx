import React from 'react';

const Display = ({ displayValue, result, isDegMode, onToggleDegRad }) => {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden min-h-[120px] shadow-inner relative">
      <div 
        className="absolute top-2 left-4 bg-white/20 text-white px-2 py-1 rounded-lg text-xs font-semibold border border-white/30 cursor-pointer hover:bg-white/30 transition-all"
        onClick={onToggleDegRad}
      >
        {isDegMode ? 'DEG' : 'RAD'}
      </div>
      
      <div className="text-white p-5 text-right overflow-x-auto font-light tracking-wide text-shadow-lg text-lg md:text-2xl lg:text-3xl">
        {displayValue || ''}
      </div>
      
      <div className="text-white/80 text-right px-5 pb-5 overflow-x-auto font-medium text-shadow-lg text-base md:text-xl lg:text-2xl">
        {result}
      </div>
    </div>
  );
};

export default Display;