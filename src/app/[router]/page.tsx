'use client';
import { useEffect, useState, useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import graphviz from 'graphviz-wasm';
import SVGViewer from '@/components/GraphViewer';
import { Button } from "@/components/ui/button"
import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import { generateDetailedGraph } from '@/graph/detailedGraph';
import { Julius_Sans_One } from 'next/font/google';
import { Raleway } from 'next/font/google';


const juliusSansOne = Julius_Sans_One({ subsets: ['latin'], weight: '400' });
const raleway = Raleway({
  subsets: ['latin'],
  weight: '700',
  style: 'normal',
  variable: '--font-raleway',
})

export default function DetailedGraphPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentNodeId = pathname.split('/').pop();
  const [svgString, setSvgString] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  // Initialize history
  useEffect(() => {
    const historyParam = searchParams.get('history');
    if (historyParam) {
      // Get history from URL parameter
      const parsedHistory = historyParam.split(',').filter(Boolean);
      setHistoryStack(parsedHistory);
      console.log('[History] Loaded from URL:', parsedHistory);
    }
  }, [searchParams]);

  // Update history index when current node or history changes
  useEffect(() => {
  if (currentNodeId && historyStack.length > 0) {
    const index = historyStack.lastIndexOf(currentNodeId);
    if (index !== -1) {
      setHistoryIndex(index);
    }
  }
  }, [currentNodeId, historyStack]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!historyStack.length || historyIndex === null) return;
      if (e.key === 'ArrowLeft' && historyIndex > 0) {
        // Navigate backward
        const previousId = historyStack[historyIndex - 1];
        const newHistory = historyStack.slice(0, historyIndex);
        router.push(`/${previousId}?history=${newHistory.join(',')}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [historyStack, historyIndex, router]);

  // Update history when current node changes
  useEffect(() => {
    if (!currentNodeId) return;

    setHistoryStack((prev) => {
      // If stack is empty, add the current node
      if (prev.length === 0) {
        const newHistory = [currentNodeId];
        console.log(`[History] Initial push: ${currentNodeId}`);
        return newHistory;
      }

      // If current node is the same do not add to stack
      if (prev[prev.length - 1] === currentNodeId) {
        return prev;
      }

      // Add the new node to the stack
      const newHistory = [...prev, currentNodeId];
      console.log(`[History] Pushed: ${currentNodeId}`);
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
      updatedStack.pop(); 
      const previous = updatedStack[updatedStack.length - 1];
      // Navigate with history parameter
      const historyParam = updatedStack.join(',');
      router.push(`/${previous}?history=${historyParam}`);
    } else {
      handleHome()
    }
  };

  const handleHome = () => {
    router.push('/');
  };

  // Navigate to a new node on click
  const navigateToNode = (nodeId) => {
    if (nodeId === currentNodeId) {
      return;
    }
    const newHistory = [...historyStack, nodeId];
    const historyParam = newHistory.join(',');
    router.push(`/${nodeId}?history=${historyParam}`);
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

  return (
    <main className="flex flex-col min-h-screen w-screen bg-[#1E1E1E]">
      <header className="bg-[#1E1E1E] text-white flex items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-4">
          <img src="/up-logo.png" alt="UPB Logo" className="h-10 w-auto"/>
          <h1 className={juliusSansOne.className + " text-[#DFDEDE] text-xl font-semibold tracking-widest"}>UPB Network Diagram</h1>
        </div>
        <div className="relative group">
          <Button variant="ghost"
            onClick={handleHome}
            className={juliusSansOne.className + " hover:bg-stone-400/30 hover:text-[#DFDEDE] px-2 py-1 rounded-sm text-sm"}
          >
            Go Back to Overview
          </Button>
        </div>
      </header>
      
      <div className="flex-grow bg-white w-full flex flex-col items-start justify-start px-25 py-10">
        <div className="flex items-center justify-start gap-0.2 w-full mb-4">
          <h6 className={juliusSansOne.className + " text-xs font-bold rounded-md py-1 px-0.5 bg-[#D9D9D9] text-black"}>
            Detailed Node View:
          </h6>
          {previousNodeLabel && (
            <Button variant="link"
              onClick={handleBack}
              className={juliusSansOne.className + " hover:text-gray-400 text-gray-800 px-4 py-2 text-sm"}
            >
              ← Back to {previousNodeLabel}
            </Button>
          )}
        </div>
        <h2 className={juliusSansOne.className + " text-4xl mb-4 text-[#476A99]"}>
          {node_data.data.find(n => n.id === currentNodeId)?.label || currentNodeId}
        </h2>
        <div className="w-full h-full flex-grow flex items-center justify-center">
          <SVGViewer
            svgString={svgString}
            error={error}
            onNodeClick={navigateToNode}
          />
        </div>
      </div>

    {/* Footer with history navigation */}

    {/* Array Stack tracker for checking */}
    <div className="fixed bottom-5 left-20 text-xs bg-white p-2 rounded shadow max-w-xs text-left max-h-32 flex flex-col overflow-hidden">
      <div className={raleway.className + " font-bold p-2 bg-white border-b sticky top-0 z-10"}>History (Length: {historyStack.length}):</div>
      <div className="pl-2 pr-2 pb-2 overflow-y-auto flex-1 flex flex-col-reverse">
        <div className="flex flex-col">
          {historyStack.map((id, i) => {
            const node = node_data.data.find((n) => n.id === id);
            const label = node?.label || id;
            return (
              <div
                key={i}
                className={juliusSansOne.className + (i === historyStack.length - 1 ? ' font-bold text-[#3C77C4]' : '')}
              >
                {i + 1}. {label} <span className="text-gray-400">({id})</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </main>
  );
}