interface Edge {
  node: [string, string],
  port: [string, string],
}

interface EdgeData {
  data: Edge[]
}

const edge_data: EdgeData = {
  data: [
  {
    "node": ["r1", "sw1"],
    "port": ["p2", "p1"]
  },
  {
    "node": ["r1", "fw1"],
    "port": ["p1", "p1"]
  },
  {
    "node": ["r1", "r2"],
    "port": ["p7", "p1"]
  },
  {
    "node": ["sw1", "sw2"],
    "port": ["p11", "p1"]
  },
  {
    "node": ["sw1", "lb1"],
    "port": ["p2", "p2"]
  },
  {
    "node": ["sw2", "ap1"],
    "port": ["p6", "p1"]
  },
  {
    "node": ["sw2", "h2"],
    "port": ["p9", "p1"]
  },
  {
    "node": ["sw2", "ap2"],
    "port": ["p10", "p1"]
  },
  {
    "node": ["h1", "ips1"],
    "port": ["p3", "p1"]
  },
  {
    "node": ["fw1", "lb1"],
    "port": ["p3", "p1"]
  },
  {
    "node": ["lb1", "ips1"],
    "port": ["p4", "p2"]
  }
  ]
}

export default edge_data;
