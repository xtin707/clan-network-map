import SVGViewer from '@/components/GraphViewer';
import graphviz from 'graphviz-wasm';
import node_data from '@/data/nodeData';
import edge_data from '@/data/edgeData';
import {generateDetailedGraph} from '@/graph/detailedGraph';


export default async function Page({
  params,
  }: {
    params: Promise<{router: string}>
}) {
  const page_data = await params;
  const main_node = node_data.data.find(node => node.id === page_data.router);
  const node_ids = [];
  const filtered_node = [];
  const filtered_edge = [];

  for (const entry of edge_data.data) {
    if (entry.node.includes(main_node.id)) {
      filtered_edge.push(entry);
      node_ids.push(entry.node[0]);
      node_ids.push(entry.node[1]);
    }
  };

  let unique_ids = [...new Set(node_ids)];

  unique_ids = unique_ids.filter(item => item !== main_node.id);

  for (const entry of unique_ids) {
    const node = node_data.data.find(node => node.id === entry);
    filtered_node.push(node);
  }

  const myDotString = generateDetailedGraph(main_node, filtered_node, filtered_edge);

  let svgString: string = '';
  let error: string | null = null;

  try {
    await graphviz.loadWASM();
    svgString = graphviz.layout(myDotString, 'svg', 'dot');
  } catch (e: any) {
    console.error("Error generating SVG on server:", e);
    error = `Failed to generate graph SVG on server: ${e.message || 'Unknown error'}`;
  }

  return (
    <main className="p-5 text-center bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Graphviz in Next.js (Server-Side Generation)</h1>
      <p className="text-lg mb-8 text-gray-600">This graph is generated server-side using ts-graphviz and graphviz-wasm.</p>
      <div className="max-w-4xl mx-auto">
        {/* Pass the SVG string and error to the new component */}
        <SVGViewer svgString={svgString} error={error} />
      </div>
    </main>

    // need back/view prev and home page
  );
}
