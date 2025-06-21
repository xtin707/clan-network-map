interface Node {
  id: string,
  label: string,
  type: string,
  ports: Port[],
}

interface Port {
  id: string,
  label: string,
}

interface NodeData {
  data: Node[]
}

const node_data: NodeData = {
  data: 
[
  {
    "id": "r1",
    "label": "Main Office Router (R1)",
    "type": "Router",
    "ports": [
      {
        "id": "p1",
        "label": "WAN Uplink Port (GigabitEthernet0/0)"
      },
      {
        "id": "p2",
        "label": "LAN Core Switch Port (GigabitEthernet0/1)"
      },
      {
        "id": "p3",
        "label": "DMZ Server Farm Port (GigabitEthernet0/2)"
      },
      {
        "id": "p4",
        "label": "Wireless AP Network Port (GigabitEthernet0/3)"
      },
      {
        "id": "p5",
        "label": "Guest Network Port (GigabitEthernet0/4)"
      },
      {
        "id": "p6",
        "label": "VoIP Gateway Port (GigabitEthernet0/5)"
      },
      {
        "id": "p7",
        "label": "Branch Office VPN Port (GigabitEthernet0/6)"
      },
      {
        "id": "p8",
        "label": "Management Port (GigabitEthernet0/7)"
      },
      {
        "id": "p9",
        "label": "Spare Port 1 (GigabitEthernet0/8)"
      },
      {
        "id": "p10",
        "label": "Spare Port 2 (GigabitEthernet0/9)"
      },
      {
        "id": "p11",
        "label": "Console Port"
      },
      {
        "id": "p12",
        "label": "USB Port (for configuration backup)"
      }
    ]
  },
  {
    "id": "r2",
    "label": "Branch Office Router (R2)",
    "type": "Router",
    "ports": [
      {
        "id": "p1",
        "label": "WAN Uplink to Main Office (GigabitEthernet0/0)"
      },
      {
        "id": "p2",
        "label": "LAN Switch Port (GigabitEthernet0/1)"
      },
      {
        "id": "p3",
        "label": "VoIP Handset Network Port (GigabitEthernet0/2)"
      },
      {
        "id": "p4",
        "label": "Guest Wi-Fi Port (GigabitEthernet0/3)"
      },
      {
        "id": "p5",
        "label": "Local Server Port (GigabitEthernet0/4)"
      },
      {
        "id": "p6",
        "label": "Printer Network Port (GigabitEthernet0/5)"
      },
      {
        "id": "p7",
        "label": "Security Camera Port (GigabitEthernet0/6)"
      },
      {
        "id": "p8",
        "label": "Management Port (GigabitEthernet0/7)"
      },
      {
        "id": "p9",
        "label": "Spare Port 1 (GigabitEthernet0/8)"
      },
      {
        "id": "p10",
        "label": "Console Port"
      }
    ]
  },
  {
    "id": "sw1",
    "label": "Data Center Core Switch (SW1)",
    "type": "Switch",
    "ports": [
      {
        "id": "p1",
        "label": "Uplink to Router (GigabitEthernet1/0/1)"
      },
      {
        "id": "p2",
        "label": "Server Rack 1 Port (GigabitEthernet1/0/2)"
      },
      {
        "id": "p3",
        "label": "Server Rack 2 Port (GigabitEthernet1/0/3)"
      },
      {
        "id": "p4",
        "label": "Storage Area Network (SAN) Port (GigabitEthernet1/0/4)"
      },
      {
        "id": "p5",
        "label": "Virtualization Host 1 Port (GigabitEthernet1/0/5)"
      },
      {
        "id": "p6",
        "label": "Virtualization Host 2 Port (GigabitEthernet1/0/6)"
      },
      {
        "id": "p7",
        "label": "Backup Server Port (GigabitEthernet1/0/7)"
      },
      {
        "id": "p8",
        "label": "Network Monitoring Port (GigabitEthernet1/0/8)"
      },
      {
        "id": "p9",
        "label": "Inter-Switch Link (ISL) to SW2 (GigabitEthernet1/0/9)"
      },
      {
        "id": "p10",
        "label": "Inter-Switch Link (ISL) to SW3 (GigabitEthernet1/0/10)"
      },
      {
        "id": "p11",
        "label": "Access Layer Switch 1 Port (GigabitEthernet1/0/11)"
      },
      {
        "id": "p12",
        "label": "Access Layer Switch 2 Port (GigabitEthernet1/0/12)"
      },
      {
        "id": "p13",
        "label": "IP Camera System Port (GigabitEthernet1/0/13)"
      },
      {
        "id": "p14",
        "label": "HVAC System Control Port (GigabitEthernet1/0/14)"
      }
    ]
  },
  {
    "id": "sw2",
    "label": "Office Floor 1 Access Switch (SW2)",
    "type": "Switch",
    "ports": [
      {
        "id": "p1",
        "label": "Uplink to Core Switch (GigabitEthernet1/0/1)"
      },
      {
        "id": "p2",
        "label": "Workstation 1 Port (GigabitEthernet1/0/2)"
      },
      {
        "id": "p3",
        "label": "Workstation 2 Port (GigabitEthernet1/0/3)"
      },
      {
        "id": "p4",
        "label": "Workstation 3 Port (GigabitEthernet1/0/4)"
      },
      {
        "id": "p5",
        "label": "Workstation 4 Port (GigabitEthernet1/0/5)"
      },
      {
        "id": "p6",
        "label": "Wireless AP 1 Port (GigabitEthernet1/0/6) (PoE)"
      },
      {
        "id": "p7",
        "label": "IP Phone 1 Port (GigabitEthernet1/0/7) (PoE)"
      },
      {
        "id": "p8",
        "label": "IP Phone 2 Port (GigabitEthernet1/0/8) (PoE)"
      },
      {
        "id": "p9",
        "label": "Conference Room PC Port (GigabitEthernet1/0/9)"
      },
      {
        "id": "p10",
        "label": "Network Printer Port (GigabitEthernet1/0/10)"
      },
      {
        "id": "p11",
        "label": "Spare Port 1 (GigabitEthernet1/0/11)"
      },
      {
        "id": "p12",
        "label": "Spare Port 2 (GigabitEthernet1/0/12)"
      },
      {
        "id": "p13",
        "label": "CCTV Camera 1 Port (GigabitEthernet1/0/13) (PoE)"
      },
      {
        "id": "p14",
        "label": "CCTV Camera 2 Port (GigabitEthernet1/0/14) (PoE)"
      },
      {
        "id": "p15",
        "label": "Door Access Control Port (GigabitEthernet1/0/15)"
      },
      {
        "id": "p16",
        "label": "Building Management System Port (GigabitEthernet1/0/16)"
      }
    ]
  },
  {
    "id": "h1",
    "label": "Lab Testing Hub (H1)",
    "type": "Hub",
    "ports": [
      {
        "id": "p1",
        "label": "Test Workstation 1 Port"
      },
      {
        "id": "p2",
        "label": "Test Workstation 2 Port"
      },
      {
        "id": "p3",
        "label": "Network Analyzer Connection Port"
      },
      {
        "id": "p4",
        "label": "Legacy Device Connection Port"
      },
      {
        "id": "p5",
        "label": "Temporary Connection 1 Port"
      },
      {
        "id": "p6",
        "label": "Temporary Connection 2 Port"
      },
      {
        "id": "p7",
        "label": "Shared Resource Port 1"
      },
      {
        "id": "p8",
        "label": "Shared Resource Port 2"
      },
      {
        "id": "p9",
        "label": "External Device Port"
      },
      {
        "id": "p10",
        "label": "Unused Port 1"
      }
    ]
  },
  {
    "id": "h2",
    "label": "Conference Room Hub (H2)",
    "type": "Hub",
    "ports": [
      {
        "id": "p1",
        "label": "Presenter Laptop Port"
      },
      {
        "id": "p2",
        "label": "Projector Connection Port"
      },
      {
        "id": "p3",
        "label": "Guest Laptop 1 Port"
      },
      {
        "id": "p4",
        "label": "Guest Laptop 2 Port"
      },
      {
        "id": "p5",
        "label": "Video Conferencing Unit Port"
      },
      {
        "id": "p6",
        "label": "Audio System Port"
      },
      {
        "id": "p7",
        "label": "Temporary Wired Access Port 1"
      },
      {
        "id": "p8",
        "label": "Temporary Wired Access Port 2"
      }
    ]
  },
  {
    "id": "ap1",
    "label": "Office Wireless Access Point (AP1)",
    "type": "Access Point",
    "ports": [
      {
        "id": "p1",
        "label": "Uplink to Switch Port (GigabitEthernet)"
      },
      {
        "id": "p2",
        "label": "Power over Ethernet (PoE) Input Port"
      }
    ]
  },
  {
    "id": "ap2",
    "label": "Warehouse Wireless Access Point (AP2)",
    "type": "Access Point",
    "ports": [
      {
        "id": "p1",
        "label": "Uplink to Switch Port (GigabitEthernet)"
      },
      {
        "id": "p2",
        "label": "Power over Ethernet (PoE) Input Port"
      },
      {
        "id": "p3",
        "label": "External Antenna Port"
      }
    ]
  },
  {
    "id": "fw1",
    "label": "Perimeter Firewall (FW1)",
    "type": "Firewall",
    "ports": [
      {
        "id": "p1",
        "label": "WAN Interface (Outside)"
      },
      {
        "id": "p2",
        "label": "LAN Interface (Inside)"
      },
      {
        "id": "p3",
        "label": "DMZ Interface"
      },
      {
        "id": "p4",
        "label": "Management Interface"
      },
      {
        "id": "p5",
        "label": "High Availability Sync Port"
      },
      {
        "id": "p6",
        "label": "Log Collection Port"
      },
      {
        "id": "p7",
        "label": "VPN Tunnel Port (Site-to-Site)"
      },
      {
        "id": "p8",
        "label": "VPN Tunnel Port (Remote Access)"
      }
    ]
  },
  {
    "id": "lb1",
    "label": "Web Server Load Balancer (LB1)",
    "type": "Load Balancer",
    "ports": [
      {
        "id": "p1",
        "label": "Client-Facing Interface (Public)"
      },
      {
        "id": "p2",
        "label": "Backend Server Interface (Internal)"
      },
      {
        "id": "p3",
        "label": "Management Port"
      },
      {
        "id": "p4",
        "label": "Health Check Monitoring Port"
      },
      {
        "id": "p5",
        "label": "High Availability Link Port"
      }
    ]
  },
  {
    "id": "ips1",
    "label": "Intrusion Prevention System (IPS1)",
    "type": "IPS",
    "ports": [
      {
        "id": "p1",
        "label": "Monitored Network Ingress Port"
      },
      {
        "id": "p2",
        "label": "Monitored Network Egress Port"
      },
      {
        "id": "p3",
        "label": "Management Port"
      },
      {
        "id": "p4",
        "label": "Alerts and Logging Port"
      }
    ]
  }
]
};

export default node_data;
