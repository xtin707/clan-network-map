'use client';
import { useEffect, useState, useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import { Julius_Sans_One } from 'next/font/google';
import { Raleway } from 'next/font/google';
import ClusterTree from "@/components/D3Detailed";


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

  // Compute graph data with useMemo
  const graphData = useMemo(() => {
    if (!currentNodeId) {
      return { main_node: null, filtered_node: [], filtered_edge: [], error: null };
    }

    const main_node = node_data.data.find((node) => node.id === currentNodeId);
    if (!main_node) {
      return { 
        main_node: null, 
        filtered_node: [], 
        filtered_edge: [], 
        error: `Node "${currentNodeId}" not found.` 
      };
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

    return { main_node, filtered_node, filtered_edge, error: null };
  }, [currentNodeId]);

  // Update error state when graph data changes
  useEffect(() => {
    setError(graphData.error);
  }, [graphData.error]);

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

  // Get current node label safely
  const currentNodeLabel = useMemo(() => {
    return graphData.main_node?.label || currentNodeId;
  }, [graphData.main_node, currentNodeId]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#1E1E1E] flex flex-col">
      {/* Header - Fixed height */}
      <header className="bg-[#1E1E1E] text-white flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6 flex-shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src="/up-logo.png" alt="UPB Logo" className="h-8 lg:h-10 w-auto"/>
          <h1 className={juliusSansOne.className + " text-[#DFDEDE] text-lg lg:text-xl font-semibold tracking-widest hidden sm:block"}>
            UPB Network Diagram
          </h1>
          <h1 className={juliusSansOne.className + " text-[#DFDEDE] text-sm font-semibold tracking-widest sm:hidden"}>
            UPB Network
          </h1>
        </div>
        <div className="relative group">
          <Button variant="ghost"
            onClick={handleHome}
            className={juliusSansOne.className + " hover:bg-stone-400/30 hover:text-[#DFDEDE] px-2 py-1 rounded-sm text-xs sm:text-sm"}
          >
            <span className="hidden sm:inline">Go Back to Overview</span>
            <span className="sm:hidden">Overview</span>
          </Button>
        </div>
      </header>
      
      {/* Main content area - Takes remaining height */}
      <div className="flex-1 bg-white w-full flex flex-col overflow-hidden">
        {/* Content header - Fixed height */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-2 w-full mb-2 sm:mb-4">
            <h6 className={juliusSansOne.className + " text-xs font-bold rounded-md py-1 px-2 bg-[#D9D9D9] text-black whitespace-nowrap"}>
              Detailed Node View:
            </h6>
            {previousNodeLabel && (
              <Button variant="link"
                onClick={handleBack}
                className={juliusSansOne.className + " hover:text-gray-400 text-gray-800 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm h-auto"}
              >
                ← Back to {previousNodeLabel}
              </Button>
            )}
          </div>
          <h2 className={juliusSansOne.className + " text-2xl sm:text-3xl lg:text-4xl text-[#476A99] break-words"}>
            {currentNodeLabel}
          </h2>
        </div>
        
        {/* Graph container - Takes remaining space */}
        <div className="flex-1 w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10 pb-4 lg:pb-6">
          {error ? (
            <div className="text-red-500 font-bold text-center text-sm sm:text-base">
              {error}
            </div>
          ) : graphData.main_node ? (
            <ClusterTree
              main_node={graphData.main_node}
              filtered_node={graphData.filtered_node}
              filtered_edge={graphData.filtered_edge}
              onNodeClick={navigateToNode}
            />
          ) : (
            <div className="text-gray-500 text-center text-sm sm:text-base">
              Loading...
            </div>
          )}
        </div>
      </div>

      {/* History tracker - Fixed position overlay */}
      <div className="fixed bottom-2 sm:bottom-5 left-2 sm:left-5 lg:left-20 text-xs bg-white p-2 rounded shadow max-w-[200px] sm:max-w-xs text-left max-h-24 sm:max-h-32 flex flex-col overflow-hidden z-10">
        <div className={raleway.className + " font-bold p-1 sm:p-2 bg-white border-b sticky top-0 z-10 text-xs"}>
          History ({historyStack.length}):
        </div>
        <div className="pl-1 sm:pl-2 pr-1 sm:pr-2 pb-1 sm:pb-2 overflow-y-auto flex-1 flex flex-col-reverse">
          <div className="flex flex-col">
            {historyStack.map((id, i) => {
              const node = node_data.data.find((n) => n.id === id);
              const label = node?.label || id;
              return (
                <div
                  key={i}
                  className={juliusSansOne.className + (i === historyStack.length - 1 ? ' font-bold text-[#3C77C4]' : '') + ' text-xs truncate'}
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