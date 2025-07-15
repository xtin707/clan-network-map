import {NodeData, Device, Connection} from './structs'

const node_data: NodeData = {
  data: 
[
//Switches
{
    "id": "sw4",
    "label": "NOC 4",
      "ip": "10.200.0.4",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
      "label": "Uplink to PA820-PRI",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
      "label": "Uplink to PA820-PRI",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
      "label": "Uplink to PA820-SEC",
      "type": Connection.Ethernet,
      },{
      "id": "p4",
        "label": "Uplink to PA820-SEC",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
      "label": "Uplink to VLE2 Server",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
      "label": "SNO Trunk Port to DGS-1100-26MPP",
        "type": Connection.Ethernet,
      },
      {
      "id": "p8",
      "label": "Management",
        "type": Connection.Ethernet,
      },
      {
      "id": "p9",
      "label": "Uplink to MDF2 Cisco SG100-16",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
      "label": "Port 10",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
      "label": "Trunk Port to KA-301",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
      "label": "Trunk port to MDF2-SF-300-24P",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
      "label": "Trunk link TRK3 to NOC2",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
      "label": "Trunk port to SNO-SF-300-Domz-Desk",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
      "label": "Trunk link TRK3 to NOC2",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
      "label": "Uplink to MDF2 SRW224P",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
      "label": "Trunk link TRK2 to NOC1",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
      "label": "Trunk link TRK1 to NOC3",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
      "label": "Trunk link TRK2 to NOC1",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
      "label": "Trunk link TRK1 to NOC3",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
      "label": "LIB FO Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p22",
      "label": "CAC FO Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p23",
      "label": "KA-Math FO Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p24",
      "label": "CSS FO Trunk Port",
        "type": Connection.Ethernet,
      },
    ]
},
]}