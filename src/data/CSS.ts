import {NodeData, Device, Connection} from './structs'
// Includes (1) CSS-24-port, (2) CSS-1920-24-port, (3) CSS-Deans-8-port

const node_data: NodeData = {
  data: 
[
// CSS-24-port
  {
    "id": "css",
    "label": "CSS",
    "ip": "10.200.0.107",
    "type": Device.Switch,
    "ports": [
      {
        "id": "p1",
        "label": "Port 1",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
        "label": "Port 2",
        "type": Connection.Ethernet,
      },
      {
        "id": "p3",
        "label": "Port 3",
        "type": Connection.Ethernet,
      },
      {
        "id": "p4",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
        "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
        "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
        "label": "Port 7",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
        "label": "CSS-HP-ProCurve-2610-24",
        "type": Connection.Ethernet,
      },
      {
        "id": "p9",
        "label": "Port 9",
        "type": Connection.Ethernet,
      },
      {
        "id": "p10",
        "label": "Port 10",
        "type": Connection.Ethernet,
      },
      {
        "id": "p11",
        "label": "Port 11",
        "type": Connection.Ethernet,
      },
      {
        "id": "p12",
        "label": "Port 12",
        "type": Connection.Ethernet,
      },
      {
        "id": "p13",
        "label": "Port 13",
        "type": Connection.Ethernet,
      },
      {
        "id": "p14",
        "label": "Port 14",
        "type": Connection.Ethernet,
      },
      {
        "id": "p15",
        "label": "Port 15",
        "type": Connection.Ethernet,
      },
      {
        "id": "p16",
        "label": "Port 16",
        "type": Connection.Ethernet,
      },
      {
        "id": "p17",
        "label": "Port 17",
        "type": Connection.Ethernet,
      },
      {
        "id": "p18",
        "label": "Port 18",
        "type": Connection.Ethernet,
      },
      {
        "id": "p19",
        "label": "Port 19",
        "type": Connection.Ethernet,
      },
      {
        "id": "p20",
        "label": "Port 20",
        "type": Connection.Ethernet,
      },
      {
        "id": "p21",
        "label": "Port 21",
        "type": Connection.Ethernet,
      },
      {
        "id": "p22",
        "label": "Port 22",
        "type": Connection.Ethernet,
      },
      {
        "id": "p23",
        "label": "Port 23",
        "type": Connection.Ethernet,
      },
      {
        "id": "p24",
        "label": "Port 24",
        "type": Connection.Ethernet,
      },
      {
        "id": "p25",
        "label": "Port 25",
        "type": Connection.Ethernet,
      },
      {
        "id": "p26",
        "label": "Port 26",
        "type": Connection.Ethernet,
      },
      {
        "id": "p27",
        "label": "Port 27",
        "type": Connection.FiberOptic,
      },
    ],
  },

// CSS-1920-24-port
  {
    "id": "css3",
    "label": "CSS3",
    "ip": "10.200.107.2",
    "type": Device.Switch,
    "ports": [
      {
        "id": "g1", //g# for gigabit ethernet
        "label": "Port 1",
        "type": Connection.Ethernet,
      },
      {
        "id": "g2",
        "label": "Port 2",
        "type": Connection.Ethernet,
      },
      {
        "id": "g3",
        "label": "Port 3",
        "type": Connection.Ethernet,
      },
      {
        "id": "g4",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
        "id": "g5",
        "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
        "id": "g6",
        "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
        "id": "g7",
        "label": "Port 77",
        "type": Connection.Ethernet,
      },
      {
        "id": "g8",
        "label": "Port 8",
        "type": Connection.Ethernet,
      },
      {
        "id": "g9",
        "label": "Port 9",
        "type": Connection.Ethernet,
      },
      {
        "id": "g10",
        "label": "Port 10",
        "type": Connection.Ethernet,
      },
      {
        "id": "g11",
        "label": "Port 11",
        "type": Connection.Ethernet,
      },
      {
        "id": "g12",
        "label": "Port 12",
        "type": Connection.Ethernet,
      },
      {
        "id": "g13",
        "label": "Port 13",
        "type": Connection.Ethernet,
      },
      {
        "id": "g14",
        "label": "Port 14",
        "type": Connection.Ethernet,
      },
      {
        "id": "g15",
        "label": "Port 15",
        "type": Connection.Ethernet,
      },
      {
        "id": "g16",
        "label": "Port 16",
        "type": Connection.Ethernet,
      },
      {
        "id": "g17",
        "label": "Port 17",
        "type": Connection.Ethernet,
      },
      {
        "id": "g18",
        "label": "Port 18",
        "type": Connection.Ethernet,
      },
      {
        "id": "g19",
        "label": "Port 19",
        "type": Connection.Ethernet,
      },
      {
        "id": "g20",
        "label": "Port 20",
        "type": Connection.Ethernet,
      },
      {
        "id": "g21",
        "label": "Port 21",
        "type": Connection.Ethernet,
      },
      {
        "id": "g22",
        "label": "Port 22",
        "type": Connection.Ethernet,
      },
      {
        "id": "g23",
        "label": "Port 23",
        "type": Connection.Ethernet,
      },
      {
        "id": "g24",
        "label": "Port 24",
        "type": Connection.Ethernet,
      },
      {
        "id": "g25",
        "label": "Port 25",
        "type": Connection.Ethernet,
      },
      {
        "id": "g26",
        "label": "Port 26",
        "type": Connection.Ethernet,
      },
      {
        "id": "g27",
        "label": "Port 27",
        "type": Connection.Ethernet,
      },
      {
        "id": "g208",
        "label": "Port 28",
        "type": Connection.Ethernet,
      },
    ],
  },

// CSS-Deans-8-port
  {
    "id": "css2",
    "label": "CSS2",
    "ip": "10.200.107.1",
    "type": Device.Switch,
    "ports": [
      {
        "id": "p1",
        "label": "Port 1",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
        "label": "Port 2",
        "type": Connection.Ethernet,
      },
      {
        "id": "p3",
        "label": "Port 3",
        "type": Connection.Ethernet,
      },
      {
        "id": "p4",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
        "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
        "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
        "label": "Port 7",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
        "label": "CSS-HP-ProCurve-2610-24",
        "type": Connection.Ethernet,
      }, 
    ],
  },
]}