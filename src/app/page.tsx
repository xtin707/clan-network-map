import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import NetworkDiagram from '@/components/D3Graph';


export default async function HomePage() {

  return (
    <main className="p-5 text-center bg-[#C6CDE0] min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-black">UPB Network Diagram</h1>
      <p className="text-lg mb-8 text-gray-500">Click the node to to see the detailed view of ports</p>
      <div className="h-auto w-full bg-white justify-center border rounded-lg">
        <NetworkDiagram nodeData={node_data} edgeData={edge_data} width={1400} height={550}/>
      </div>
    </main>
  );
}
