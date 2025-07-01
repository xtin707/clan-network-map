import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import NetworkDiagram from '@/components/D3Graph';




export default async function HomePage() {

  return (
    <main className="bg-white min-h-screen">
      <header className="bg-black text-white flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <img src="/up-logo.png" alt="UPB Logo" className="h-10 w-auto"/>
          <h1 className="text-xl font-semibold tracking-widest">UPB Network Diagram</h1>
        </div>
        
        <div className="relative group">
          <img src="/info.svg" alt="Info" className="w-6 h-6 cursor-pointer"/>
          <div className="absolute right-0 mt-2 w-max bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click the node to see the detailed view of ports.
          </div>
        </div>
      </header>

        <NetworkDiagram nodeData={node_data} edgeData={edge_data} width={1400} height={550}/>
    </main>
  );
}
