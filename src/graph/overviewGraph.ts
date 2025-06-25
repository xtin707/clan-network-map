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
    <table border="0" cellborder="0" cellspacing="0" cellpadding="6">
      ${content}
    </table>
  >`;
}




export function generateOverviewGraph(node_data: any, edge_data: any): string {
  const G = new Digraph('G');

  G.graph({
    bgcolor: 'none'

  });

  console.log(absFilePath('router.svg'));

  const nodes: Node[] = [];

  for (const val of node_data) {
    let kaomoji = '';

    if (val.type === 'Router') {
      kaomoji = `ᯤ`
    }
    else if (val.type === 'Switch'){
      kaomoji = '⇄'
    }
    else if (val.type === 'Firewall'){
      kaomoji = '🔥'
    }
    else if (val.type === 'ISP'){
      kaomoji = '☁︎'
    }
    else if (val.type === 'Hub'){
      kaomoji = '🖧'
    }
    else{
      kaomoji = '🕋'
    }
    
    const node = new Node(val.id, {
      shape: 'box',
      style: 'rounded,filled,bold',
      color: '#00573f',
      fillcolor: '#fdf8e3',
      label: createHtmlLabel(`
<tr><td><font point-size="20" color="#00573f">${kaomoji}</font></td><td>${val.label}</td></tr>
`),

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
      {label: '', class: 'graph-edge', arrowhead: 'none'});
  }

  return toDot(G);
};

