import {NodeData, Node, Port, Device, Connection} from './structs'

const node_data: NodeData = {
  data: 
[
  // ISPs
  {
    "id": "ict",
    "label": "ConvergeICT",
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
    "id": "sw5",
    "label": "NOC 5",
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
    "id": "sw9",
    "label": "NOC 9",
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
  "id": "cac-t",
      "label": "CAC",
      "type": Device.Router,
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
      "type": Device.Router,
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
      "type": Device.Router,
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
      "type": Device.Router,
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
      "type": Device.Router,
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
      "type": Device.Router,
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
      "type": Device.Router,
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
    "id": "l-tech",
    "label": "LIB-TECH",
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
    "type": Device.Router,
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
