'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import graphviz from 'graphviz-wasm';
import SVGViewer from '@/components/GraphViewer';
import { Button } from "@/components/ui/button"
import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import { generateDetailedGraph } from '@/graph/detailedGraph';
import { Julius_Sans_One } from 'next/font/google';
import { MoveLeft } from 'lucide-react';
import { useMemo } from 'react';


const juliusSansOne = Julius_Sans_One({ subsets: ['latin'], weight: '400' });

export default function DetailedGraphPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentNodeId = pathname.split('/').pop();
  const [svgString, setSvgString] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [historyStack, setHistoryStack] = useState<string[]>([]);

  // Initialize history from URL params or sessionStorage
  useEffect(() => {
    const historyParam = searchParams.get('history');
    if (historyParam) {
      // Get history from URL parameter
      const parsedHistory = historyParam.split(',').filter(Boolean);
      setHistoryStack(parsedHistory);
      console.log('[History] Loaded from URL:', parsedHistory);
    } else {
      // Fallback using session storage
      const savedHistory = sessionStorage.getItem('nodeHistory');
      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory);
        setHistoryStack(parsedHistory);
        console.log('[History] Loaded from sessionStorage:', parsedHistory);
      }
    }
  }, [searchParams]);

  // Update history when current node changes
  useEffect(() => {
    if (!currentNodeId) return;

    setHistoryStack((prev) => {
      let newHistory;
      if (prev.length === 0 || prev[prev.length - 1] !== currentNodeId) {
        newHistory = [...prev, currentNodeId];
        console.log(`[History] Pushed: ${currentNodeId}`);
      } else {
        newHistory = prev;
        console.log(`[History] Already top: ${currentNodeId}`);
      }
      
      // Save to sessionStorage
      sessionStorage.setItem('nodeHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  }, [currentNodeId]);

  // Generate and render graph
  useEffect(() => {
    if (!currentNodeId) return;

    const main_node = node_data.data.find((node) => node.id === currentNodeId);
    if (!main_node) {
      setError(`Node "${currentNodeId}" not found.`);
      return;
    }

    const node_ids = [];
    const filtered_node = [];
    const filtered_edge = [];

    for (const entry of edge_data.data) {
      if (entry.node.includes(main_node.id)) {
        filtered_edge.push(entry);
        node_ids.push(entry.node[0]);
        node_ids.push(entry.node[1]);
      }
    }

    let unique_ids = [...new Set(node_ids)].filter((id) => id !== main_node.id);
    for (const id of unique_ids) {
      const node = node_data.data.find((n) => n.id === id);
      if (node) filtered_node.push(node);
    }

    const dot = generateDetailedGraph(main_node, filtered_node, filtered_edge);
    graphviz.loadWASM().then(() => {
      const svg = graphviz.layout(dot, 'svg', 'dot');
      setSvgString(svg);
      setError(null);
    }).catch((err) => {
      console.error(err);
      setError('Failed to generate SVG graph.');
    });
  }, [currentNodeId]);


  const handleBack = () => {
    if (historyStack.length >= 2) {
      const updatedStack = [...historyStack];
      updatedStack.pop(); // remove current node
      const previous = updatedStack[updatedStack.length - 1];
      
      // Update sessionStorage
      sessionStorage.setItem('nodeHistory', JSON.stringify(updatedStack));
      
      // Navigate with history parameter
      const historyParam = updatedStack.join(',');
      router.push(`/${previous}?history=${historyParam}`);
    } else {
      // Clear history and go home
      sessionStorage.removeItem('nodeHistory');
      router.push('/');
    }
  };

  const handleHome = () => {
    // Clear history
    sessionStorage.removeItem('nodeHistory');
    router.push('/');
  };

  // Navigate to a new node on click
  const navigateToNode = (nodeId) => {
    const newHistory = [...historyStack, nodeId];
    const historyParam = newHistory.join(',');
    router.push(`/${nodeId}?history=${historyParam}`); // Build URL using node and history
  };

  // Get label of previous node
  const previousNodeLabel = useMemo(() => {
    if (historyStack.length >= 2) { // -2 for previous, -1 for current
      const previousId = historyStack[historyStack.length - 2]; 
      const previousNode = node_data.data.find((n) => n.id === previousId);
      return previousNode?.label ?? previousId;
    }
    return null;
  }, [historyStack]);

  // Logging for checking
  useEffect(() => {
    console.log('--- DEBUG ---');
    console.log('pathname:', pathname);
    console.log('currentNodeId:', currentNodeId);
    console.log('historyStack:', historyStack);
    console.log('historyStack.length:', historyStack.length);
    console.log('Previous label:', previousNodeLabel);
  }, [pathname, historyStack]);

  return (
    <main className="flex flex-col min-h-screen w-screen bg-[#1E1E1E]">
      <header className="bg-[#1E1E1E] text-white flex items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-4">
          <img src="/up-logo.png" alt="UPB Logo" className="h-10 w-auto"/>
          <h1 className={juliusSansOne.className + " text-[#DFDEDE] text-xl font-semibold tracking-widest"}>UPB Network Diagram</h1>
        </div>
        <div className="relative group">
          <Button variant="link"
            onClick={handleHome}
            className={juliusSansOne.className + " hover:bg-stone-400/30 text-[#DFDEDE] px-4 py-2 rounded text-sm"}
          >
            <MoveLeft />Go Back to Overview
          </Button>
          {/* extended detailed view should not be here */}
          {previousNodeLabel && (
            <Button
              onClick={handleBack}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
            >
              ← Back to {previousNodeLabel}
            </Button>
          )}
        </div>
      </header>
      
      <div className="flex-grow bg-white w-full flex flex-col items-center justify-start px-6 py-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Detailed Node View: {currentNodeId}
        </h2>

      <div className="w-full h-full flex-grow flex items-center justify-center">
        <SVGViewer 
          svgString={svgString} 
          error={error} 
          onNodeClick={navigateToNode} // Navigation function
        />
      </div>
    </div>

      {/* Footer with history navigation */}

    {/* Array Stack tracker for checking */}
    <div className="fixed bottom-2 right-2 text-xs bg-white p-2 rounded shadow max-w-xs text-left">
      <div className="font-bold">History Stack (Length: {historyStack.length}):</div>
      <div className="pl-2">
        {historyStack.map((id, i) => {
          const node = node_data.data.find((n) => n.id === id);
          const label = node?.label || id;
          return (
            <div
              key={i}
              className={i === historyStack.length - 1 ? 'font-bold text-blue-600' : ''}
            >
              {i + 1}. {label} <span className="text-gray-400">({id})</span>
            </div>
          );
        })}
      </div>
    </div>
    </main>
  );
}