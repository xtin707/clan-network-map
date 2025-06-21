import { Digraph, Node, toDot } from 'ts-graphviz';

export function generateOverviewGraph(node_data: any, edge_data: any): string {
  const G = new Digraph('G');

  const nodes: Node[] = [];

  for (const val of node_data) {
    const node = new Node(val.id, {
      shape: 'box',
      label: `${val.label}`,
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

