import {NodeData, Device, Connection} from './structs'

const node_data: NodeData = {
  data: 
[
//Switches
{
    "id": "sw3",
    "label": "NOC 3",
      "ip": "10.200.0.3",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
      "label": "DIC Cacti Server Trunk",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
      "label": "JKSA Management Port",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
      "label": "Port 3",
      "type": Connection.Ethernet,
      },{
      "id": "p4",
        "label": "MDF3-1F-30V",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
      "label": "Uplink Trunk to IDR-MDF-2F",
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
      "label": "MDF02-1F-27D",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
      "label": "Port 10",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
      "label": "JKSA-Victus-03",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
      "label": "Aruba-1920S-250-Uplink",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
      "label": "PA-820 Management Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
      "label": "PA-820 Management Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
      "label": "MDF03-2F-39D",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
      "label": "Uplink VLAN192 to Linksys SRW224P",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
      "label": "Aruba-7205-PRI-Uplink-1",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
      "label": "Aruba-7205-SEC-Uplink-2",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
      "label": "Trunk link TRK1 to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
      "label": "Trunk link TRK1 to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
      "label": "IDR-Ramp FO Trunk",
        "type": Connection.Ethernet,
      },
      {
      "id": "p22",
      "label": "Aruba-7205-PRI-T1A",
        "type": Connection.Ethernet,
      },
      {
      "id": "p23",
      "label": "BJL FO Trunk",
        "type": Connection.Ethernet,
      },
      {
      "id": "p24",
      "label": "Aruba-7205-SEC-T2A4",
        "type": Connection.Ethernet,
      },
    ]
},
]}