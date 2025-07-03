'use client';

import React, { useEffect, useRef } from 'react';

interface SVGViewerProps {
  svgString: string;
  error?: string | null;
  onNodeClick?: (nodeId: string) => void;
}

const SVGViewer: React.FC<SVGViewerProps> = ({ svgString, error, onNodeClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (svgString && onNodeClick && containerRef.current) {
      
      // Add click listeners to graph nodes
      const svgElement = containerRef.current.querySelector('svg');
      if (svgElement) {

        const nodes = svgElement.querySelectorAll('g.node');
        
        nodes.forEach(node => {
          const title = node.querySelector('title');
          if (title) {
            const nodeId = title.textContent?.trim();
            if (nodeId) {

              const nodes = svgElement.querySelectorAll('g.node');
              nodes.forEach(node => {
                const htmlNode = node as HTMLElement;
                htmlNode.style.cursor = 'pointer';  
              });
              
              // Remove existing listeners to prevent duplicates
              const existingListener = (node as any)._clickListener;
              if (existingListener) {
                node.removeEventListener('click', existingListener);
              }
              
              // Add new click listener
              const clickListener = (e: Event) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`[SVGViewer] Node clicked: ${nodeId}`);
                onNodeClick(nodeId);
              };
              
              node.addEventListener('click', clickListener);
              (node as any)._clickListener = clickListener;
              
              // // Add hover effects
              // node.addEventListener('mouseenter', () => {
              //   node.style.opacity = '0.8';
              // });
            }
          }
        });
      }
    }
  }, [svgString, onNodeClick]);

  return (
    <div className="w-full h-auto overflow-auto flex flex-col items-center justify-center min-h-52 bg-[#FFFFFF]">
      {error ? (
        <p className="text-red-500 font-bold">{error}</p>
      ) : (
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: svgString }}
          className="flex justify-center items-center w-full"
        />
      )}
    </div>
  );
};

export default SVGViewer;