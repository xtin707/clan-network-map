'use client';

import React from 'react';

interface SVGViewerProps {
  svgString: string;
  error?: string | null;
}

const SVGViewer: React.FC<SVGViewerProps> = ({ svgString, error }) => {
  return (
    <div className="w-full h-auto overflow-auto border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center min-h-52 bg-[#FFFFFF]">
      {error ? (
        <p className="text-red-500 font-bold">{error}</p>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: svgString }}
          className="flex justify-center items-center w-full"
        />
      )}
    </div>
  );
};

export default SVGViewer;
