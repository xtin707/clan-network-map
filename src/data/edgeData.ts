import {Connection, EdgeData} from './structs'

const edge_data: EdgeData = {
  data: [
  {// Converge
    "node": ["ict", "r1"],
    "port": ["w1", "w1"],
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

  //Breha
  {
    "node": ["breha-8-port", "wup"],
    "port": ["p9", ""],
    "type": Connection.FiberOptic,
  },

    //LIB-NOC
  {
    "node": ["lib-noc", "breha-8-port"],
    "port": ["", ""],
    "type": Connection.FiberOptic,
  },

  //NOC-SF300
  {
    "node": ["sf300", "cs-res-ax55"],
    "port": ["p8", "p1"],
    "type": Connection.Ethernet,
  },
  {
    "node": ["sf300", "bio-fr"],
    "port": ["g1", "p1"],
    "type": Connection.Ethernet,
  },
  {
    "node": ["sf300", "glasswares"],
    "port": ["g4", "p1"],
    "type": Connection.Ethernet,
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
  {
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
    "node": ["sw4", "sf300"],
    "port": ["","g2"],
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
    "node": ["lib", "balayintl-24-port"],
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
    "port": ["p1","p21"],
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
      "type": Connection.None
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
  {
    node: ["lib-trunk-8-port", "lib-noc"],
    port: ["port-2", "aruba-port"],
    type: Connection.None
  },
  {
    node: ["lib-trunk-8-port", "J9802A-2"],
    port: ["p3", "j9802a-2-port"],
    type: Connection.None
  },
  {
    node: ["lib-trunk-8-port", "LIB2-HP2610-24"],
    port: ["p4", "hp2610-port"],
    type: Connection.None
  },
  {
    node: ["lib-trunk-8-port", "J9802A-5"],
    port: ["p5", "j9802a-5-port"],
    type: Connection.None
  },
  {
    node: ["lib-trunk-8-port", "J9802A-3"],
    port: ["p7", "j9802a-3-port"],
    type: Connection.None
  },
  {
    node: ["lib-circulation", "J9802A-LIB-2F-TechRoom"],
    port: ["p8", "p5"],
    type: Connection.Ethernet
  }
  ]
}

export default edge_data;
