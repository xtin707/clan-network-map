"use client";
import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import NetworkDiagram from '@/components/D3Graph';
import { Julius_Sans_One } from 'next/font/google';
import { IBM_Plex_Mono } from 'next/font/google';
import {useEffect, useRef, useState} from 'react';
import { Info } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const juliusSansOne = Julius_Sans_One({ subsets: ['latin'], weight: '400' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export default function HomePage() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#1E1E1E] flex flex-col">
      <header className="bg-[#1E1E1E] text-white flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6 flex-shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src="/up-logo.png" alt="UPB Logo" className="h-8 lg:h-10 w-auto"/>
          <h1 className={juliusSansOne.className + " text-[#DFDEDE] text-xl font-semibold tracking-widest"}>UPB Network Diagram</h1>
        </div>
        <HoverCard openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Info className="h-7.5 w-auto text-white cursor-pointer hover:text-gray-300 transition-colors" />
          </HoverCardTrigger>
          <HoverCardContent 
            className={`${ibmPlexMono.className} w-max bg-[#2D2D2D]/60 text-[#DFDEDE] text-xs px-3 py-1 rounded shadow-lg border-none`}
            side="bottom"
            align="end"
            sideOffset={8}
          >
            Click the node to see the detailed view of ports.
          </HoverCardContent>
        </HoverCard>

      </header>

      <div ref={containerRef} className="w-full h-[100vh] relative">
        <div className="absolute w-45 top-5 left-5 bg-[#2D2D2D]/90 text-white p-3 rounded shadow-md text-sm  space-y-1">
          <div className="flex items-center space-x-2 bottom-10">
            <span>Connection Types</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <div className="w-10 h-0.5 bg-[#F58315] rounded-sm"></div>
            <span>Ethernet</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-0.5 bg-[#1594F5] rounded-sm"></div>
            <span>Fiber Optic</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 border-t-2 border-dashed border-[#1CE637]"></div>
            <span>Wireless</span>
          </div>
        </div>

        <NetworkDiagram
          nodeData={node_data}
          edgeData={edge_data}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
    </main>
  );
}
