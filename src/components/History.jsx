import React from 'react';

const History = ({ history, onClearHistory, onLoadFromHistory }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-full overflow-hidden">
      <div className="bg-transparent text-white/90 p-4 text-center font-medium border-b border-white/10">
        <em>-History-</em>{' '}
        <span 
          className="text-red-400 cursor-pointer px-2 py-1 rounded-md transition-all hover:bg-red-400/20 hover:text-white font-semibold"
          onClick={onClearHistory}
        >
          Clear
        </span>
      </div>
      
      <div className="h-full overflow-y-auto p-4 custom-scrollbar text-white/90 text-sm md:text-base">
        {history.length === 0 ? (
          <div className="text-center text-white/50 mt-8">No calculations yet</div>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              className="leading-10 cursor-pointer p-3 my-1 rounded-lg transition-all bg-white/5 hover:bg-white/15 hover:transform hover:translate-x-1"
              onClick={() => onLoadFromHistory(item)}
            >
              {history.length - index}) {item.equation} = {item.result}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;