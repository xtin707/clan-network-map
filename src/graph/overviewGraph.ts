import { Digraph, Node, toDot } from 'ts-graphviz';
import path from 'path';
import fs from 'fs';

function absFilePath(file_name: string): string { const publicDirec = path.join(process.cwd(), 'public');
  const absDirec = path.join(publicDirec, file_name)

  try {
    const imageData = fs.readFileSync(absDirec);

    console.log('Image read');

  } catch(error) {
    console.error(error);
  }

  return absDirec;
}

function createHtmlLabel(content: string): string {
  return `<
    <table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      ${content}
    </table>
  >`;
}

export function generateOverviewGraph(node_data: any, edge_data: any): string {
  const G = new Digraph('G');

  console.log(absFilePath('router.svg'));

  const nodes: Node[] = [];

  for (const val of node_data) {
    const node = new Node(val.id, {
      shape: 'box',
      label: createHtmlLabel(`
<tr><td>${val.label}</td></tr>
`)
      URL: `./${val.id}`,
    });
    nodes.push(node);
  }

  for (const node of nodes) {
    G.addNode(node);
  }

  for (const edge of edge_data) {
    const node1 = nodes.find(node => node.id === edge.node[0]);
    const node2 = nodes.find(node => node.id === edge.node[1]);
    G.edge(
      [node1, node2],
      {label: '', class: ''});
  }

  return toDot(G);
};

