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
      }
    ]
  },

  // CAC
  {
  "id": "cac",
      "label": "CAC",
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
    ]
  },
  {
  "id": "cac-t",
      "label": "CAC",
      "ip": "",
      "type": Device.AccessSwitch,
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
  "id": "cac-jl",
      "label": "JournLab",
      "ip": "",
      "type": Device.AccessSwitch,
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

  // CSS
  {
  "id": "css",
      "label": "CSS",
      "ip": "",
      "type": Device.Switch,
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
  "id": "css2",
      "label": "CSS2",
      "ip": "",
      "type": Device.AccessSwitch,
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
  "id": "css3",
      "label": "CSS3",
      "ip": "",
      "type": Device.AccessSwitch,
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

  // CS
  {
  "id": "ka",
      "label": "KA",
      "ip": "",
      "type": Device.Switch,
      "ports": [
      {
        "id": "",
        "label": "Port 1",
        "type": Connection.Ethernet,
      },
    ]
  },
  {
  "id": "hkp",
      "label": "HKP",
      "ip": "",
      "type": Device.AccessSwitch,
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

  // Library
  {
    "id": "lib",
    "label": "Library",
      "ip": "",
    "type": Device.CoreSwitch,
    "ports": [
      {
        "id": "",
      "label": "Port 1",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "l-tech",
    "label": "LIB-TECH",
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
  {
    "id": "wup",
    "label": "WalkUP",
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
  
]   
};

export default node_data;
