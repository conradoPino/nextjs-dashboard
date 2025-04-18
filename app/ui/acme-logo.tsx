// components/Bunker404Logo.tsx
import React from 'react';

const Bunker404Logo: React.FC = () => {
  return (
    <div className="flex items-center bg-purple-1000 px-0 py-2 w-fit rounded">
      {/* BUNKER vertical */}
      <div className="bg-white text-black font-bold text-l px-0.2 py-8 flex flex-col justify-center items-center">
        <span className="-rotate-90 tracking-widest">BUNKER</span>
      </div>
      {/* 404 horizontal */}
      <div className="text-white font-extrabold text-6xl ml-2">
        404
      </div>
    </div>
  );
};

export default Bunker404Logo;
