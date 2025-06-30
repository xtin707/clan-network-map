import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import NetworkDiagram from '@/components/D3Graph';

export default async function HomePage() {

  return (
    <main className="p-5 text-center bg-[#8A1538] min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-[#FFB81C]">UPB Network Diagram</h1>
      <p className="text-lg mb-8 text-white">Click the node to to see the detailed view of ports</p>
      <div className="max-w-4xl mx-auto bg-gray-500">
        <NetworkDiagram nodeData={node_data} edgeData={edge_data} width={1000} height={700}/>
      </div>
    </main>
  );
}
