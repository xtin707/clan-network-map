import {NodeData, Device, Connection} from './structs'

const node_data: NodeData = {
  data: 
[
//Switches
{
    "id": "sw2",
    "label": "NOC 2",
      "ip": "10.200.0.2",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
      "label": "Trunk link TRK1 to NOC4",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
      "label": "Trunk link TRK1 to NOC4",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
      "label": "ValidIP Port for VMs",
      "type": Connection.Ethernet,
      },{
      "id": "p4",
        "label": "VLAN1000 Port for VMs",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
      "label": "Trunk port link to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
      "label": "HRDO Biometrics MDF3-1F-17D",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
      "label": "Ruckus Eduroam AP",
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
      "label": "Uplink to pfSense1 WAN",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
      "label": "Test Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
      "label": "Test Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
      "label": "Uplink to DIC 30D NAS Switch",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
      "label": "Uplinkt to OPA 24D 8-port GbE switch",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
      "label": "Uplink Port to MDF03-DES-1026G",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
      "label": "Port 16",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
      "label": "UPB VM Server 04 - FEC Desktop",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
      "label": "Trunk Port9",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p22",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p23",
      "label": "DNS-DHCP-Server-Trunk",
        "type": Connection.Ethernet,
      },
      {
      "id": "p24",
      "label": "Port 24",
        "type": Connection.Ethernet,
      },
    ]
},
]}