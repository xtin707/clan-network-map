import {NodeData, Device, Connection} from './structs'

const node_data: NodeData = {
  data: 
[
  // ISPs
  {
    "id": "ict",
    "label": "ConvergeICT",
      "ip": "",
    "type": Device.ISP,
    "ports": [
      {
        "id": "p1",
        "label": "Converge Port",
        "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "govnet",
    "label": "iGovNet",
      "ip": "",
    "type": Device.ISP,
    "ports": [
      {
        "id": "p2",
        "label": "Port 1",
        "type": Connection.Ethernet,
      },
      {
        "id": "",
        "label": "Port 2",
        "type": Connection.Ethernet,
      },
    ]
  },
  {
    "id": "isp1",
    "label": "ADSL 1",
      "ip": "",
    "type": Device.ISP,
    "ports": [
      {
        "id": "",
        "label": "Port 1",
        "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "isp2",
    "label": "ADSL 2",
      "ip": "",
    "type": Device.ISP,
    "ports": [
      {
        "id": "",
        "label": "Port 1",
        "type": Connection.Ethernet,
      }
    ]
  },

  // Firewalls
  {
      "id": "fw1",
      "label": "PF1",
      "ip": "",
      "type": Device.Firewall,
      "ports": [
        {
          "id": "",
          "label": "Port 1",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 2",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "fw2",
      "label": "PF2",
      "ip": "",
      "type": Device.Firewall,
      "ports": [
        {
          "id": "",
          "label": "Port 1",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 2",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "fw-pri",
      "label": "PA-FW-PRI",
      "ip": "",
      "type": Device.Firewall,
      "ports": [
        {
          "id": "",
          "label": "Port 1",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 2",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 3",
          "type": Connection.Ethernet,
        },{
          "id": "",
          "label": "Port 4",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 5",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 6",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "fw-sec",
      "label": "PA-FW-SEC",
      "ip": "",
      "type": Device.Firewall,
      "ports": [
        {
          "id": "",
          "label": "Port 1",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 2",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 3",
          "type": Connection.Ethernet,
        },{
          "id": "",
          "label": "Port 4",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 5",
          "type": Connection.Ethernet,
        },
        {
          "id": "",
          "label": "Port 6",
          "type": Connection.Ethernet,
        },
      ]
    },

  // Routers
  {
    "id": "r1",
    "label": "Router",
      "ip": "",
    "type": Device.MainRouter,
    "ports": [
      {
        "id": "",
        "label": "Port 1",
        "type": Connection.Ethernet,
      },{
        "id": "p2",
        "label": "Port 2",
        "type": Connection.Ethernet,
      },{
        "id": "p3",
        "label": "Port 3",
        "type": Connection.Ethernet,
      }
    ]
  },

  // Switches
  {
    "id": "sw1",
    "label": "NOC 1",
      "ip": "",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 2",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 3",
      "type": Connection.Ethernet,
      },{
      "id": "",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
    ]
  },
  {
    "id": "sw2",
    "label": "NOC 2",
      "ip": "",
    "type": Device.CoreSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 2",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 3",
      "type": Connection.Ethernet,
      },{
      "id": "",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
    ]
  },
  {
    "id": "sw3",
    "label": "NOC 3",
      "ip": "",
    "type": Device.CoreSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 2",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 3",
      "type": Connection.Ethernet,
      },{
      "id": "",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
    ]
  },
  {
    "id": "sw4",
    "label": "NOC 4",
      "ip": "",
    "type": Device.CoreSwitch,
    "ports": [
      {
        "id": "port1",
      "label": "Port 1",
      "type": Connection.Ethernet,
      },
      {
      "id": "port2",
      "label": "Port 2",
      "type": Connection.Ethernet,
      },
      {
      "id": "port3",
      "label": "Port 3",
      "type": Connection.Ethernet,
      },{
      "id": "port4",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
      "id": "port5",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "port6",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port7",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port8",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port9",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port10",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port11",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port12",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port13",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port14",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port15",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port16",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port17",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port18",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port19",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port20",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port21",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port22",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port23",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
      {
      "id": "port24",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
    ]
  },
  {
    "id": "sw5",
    "label": "NOC 5",
      "ip": "",
    "type": Device.CoreSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 2",
      "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 3",
      "type": Connection.Ethernet,
      },{
      "id": "",
        "label": "Port 4",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "",
      "label": "Port 6",
        "type": Connection.Ethernet,
      },
    ]
  },  
  {
    "id": "sw6",
    "label": "NOC 6",
      "ip": "",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
 {
    "id": "sw9",
    "label": "NOC 9",
    "ip": "10.200.0.9",
    "type": Device.CoreSwitch,
    "ports": [
      {
      "id": "p1",
      "label": "Management Port V1000",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
      "label": "Management Port V1000",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
      "label": "Public IP VLAN30 - IB104 Port 17V",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
      "label": "Public IP VLAN30",
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
      "label": "Port 8",
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
      "label": "Uplink from CS-Research-AVR AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p14",
      "label": "Uplink from CS-Research-Lab AX72",
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
      "label": "Uplink from OVCA AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
      "label": "Port 18",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
      "label": "Uplink from HRDO AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
      "label": "UPB-Boardroom MDF03-2F-029D",
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
      "type": Connection.Ethernet,
      },
      {
      "id": "p28",
      "label": "Port 28",
      "type": Connection.Ethernet,
      },
      {
      "id": "p29",
      "label": "Port 29",
      "type": Connection.Ethernet,
      },
      {
      "id": "p30",
      "label": "Port 30",
      "type": Connection.Ethernet,
      },
      {
      "id": "p31",
      "label": "Port 31",
      "type": Connection.Ethernet,
      },
      {
      "id": "p32",
      "label": "Port 32",
      "type": Connection.Ethernet,
      },
      {
      "id": "p33",
      "label": "Uplink from HRDO E2500",
      "type": Connection.Ethernet,
      },
      {
      "id": "p34",
      "label": "Uplink from OVCAA AX72 MDF03-2F-14D",
      "type": Connection.Ethernet,
      },
      {
      "id": "p35",
      "label": "Port 35",
      "type": Connection.Ethernet,
      },
      {
      "id": "p36",
      "label": "Trunk port to VM-SRV-03-ProxMox NIC#2",
      "type": Connection.Ethernet,
      },
      {
      "id": "p37",
      "label": "PubilcIP port of CS-BIO-SVR NIC #1",
      "type": Connection.Ethernet,
      },
      {
      "id": "p38",
      "label": "Port 38",
      "type": Connection.Ethernet,
      },
      {
      "id": "p39",
      "label": "VLAN Trunk Port for UPB-VM-SRV-02",
      "type": Connection.Ethernet,
      },
      {
      "id": "p40",
      "label": "Management Port for UPB-VM-SRV-03",
      "type": Connection.Ethernet,
      },
      {
      "id": "p41",
      "label": "UPB-VM-SRV-00 Public Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p42",
      "label": "UPB-VM-SRV-00 Management Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p43",
      "label": "UPB-VM-SRV-02 Public Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p44",
      "label": "UPB-VM-SRV-04 Public Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p45",
      "label": "Trunk",
      "type": Connection.Ethernet,
      },
      {
      "id": "p46",
      "label": "Trunk",
      "type": Connection.Ethernet,
      },
      {
      "id": "p47",
      "label": "Main Uplink to NOC3 GE5",
      "type": Connection.Ethernet,
      },
      {
      "id": "p48",
      "label": "Trunk Port to MFPalaruan PC NIC",
      "type": Connection.Ethernet,
      },
      {
      "id": "p49",
      "label": "SFP FO uplink from SAC 2/F HPE",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p50",
      "label": "SFP FO Uplink from IDR New Rack",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p51",
      "label": "SFP FO Uplink from GuardHouse",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p52",
      "label": "SFP FO Uplink from SRC New Rack",
      "type": Connection.FiberOptic,
      },
    ]
  },

  // CAC
{
    "id": "cac",
    "label": "CAC",
    "ip": "10.200.0.108",
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
            "label": "Port 8",
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
            "label": "Uplink to JournLab",
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
            "label": "Uplink to CAC-Aruba-1930-8G",
            "type": Connection.Ethernet,
        },
        {
            "id": "p26",
            "label": "Uplink to Teatro-Aruba-8G",
            "type": Connection.Ethernet,
        },
        {
            "id": "p27",
            "label": "Port 27",
            "type": Connection.Ethernet,
        },
        {
            "id": "p28",
            "label": "FO-Trunk-to-IB-NOC",
            "type": Connection.FiberOptic,
        }
    ],
},
  {
      "id": "cac-t",
      "label": "Teatro",
      "ip": "",
      "type": Device.AccessSwitch,
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
      ],
  },
  {
      "id": "cac-jl",
      "label": "JournLab",
      "ip": "",
      "type": Device.AccessSwitch,
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
      ],
  },

  // CSS
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

  // CS
{
  "id": "ka",
  "label": "KA",
  "ip": "",
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
      "label": "Port 8",
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
      "label": "FO Port to IB-NOC",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p26",
      "label": "FO Port to HKP-NOC",
      "type": Connection.FiberOptic,
      }
    ]
  },
{
  "id": "hkp",
      "label": "HKP",
      "ip": "10.200.0.103",
      "type": Device.AccessSwitch,
      "ports": [
      {
        "id": "p1",
        "label": "Aruba AP port",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
        "label": "Aruba AP port",
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
        "label": "ATA port",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
        "label": "Port 7",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
        "label": "Port 8",
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
        "label": "HKP_AP AX55 Router Uplink",
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
        "label": "Trunk Link to Himnasyo-NOC",
        "type": Connection.Ethernet,
      },
      {
        "id": "p25",
        "label": "FO Uplink Port to KA-4F-CAB",
        "type": Connection.FiberOptic,
      },
      {
        "id": "p26",
        "label": "FO Port",
        "type": Connection.FiberOptic,
      },
    ]
  },
  {
  "id": "hkp-ap",
      "label": "HKP_AP",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
      {
        "id": "",
        "label": "Port 1",
        "type": Connection.Ethernet,
      }
    ]
  },
{
  "id": "himn",
  "label": "Himnasyo",
  "ip": "10.200.0.118",
  "type": Device.AccessSwitch,
  "ports": [
  {
    "id": "g1",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g2",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g3",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g4",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g5",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
   "id": "g6",
    "label": "EAP-320-1F",
    "type": Connection.Ethernet,
  },
  {
    "id": "g7",
    "label": "EAP-320-2F",
    "type": Connection.Ethernet,
  },
  {
    "id": "g8",
    "label": "EAP-320-3F",
    "type": Connection.Ethernet,
  },
  {
    "id": "g9",
    "label": "TPL-AX72-WAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g10",
    "label": "VLAN107",
    "type": Connection.Ethernet,
  },
  {
    "id": "g11",
    "label": "VLAN107",
    "type": Connection.Ethernet,
  },
  {
    "id": "g12",
    "label": "VLAN107",
    "type": Connection.Ethernet,
  },
  {
    "id": "g13",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g14",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g15",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g16",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g17",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g18",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g19",
    "label": "VLAN30",
    "type": Connection.Ethernet,
  },
  {
    "id": "g20",
    "label": "VLAN30",
    "type": Connection.Ethernet,
  },
  {
    "id": "g21",
    "label": "MGMT",
    "type": Connection.Ethernet,
  },
  {
    "id": "g22",
    "label": "MGMT",
    "type": Connection.Ethernet,
  },
  {
    "id": "g23",
    "label": "Trunk-port",
    "type": Connection.Ethernet,
  },
  {
    "id": "g24",
    "label": "Trunk-to-HKP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g25",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g26",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g27",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g28",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  ]
},

  // Library
 {
    "id": "lib",
    "label": "Library",
    "ip": "10.200.0.106",
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
      "label": "Port 8",
      "type": Connection.Ethernet,
      },
      {
      "id": "p9",
      "label": "Port 9",
      "type": Connection.Ethernet,
      },
      {
      "id": "p10",
      "label": "UPB-ROTC Uplink",
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
      "label": "Mikrotik LIB to BI",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
      "label": "HP-2610-LIB-TECH-Uplink",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
      "label": "HPE-1920S-Uplink",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
      "label": "FO-Uplink-to-IB",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p22",
      "label": "UPB-Balay-Intl-FO-Uplink",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p23",
      "label": "UP-Breha-FO-Uplink",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p24",
      "label": "Test SFP",
      "type": Connection.Ethernet,
      },
    ]
  },

  // Lib-Tech
  {
    "id": "l-tech",
    "label": "LIB-TECH",
      "ip": "10.200.106.3",
    "type": Device.DistributionSwitch,
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
      "label": "J9802A-LIB-2F-TechRoom	Bridge	Bridge",
      "type": Connection.Ethernet,
      },
      {
        "id": "p8",
      "label": "A0-1D-48-5C-50-D0",
      "type": Connection.Ethernet,
      }
    ]
  },

  {
    "id": "rotc",
    "label": "ROTC",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "hpe",
    "label": "HPE-1920S-247",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "breha",
    "label": "Breha",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },

  // WalkUP
  {
    "id": "wup",
    "label": "WalkUP",
      "ip": "10.200.100.242",
    "type": Device.AccessSwitch,
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
      "label": "Port 8",
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
      "label": "CAT6 Uplink to 6F",
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
      "id": "23",
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
      "label": "FO Trunk to LIB-NOC",
      "type": Connection.Ethernet,
      },
      {
      "id": "p26",
      "label": "Port 26",
      "type": Connection.Ethernet,
      },
    ]
  },

  {
    "id": "balay",
    "label": "Balay-Intl",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },

  // IM
  {
    "id": "idr",
    "label": "IDR",
      "ip": "",
    "type": Device.Switch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "src",
    "label": "SRC",
      "ip": "",
    "type": Device.Switch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "alum",
    "label": "Alumni",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
 {
    "id": "im",
    "label": "IM",
    "ip": "10.200.0.104",
    "type": Device.DistributionSwitch,
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
      "label": "Port 8",
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
      "label": "Uplink port to ArubaIO-8G-IM-Ramp",
      "type": Connection.Ethernet,
      },
      {
      "id": "p26",
      "label": "Uplink port to IDR-MDF-SW135-P43",
      "type": Connection.Ethernet,
      },
      {
      "id": "p27",
      "label": "FO-Trunk-to-SAC",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p28",
      "label": "FO-Trunk-to-IB-NOC",
      "type": Connection.FiberOptic,
      },
    ]
  },
  {
    "id": "im1",
    "label": "Aruba-1930S-8G-IM",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "clinic",
    "label": "Clinic",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "cmo",
    "label": "CMO",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },

  // others
  {
    "id": "nc3-b",
    "label": "Bulwagan",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "nc3-hpe",
    "label": "HPE-1920S-250",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "nc3-mk",
    "label": "MK-HPE-1920S",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "nc3-a1",
    "label": "Aruba-01",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "nc3-a2",
    "label": "Aruba-02",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
{
"id": "sf300",
"label": "NOC-SF300",
      "ip": "192.168.1.246",
    "type": Device.DistributionSwitch,
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
            "label": "Uplink to CS-Research AX55",
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
            "label": "Uplink to JournLab",
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
            "id": "g1",
            "label": "BIO-FR-AX72-MDF02-2F-02D",
            "type": Connection.Ethernet,
        },
        {
            "id": "g2",
            "label": "Trunk Uplink to NOC4",
            "type": Connection.Ethernet,
        },
        {
            "id": "g3",
            "label": "Port 27",
            "type": Connection.Ethernet,
        },
        {
            "id": "g4",
            "label": "Trunk to Glasswares ArubaIO",
            "type": Connection.FiberOptic,
        }
    ]
  },
  
]   
};

export default node_data;
