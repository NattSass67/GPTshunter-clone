'use client'
import React, { useState } from 'react';


const SmoothShiftExample = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Toggle Expand
      </button>
      <div
        className={`transition-all duration-500 ease-in-out bg-red-500 w-64 ${
          isExpanded ? 'h-64' : 'h-32'
        }`}
      >
        <p className="p-4 text-white">This is the first div.</p>
      </div>
      <div className="mt-4 bg-green-500 w-64 h-32">
        <p className="p-4 text-white">This is the second div.</p>
      </div>
    </div>
  );
};

export default SmoothShiftExample;
