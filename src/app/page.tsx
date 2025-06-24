import SVGViewer from '../components/GraphViewer';
import graphviz from 'graphviz-wasm';
import node_data from '../data/nodeData';
import edge_data from '../data/edgeData';
import {generateOverviewGraph} from '../graph/overviewGraph';

export default async function HomePage() {
  const myDotString = generateOverviewGraph(node_data.data, edge_data.data);

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
      <h1 className="text-4xl font-bold mb-4 text-gray-800">UPB Network Diagram</h1>
      <p className="text-lg mb-8 text-gray-600">Click the node to to see the detailed view of ports</p>
      <div className="max-w-4xl mx-auto">
        {/* Pass the SVG string and error to the new component */}
        <SVGViewer svgString={svgString} error={error} />
      </div>
    </main>
  );
}
