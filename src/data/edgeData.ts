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
  {// NOC 5
    "node": ["sw5", "fw-pri"],
    "port": ["",""],
    "type": Connection.None
  },
    {
    "node": ["sw5", "fw-pri"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw5", "fw-sec"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw5", "fw-sec"],
    "port": ["",""],
    "type": Connection.None
  },
  {// PA-FW-PRI
    "node": ["fw-pri", "fw-sec"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["fw-pri", "fw-sec"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["fw-pri", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["fw-pri", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {// PA-FW-SEC
    "node": ["fw-sec", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["fw-sec", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {// NOC 4 connections
    "node": ["sw4", "sw2"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw1", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw4", "sw3"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["cac", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["css", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["ka", "sw4"],
    "port": ["",""],
    "type": Connection.None
  },
  {// NOC 4 connections-2
    "node": ["sw4", "lib"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw4", "sw6"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["lib", "l-tech"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["lib", "rotc"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["lib", "hpe"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["lib", "breha"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["breha", "wup"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["lib", "balay"],
    "port": ["",""],
    "type": Connection.None
  },
  {// NOC 2
    "node": ["sw2", "fw1"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw2", "fw2"],
    "port": ["",""],
    "type": Connection.None
  },
  {// CAC connections
    "node": ["cac-t", "cac"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["cac-jl", "cac"],
    "port": ["",""],
    "type": Connection.None
  },
  {// CSS connections
    "node": ["css2", "css"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node":  ["css3", "css"],
    "port": ["",""],
    "type": Connection.None
  },
  {// KA connections
    "node": ["ka", "hkp"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node":  ["hkp", "hkp-ap"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node":  ["hkp", "himn"],
    "port": ["",""],
    "type": Connection.None
  },

  {// NOC 1 connections
    "node": ["sw1", "isp1"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node":  ["sw1", "isp2"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node":  ["hkp", "himn"],
    "port": ["",""],
    "type": Connection.None
  },

  {// PF1
    "node": ["fw1", "fw2"],
    "port": ["",""],
    "type": Connection.None
  },
  {// NOC 3 connections
    "node": ["sw3", "nc3-b"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw3", "nc3-hpe"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw3", "nc3-a1"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw3", "nc3-a2"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["nc3-hpe", "nc3-mk"],
    "port": ["",""],
    "type": Connection.None
  },
  {
      "node": ["sw3", "sw9"],
      "port": ["",""],
      "type": Connection.none
  },
  {
    "node": ["sw9", "idr"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw9", "src"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["sw9", "alum"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["idr", "im"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["im", "im1"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["im", "clinic"],
    "port": ["",""],
    "type": Connection.None
  },
  {
    "node": ["clinic", "cmo"],
    "port": ["",""],
    "type": Connection.None
  },
  ]
}

export default edge_data;
