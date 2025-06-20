import { Digraph, Node, Edge, toDot } from 'ts-graphviz';
import SVGViewer from '../components/GraphViewer';
import graphviz from 'graphviz-wasm';

function createHtmlLabel(content: string): string {

  return `<
    <table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      ${content}
    </table>
  >`;
}


function generateMyGraphDot(): string {
  const G = new Digraph('G');

  const nodeA = new Node('A', {
    shape: 'none',
    margin: 0,
    label: createHtmlLabel(`
      <tr><td colspan="2">Node A Title</td></tr>
      <tr>
        <td port="port_a1">Input 1</td>
        <td port="port_a2">Input 2</td>
      </tr>
      <tr>
        <td port="port_a3">Output 1</td>
        <td port="port_a4">Output 2</td>
      </tr>
    `),
  });

  const nodeB = new Node('B', {
    shape: 'none',
    margin: 0,
    label: createHtmlLabel(`
      <tr><td colspan="1">Node B Title</td></tr>
      <tr>
        <td port="port_b_in">Input Port</td>
      </tr>
      <tr>
        <td port="port_b_out">Output Port</td>
      </tr>
    `),
  });

  const nodeC = new Node('C', {
    shape: 'box',
    label: 'Node C', 
  });

  G.addNode(nodeA);
  G.addNode(nodeB);
  G.addNode(nodeC);

  G.edge(
    [nodeA.port('port_a3'), nodeB.port('port_b_in')],
    { label: 'A.out1 -> B.in', class: 'graph-edge' }
  );

  G.edge(
    [nodeA.port('port_a4'), nodeC],
    { label: 'A.out2 -> C', class: 'graph-edge'}
  );

  G.edge(
      [nodeB.port('port_b_out'), nodeA.port('port_a1')],
      { label: 'B.out -> A.in1' }
  );

  return toDot(G);
}

export default async function HomePage() {
  const myDotString = generateMyGraphDot();

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
  );
}
