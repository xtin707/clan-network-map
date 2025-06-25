import { Digraph, Node, toDot } from 'ts-graphviz';

function createHtmlLabel(content: string): string {
  return `<
    <table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      ${content}
    </table>
  >`;
}

export function generateDetailedGraph(main_node: any, node_data: any, edge_data: any): string {
  const G = new Digraph('G');

  G.graph({
    splines:'ortho',
    bgcolor: 'none'
  });

  let portStrings = ``;

  for (const port of main_node.ports) {
    portStrings = `${portStrings}
<td port="${port.id}">${port.label}</td>`
  };

  // where to edit detailed main table/node
  const mainNode = new Node(main_node.id, {
    shape: 'none',
    style: 'filled',
    fillcolor:'#FFFFFF',
    margin: 0,
    label: createHtmlLabel(`
        <tr><td colspan="${main_node.ports.length}">${main_node.label}</td></tr>
        <tr>
        ${portStrings}
        </tr>`),
    URL: `./${main_node.id}`,
  });

  G.addNode(mainNode);

  for (const entry of edge_data) {
    let partner_index = 0;
    if (entry.node[0] === main_node.id) {
      partner_index = 1;
    } else {
      partner_index = 0;
    }

    const partner_node = node_data.find(item => item.id === entry.node[partner_index]);
    const port_label = partner_node.ports.find(item => item.id === entry.port[partner_index]).label;

      // where to edit detailed subtable/node
      const new_node = new Node(partner_node.id, {
      shape: 'none',
      style: 'filled',
      fillcolor:'#FFFFFF',
      margin: 0,
      label: createHtmlLabel(`
<tr><td port="${entry.port[partner_index]}">${port_label}</td></tr>
<tr><td>${partner_node.label}</td></tr>
`),
      URL: `./${partner_node.id}`
    });

    G.addNode(new_node);

    G.edge(
      [mainNode.port(entry.port[1 - partner_index]), new_node.port(entry.port[partner_index])],
      {class: '', label: ''},
    )

  }

  return toDot(G);
};

