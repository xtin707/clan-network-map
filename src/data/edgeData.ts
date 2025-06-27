import {Connection, Edge, EdgeData} from './structs'

const edge_data: EdgeData = {
  data: [
  {// Converge
    "node": ["ict", "r1"],
    "port": ["p2", "p1"],
    "type": Connection.None
  }, 
  {// Govnet
    "node": ["govnet", "r1"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["govnet", "sw5"],
    "port": ["",""],
    "type": Connection.None
  },
  {// Router
    "node": ["r1", "sw5"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["fw1", "fw2"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["fw-pri", "fw-sec"],
    "port": ["",""],
    "type": Connection.None
  },  
  ]
}

export default edge_data;
