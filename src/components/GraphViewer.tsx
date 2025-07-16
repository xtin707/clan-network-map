'use client';

import React, { useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCcw} from "lucide-react";
import { transformConfig } from './transformConfig';

interface SVGViewerProps {
  svgString: string;
  error?: string | null;
  onNodeClick?: (nodeId: string) => void;
}

  const SVGViewer: React.FC<SVGViewerProps> = ({ svgString, error, onNodeClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (svgString && onNodeClick && containerRef.current) {
    const svgElement = containerRef.current.querySelector('svg');
    if (svgElement) {
      const nodes = svgElement.querySelectorAll('g.node');

      nodes.forEach(node => {
        const title = node.querySelector('title');
        const nodeId = title?.textContent?.trim();

        const htmlNode = node as HTMLElement;
        htmlNode.style.cursor = 'pointer';

        // Remove existing listeners to prevent duplicates
        const existingListener = (node as any)._clickListener;
        if (existingListener) {
          node.removeEventListener('click', existingListener);
        }

        const clickListener = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`[SVGViewer] Node clicked: ${nodeId}`);
          onNodeClick(nodeId);
        };
        node.addEventListener('click', clickListener);
        (node as any)._clickListener = clickListener;

        // Add hover effects: black background, white text on hover
        node.addEventListener('mouseenter', () => {
          const shape = node.querySelector('polygon');
          const text = node.querySelectorAll('text');

          if (shape) {
            shape.setAttribute('data-original-fill', shape.getAttribute('fill') || '');
            shape.setAttribute('fill', '#000000');
          }

          text.forEach((t) => {
            const ot = t.getAttribute('fill') || '';
            t.setAttribute('data-original-fill', ot);
            t.setAttribute('fill', '#FFFFFF');
          });
        });

        node.addEventListener('mouseleave', () => {
          const shape = node.querySelector('polygon');
          const text = node.querySelectorAll('text');

          const of = shape?.getAttribute('data-original-fill');
          if (shape && of !== null) {
            shape.setAttribute('fill', of);
          }

          text.forEach((t) => {
            const original = t.getAttribute('data-original-fill');
            if (original !== null) {
              t.setAttribute('fill', original);
            }
          });
        });
        
      });
    }
  }
}, [svgString, onNodeClick]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-52 bg-[#FFFFFF]">
      {error ? (
        <p className="text-red-500 font-bold">{error}</p>
      ) : (
          <TransformWrapper {...transformConfig}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                  <button 
                    onClick={() => zoomOut()} 
                    className="px-2 py-1 bg-black hover:bg-gray-600 text-white rounded"
                  >
                     <ZoomOut/>
                  </button>
                  <button 
                    onClick={() => resetTransform()} 
                    className="px-2 py-1 bg-black hover:bg-gray-600 text-white rounded"
                  >
                    <RotateCcw/>
                  </button>
                  <button 
                    onClick={() => zoomIn()} 
                    className="px-2 py-1 bg-black hover:bg-gray-600 text-white rounded"
                  >
                    <ZoomIn/>
                  </button>
                </div>

                <TransformComponent 
                  wrapperStyle={{ width: '100%', height: '100%' }}
                  contentStyle={{ 
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    ref={containerRef}
                    dangerouslySetInnerHTML={{ __html: svgString }}
                    className="h-80 flex justify-center items-center"
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
      )}
    </div>
  );
};

export default SVGViewer;
