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
          "port_num": "Port 1",
        "label": "Converge Port",
        "type": Connection.FiberOptic,
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
        "id": "p1",
          "port_num": "Port 1",
        "label": "Port 1",
        "type": Connection.FiberOptic
      },
      {
        "id": "p2",
          "port_num": "Port 2",
        "label": "",
        "type": Connection.FiberOptic,
      },
    ]
  },
  {
    "id": "adsl1",
    "label": "ADSL 1",
      "ip": "",
    "type": Device.ISP,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
        "label": "",
        "type": Connection.FiberOptic,
      }
    ]
  },
  {
    "id": "adsl2",
    "label": "ADSL 2",
      "ip": "",
    "type": Device.ISP,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
        "label": "",
        "type": Connection.FiberOptic,
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
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
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
          "id": "p1",
          "port_num": "Port 1",
          "label": "Port 1",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
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
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p3",
          "port_num": "Port 3",
          "label": "",
          "type": Connection.Ethernet,
        },{
          "id": "p4",
          "port_num": "Port 4",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p5",
          "port_num": "Port 5",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p6",
          "port_num": "Port 6",
          "label": "",
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
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p3",
          "port_num": "Port 3",
          "label": "",
          "type": Connection.Ethernet,
        },{
          "id": "p4",
          "port_num": "Port 4",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p5",
          "port_num": "Port 5",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p6",
          "port_num": "Port 6",
          "label": "",
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
        "id": "p1",
          "port_num": "Port 1",
        "label": "",
        "type": Connection.FiberOptic,
      },{
        "id": "p2",
          "port_num": "Port 2",
        "label": "",
        "type": Connection.FiberOptic,
      },{
        "id": "p3",
          "port_num": "Port 3",
        "label": "",
        "type": Connection.FiberOptic,
      }
    ]
  },

  // NOC
{
    "id": "sw1",
    "label": "NOC 1",
      "ip": "10.200.0.1",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
      "label": "ADSL1",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "ADSL2",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
      "type": Connection.Ethernet,
      },{
      "id": "p4",
          "port_num": "Port 4",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "CS Dean's iMAC LAN",
        "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "Test Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
          "port_num": "Port 12",
      "label": "Test Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p25",
          "port_num": "Port 25",
      "label": "Trunk TRK1 to NOC4",
      "type": Connection.Ethernet,
      },
      {
      "id": "p26",
          "port_num": "Port 26",
      "label": "Trunk TRK1 to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p27",
          "port_num": "Port 27",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p28",
          "port_num": "Port 28",
      "label": "",
      "type": Connection.Ethernet,
      },
    ]
},

{
    "id": "sw2",
    "label": "NOC 2",
    "ip": "10.200.0.2",
    "type": Device.DistributionSwitch,
    "ports": [
      {
      "id": "p1",
          "port_num": "Port 1",
      "label": "Trunk link TRK1 to NOC4",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "Trunk link TRK1 to NOC4",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "ValidIP Port for VMs",
      "type": Connection.Ethernet,
      },{
      "id": "p4",
          "port_num": "Port 4",
        "label": "VLAN1000 Port for VMs",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "Trunk port link to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "HRDO Biometrics MDF3-1F-17D",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "Ruckus Eduroam AP",
        "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "Port 8",
        "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "Port 9",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "Uplink to pfSense1 WAN",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "Test Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
          "port_num": "Port 12",
      "label": "Test Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "Uplink to DIC 30D NAS Switch",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "Uplinkt to OPA 24D 8-port GbE switch",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "Uplink Port to MDF03-DES-1026G",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "UPB VM Server 04 - FEC Desktop",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "Trunk Port9",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "Trunk Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "DNS-DHCP-Server-Trunk",
        "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "PF 2",
        "type": Connection.Ethernet,
      },
    ]
},
{
    "id": "sw3",
    "label": "NOC 3",
      "ip": "10.200.0.3",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
      "label": "DIC Cacti Server Trunk",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "JKSA Management Port",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
        "label": "MDF3-1F-30V",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "Uplink Trunk to NOC 9",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "MDF02-1F-27D",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "JKSA-Victus-03",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
          "port_num": "Port 12",
      "label": "Aruba-1920S-250-Uplink",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "PA-820 Management Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "PA-820 Management Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "MDF03-2F-39D",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "Uplink VLAN192 to Linksys SRW224P",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "Aruba-7205-PRI-Uplink-1",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "Aruba-7205-SEC-Uplink-2",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "Trunk link TRK1 to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "Trunk link TRK1 to NOC4",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "IDR-Ramp FO Trunk",
        "type": Connection.FiberOptic,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "Aruba-7205-PRI-T1A",
        "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "BJL FO Trunk",
        "type": Connection.FiberOptic,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "Aruba-7205-SEC-T2A4",
        "type": Connection.Ethernet,
      },
    ]
},
{
    "id": "sw4",
    "label": "NOC 4",
      "ip": "10.200.0.4",
    "type": Device.CoreSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
      "label": "Uplink to PA820-PRI",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "Uplink to PA820-PRI",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "Uplink to PA820-SEC",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
        "label": "Uplink to PA820-SEC",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "Port 5",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "Uplink to VLE2 Server",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "SNO Trunk Port to DGS-1100-26MPP",
        "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "Management",
        "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "Uplink to MDF2 Cisco SG100-16",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "Port 10",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "Trunk Port to KA-301",
        "type": Connection.Ethernet,
      },
      {
      "id": "12",
          "port_num": "Port 12",
      "label": "Trunk port to MDF2-SF-300-24P",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "Trunk link TRK3 to NOC2",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "Trunk port to SNO-SF-300-Domz-Desk",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "Trunk link TRK3 to NOC2",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "Uplink to MDF2 SRW224P",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "Trunk link TRK2 to NOC1",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "Trunk link TRK1 to NOC3",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "Trunk link TRK2 to NOC1",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "Trunk link TRK1 to NOC3",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "LIB FO Trunk Port",
        "type": Connection.FiberOptic,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "CAC FO Trunk Port",
        "type": Connection.FiberOptic,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "KA-Math FO Trunk Port",
        "type": Connection.FiberOptic,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "CSS FO Trunk Port",
        "type": Connection.FiberOptic,
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
        "id": "p1",
          "port_num": "Port 1",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
      "type": Connection.Ethernet,
      },{
      "id": "p4",
          "port_num": "Port 4",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
        "type": Connection.Ethernet,
      },
    ]
  },  

  {
    "id": "sw6",
    "label": "NOC 6",
      "ip": "10.200.0.6",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
      "label": "",
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
          "port_num": "Port 1",
      "label": "Management Port V1000",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "Management Port V1000",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "Public IP VLAN30 - IB104 Port 17V",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
      "label": "Public IP VLAN30",
      "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p12",
          "port_num": "Port 12",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "Uplink from CS-Research-AVR AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "Uplink from CS-Research-Lab AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "Uplink from OVCA AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "Port 18",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "Uplink from HRDO AX72",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "UPB-Boardroom MDF03-2F-029D",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p25",
          "port_num": "Port 25",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p26",
          "port_num": "Port 26",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p27",
          "port_num": "Port 27",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p28",
          "port_num": "Port 28",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p29",
          "port_num": "Port 29",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p30",
          "port_num": "Port 30",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p31",
          "port_num": "Port 31",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p32",
          "port_num": "Port 32",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p33",
          "port_num": "Port 33",
      "label": "Uplink from HRDO E2500",
      "type": Connection.Ethernet,
      },
      {
      "id": "p34",
          "port_num": "Port 34",
      "label": "Uplink from OVCAA AX72 MDF03-2F-14D",
      "type": Connection.Ethernet,
      },
      {
      "id": "p35",
          "port_num": "Port 35",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p36",
          "port_num": "Port 36",
      "label": "Trunk port to VM-SRV-03-ProxMox NIC#2",
      "type": Connection.Ethernet,
      },
      {
      "id": "p37",
          "port_num": "Port 37",
      "label": "PubilcIP port of CS-BIO-SVR NIC #1",
      "type": Connection.Ethernet,
      },
      {
      "id": "p38",
          "port_num": "Port 38",
      "label": "Port 38",
      "type": Connection.Ethernet,
      },
      {
      "id": "p39",
          "port_num": "Port 39",
      "label": "VLAN Trunk Port for UPB-VM-SRV-02",
      "type": Connection.Ethernet,
      },
      {
      "id": "p40",
          "port_num": "Port 40",
      "label": "Management Port for UPB-VM-SRV-03",
      "type": Connection.Ethernet,
      },
      {
      "id": "p41",
          "port_num": "Port 41",
      "label": "UPB-VM-SRV-00 Public Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p42",
          "port_num": "Port 42",
      "label": "UPB-VM-SRV-00 Management Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p43",
          "port_num": "Port 43",
      "label": "UPB-VM-SRV-02 Public Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p44",
          "port_num": "Port 44",
      "label": "UPB-VM-SRV-04 Public Interface",
      "type": Connection.Ethernet,
      },
      {
      "id": "p45",
          "port_num": "Port 45",
      "label": "Trunk",
      "type": Connection.Ethernet,
      },
      {
      "id": "p46",
          "port_num": "Port 46",
      "label": "Trunk",
      "type": Connection.Ethernet,
      },
      {
      "id": "p47",
          "port_num": "Port 47",
      "label": "Main Uplink to NOC3 GE5",
      "type": Connection.Ethernet,
      },
      {
      "id": "p48",
          "port_num": "Port 48",
      "label": "Trunk Port to MFPalaruan PC NIC",
      "type": Connection.Ethernet,
      },
      {
      "id": "p49",
          "port_num": "Port 49",
      "label": "SFP FO uplink from SAC 2/F HPE",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p50",
          "port_num": "Port 50",
      "label": "SFP FO Uplink from IDR New Rack",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p51",
          "port_num": "Port 51",
      "label": "SFP FO Uplink from GuardHouse",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p52",
          "port_num": "Port 52",
      "label": "SFP FO Uplink from SRC New Rack",
      "type": Connection.FiberOptic,
      },
    ]
  },

{
    "id": "noc-cs",
    "label": "NOC CS",
      "ip": "192.168.1.248",
    "type": Device.DistributionSwitch,
    "ports": [
      {
      "id": "p1",
          "port_num": "Port 1",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p12",
          "port_num": "Port 12",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "Broken Port",
        "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "g1",
          "port_num": "GE 1",
      "label": "",
        "type": Connection.Ethernet,
      },
      {
      "id": "g2",
          "port_num": "GE 2",
      "label": "Uplink to NOC 4",
        "type": Connection.Ethernet,
      },
    ]
},
  // CAC
{
    "id": "cac",
    "label": "CAC",
    "ip": "10.200.0.108",
    "type": Device.DistributionSwitch,
    "ports": [
        {
            "id": "p1",
          "port_num": "Port 1",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p2",
          "port_num": "Port 2",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p3",
          "port_num": "Port 3",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p4",
          "port_num": "Port 4",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p5",
          "port_num": "Port 5",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p6",
          "port_num": "Port 6",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p7",
          "port_num": "Port 7",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p8",
          "port_num": "Port 8",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p9",
          "port_num": "Port 9",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p10",
          "port_num": "Port 10",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p11",
          "port_num": "Port 11",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p12",
          "port_num": "Port 12",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p13",
          "port_num": "Port 13",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p14",
          "port_num": "Port 14",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p15",
          "port_num": "Port 15",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p16",
          "port_num": "Port 16",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p17",
          "port_num": "Port 17",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p18",
          "port_num": "Port 18",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p19",
          "port_num": "Port 19",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p20",
          "port_num": "Port 20",
      "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p21",
          "port_num": "Port 21",
            "label": "Uplink to JournLab",
            "type": Connection.Ethernet,
        },
        {
            "id": "p22",
          "port_num": "Port 22",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p23",
          "port_num": "Port 23",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p24",
          "port_num": "Port 24",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p25",
          "port_num": "Port 25",
            "label": "Uplink to CAC-Aruba-1930-8G",
            "type": Connection.Ethernet,
        },
        {
            "id": "p26",
          "port_num": "Port 26",
            "label": "Uplink to Teatro-Aruba-8G",
            "type": Connection.Ethernet,
        },
        {
            "id": "p27",
          "port_num": "Port 27",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p28",
          "port_num": "Port 28",
            "label": "FO-Trunk-to-IB-NOC",
            "type": Connection.FiberOptic,
        }
    ],
},
  {
      "id": "cac-t",
      "label": "Teatro",
      "ip": "10.200.100.243",
      "type": Device.AccessSwitch,
      "ports": [
          {
              "id": "p1",
          "port_num": "Port 1",
              "label": "",
              "type": Connection.Ethernet,
          },
          {
              "id": "p2",
          "port_num": "Port 2",
              "label": "",
              "type": Connection.Ethernet,
          },
      ],
  },

  {
      "id": "cac-jl",
      "label": "JournLab",
      "ip": "10.200.108.2",
      "type": Device.AccessSwitch,
      "ports": [
          {
              "id": "p1",
          "port_num": "Port 1",
              "label": "",
              "type": Connection.Ethernet,
          },
          {
              "id": "p2",
          "port_num": "Port 2",
              "label": "",
              "type": Connection.Ethernet,
          },
      ],
  },

  // CSS
  {
    "id": "css",
    "label": "CSS",
    "ip": "10.200.0.107",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
          "port_num": "Port 2",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p3",
          "port_num": "Port 3",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p4",
          "port_num": "Port 4",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
          "port_num": "Port 5",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
          "port_num": "Port 6",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
          "port_num": "Port 7",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p9",
          "port_num": "Port 9",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p10",
          "port_num": "Port 10",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p11",
          "port_num": "Port 11",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p12",
          "port_num": "Port 12",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p13",
          "port_num": "Port 13",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p14",
          "port_num": "Port 14",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p15",
          "port_num": "Port 15",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p16",
          "port_num": "Port 16",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p17",
          "port_num": "Port 17",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p18",
          "port_num": "Port 18",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p19",
          "port_num": "Port 19",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p20",
          "port_num": "Port 20",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p21",
          "port_num": "Port 21",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p22",
          "port_num": "Port 22",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p23",
          "port_num": "Port 23",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p24",
          "port_num": "Port 24",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p25",
          "port_num": "Port 25",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p26",
          "port_num": "Port 26",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p27",
          "port_num": "Port 27",
              "label": "",
        "type": Connection.FiberOptic,
      },
    ],
  },

// CSS-1920-24-port
  {
    "id": "css3",
    "label": "CSS3",
    "ip": "10.200.107.2",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "g1", //g# for gigabit ethernet
          "port_num": "GE 1",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g2",
          "port_num": "GE 2",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g3",
          "port_num": "GE 3",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g4",
          "port_num": "GE 4",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g5",
          "port_num": "GE 5",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g6",
          "port_num": "GE 6",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g7",
          "port_num": "GE 7",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g8",
          "port_num": "GE 8",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g9",
          "port_num": "GE 9",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g10",
          "port_num": "GE 10",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g11",
          "port_num": "GE 11",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g12",
          "port_num": "GE 12",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g13",
          "port_num": "GE 13",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g14",
          "port_num": "GE 14",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g15",
          "port_num": "GE 15",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g16",
          "port_num": "GE 16",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g17",
          "port_num": "GE 17",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g18",
          "port_num": "GE 18",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g19",
          "port_num": "GE 19",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g20",
          "port_num": "GE 20",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g21",
          "port_num": "GE 21",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g22",
          "port_num": "GE 22",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g23",
          "port_num": "GE 23",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g24",
          "port_num": "GE 24",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g25",
          "port_num": "GE 25",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g26",
          "port_num": "GE 26",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g27",
          "port_num": "GE 27",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "g28",
          "port_num": "GE 28",
              "label": "",
        "type": Connection.Ethernet,
      },
    ],
  },

// CSS-Deans-8-port
  {
    "id": "css2",
    "label": "CSS2",
    "ip": "10.200.107.1",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
          "port_num": "Port 2",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p3",
          "port_num": "Port 3",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p4",
          "port_num": "Port 4",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
          "port_num": "Port 5",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
          "port_num": "Port 6",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
          "port_num": "Port 7",
              "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
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
  "type": Device.DistributionSwitch,
  "ports": [
    {
      "id": "p1",
          "port_num": "Port 1",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p12",
          "port_num": "Port 12",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
              "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p25",
          "port_num": "Port 25",
              "label": "",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p26",
          "port_num": "Port 26",
              "label": "",
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
          "port_num": "Port 1",
        "label": "Aruba AP port",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
          "port_num": "Port 2",
        "label": "Aruba AP port",
        "type": Connection.Ethernet,
      },
      {
        "id": "p3",
          "port_num": "Port 3",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p4",
          "port_num": "Port 4",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
          "port_num": "Port 5",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
          "port_num": "Port 6",
        "label": "ATA port",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
          "port_num": "Port 7",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p9",
          "port_num": "Port 9",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p10",
          "port_num": "Port 10",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p11",
          "port_num": "Port 11",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p12",
          "port_num": "Port 12",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p13",
          "port_num": "Port 13",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p14",
          "port_num": "Port 14",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p15",
          "port_num": "Port 15",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p16",
          "port_num": "Port 16",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p17",
          "port_num": "Port 17",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p18",
          "port_num": "Port 18",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p19",
          "port_num": "Port 19",
        "label": "HKP_AP AX55 Router Uplink",
        "type": Connection.Ethernet,
      },
      {
        "id": "p20",
          "port_num": "Port 20",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p21",
          "port_num": "Port 21",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p22",
          "port_num": "Port 22",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p23",
          "port_num": "Port 23",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p24",
          "port_num": "Port 24",
        "label": "Trunk Link to Himnasyo-NOC",
        "type": Connection.Ethernet,
      },
      {
        "id": "p25",
          "port_num": "Port 25",
        "label": "FO Uplink Port to KA-4F-CAB",
        "type": Connection.FiberOptic,
      },
      {
        "id": "p26",
          "port_num": "Port 26",
        "label": "FO Port",
        "type": Connection.FiberOptic,
      },
    ]
  },
  {
  "id": "hkp-ap",
      "label": "HKP_AP",
      "ip": "",
      "type": Device.WirelessRouter,
      "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
        "label": "",
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
          "port_num": "GE 1",
    "label": "Aruba_AP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g2",
          "port_num": "GE 2",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g3",
          "port_num": "GE 3",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g4",
          "port_num": "GE 4",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g5",
          "port_num": "GE 5",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
   "id": "g6",
          "port_num": "GE 6",
    "label": "EAP-320-1F",
    "type": Connection.Ethernet,
  },
  {
    "id": "g7",
          "port_num": "GE 7",
    "label": "EAP-320-2F",
    "type": Connection.Ethernet,
  },
  {
    "id": "g8",
          "port_num": "GE 8",
    "label": "EAP-320-3F",
    "type": Connection.Ethernet,
  },
  {
    "id": "g9",
          "port_num": "GE 9",
    "label": "TPL-AX72-WAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g10",
          "port_num": "GE 10",
    "label": "VLAN107",
    "type": Connection.Ethernet,
  },
  {
    "id": "g11",
          "port_num": "GE 11",
    "label": "VLAN107",
    "type": Connection.Ethernet,
  },
  {
    "id": "g12",
          "port_num": "GE 12",
    "label": "VLAN107",
    "type": Connection.Ethernet,
  },
  {
    "id": "g13",
          "port_num": "GE 13",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g14",
          "port_num": "GE 14",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g15",
          "port_num": "GE 15",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g16",
          "port_num": "GE 16",
    "label": "TPL-AX72-LAN",
    "type": Connection.Ethernet,
  },
  {
    "id": "g17",
          "port_num": "GE 17",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g18",
          "port_num": "GE 18",
    "label": "VLAN1",
    "type": Connection.Ethernet,
  },
  {
    "id": "g19",
          "port_num": "GE 19",
    "label": "VLAN30",
    "type": Connection.Ethernet,
  },
  {
    "id": "g20",
          "port_num": "GE 20",
    "label": "VLAN30",
    "type": Connection.Ethernet,
  },
  {
    "id": "g21",
          "port_num": "GE 21",
    "label": "MGMT",
    "type": Connection.Ethernet,
  },
  {
    "id": "g22",
          "port_num": "GE 22",
    "label": "MGMT",
    "type": Connection.Ethernet,
  },
  {
    "id": "g23",
          "port_num": "GE 23",
    "label": "Trunk-port",
    "type": Connection.Ethernet,
  },
  {
    "id": "g24",
          "port_num": "GE 24",
    "label": "Trunk-to-HKP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g25",
          "port_num": "GE 25",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g26",
          "port_num": "GE 26",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g27",
          "port_num": "GE 27",
    "label": "SFP",
    "type": Connection.Ethernet,
  },
  {
    "id": "g28",
          "port_num": "GE 28",
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
    "type": Device.CoreSwitch,
    "ports": [
      {
      "id": "p1",
          "port_num": "Port 1",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "UPB-ROTC Uplink",
      "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "Port 11",
      "type": Connection.Ethernet,
      },
      {
      "id": "p12",
          "port_num": "Port 12",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "Mikrotik LIB to BI",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "HP-2610-LIB-TECH-Uplink",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "HPE-1920S-Uplink",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "FO-Uplink-to-IB",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "UPB-Balay-Intl-FO-Uplink",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "UP-Breha-FO-Uplink",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "Test SFP",
      "type": Connection.Ethernet,
      },
      {
      "id": "wlan",
          "port_num": "WLAN",
      "label": "Wireless Breha",
      "type": Connection.Wireless,
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
          "port_num": "Port 1",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
        "id": "p7",
          "port_num": "Port 7",
      "label": "J9802A-LIB-2F-TechRoom	Bridge	Bridge",
      "type": Connection.Ethernet,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
      "label": "A0-1D-48-5C-50-D0",
      "type": Connection.Ethernet,
      }
    ]
  },

    {
        "id": "l-tech24",
        "label": "LIB-TECH24",
        "ip": "10.200.106.6",
        "type": Device.DistributionSwitch,
        "ports": [
            {
            "id": "p1",
          "port_num": "Port 1",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p2",
          "port_num": "Port 2",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p3",
          "port_num": "Port 3",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p4",
          "port_num": "Port 4",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p5",
          "port_num": "Port 5",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p6",
          "port_num": "Port 6",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p7",
          "port_num": "Port 7",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p8",
          "port_num": "Port 8",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p9",
          "port_num": "Port 9",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p10",
          "port_num": "Port 10",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p11",
          "port_num": "Port 11",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p12",
          "port_num": "Port 12",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p13",
          "port_num": "Port 13",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p14",
          "port_num": "Port 14",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p15",
          "port_num": "Port 15",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p16",
          "port_num": "Port 16",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p17",
          "port_num": "Port 17",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p18",
          "port_num": "Port 18",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p19",
          "port_num": "Port 19",
            "label": "Voice VLAN 60 Ports",
            "type": Connection.Ethernet,
            },
            {
            "id": "p20",
          "port_num": "Port 20",
            "label": "Voice VLAN 60 Ports",
            "type": Connection.Ethernet,
            },
            {
            "id": "p21",
          "port_num": "Port 21",
            "label": "Voice VLAN 60 Ports",
            "type": Connection.Ethernet,
            },
            {
            "id": "p22",
          "port_num": "Port 22",
            "label": "Voice VLAN 60 Ports",
            "type": Connection.Ethernet,
            },
            {
            "id": "p23",
          "port_num": "Port 23",
            "label": "PublicIP Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p24",
          "port_num": "Port 24",
            "label": "Management Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p25",
          "port_num": "Port 25",
            "label": "LIB VLAN 106 Port",
            "type": Connection.Ethernet,
            },
            {
            "id": "p26",
          "port_num": "Port 26",
            "label": "Uplink Trunk to HPE-1810-8G",
            "type": Connection.Ethernet,
            },
            {
            "id": "p27",
          "port_num": "Port 27",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p28",
          "port_num": "Port 28",
            "label": "",
            "type": Connection.Ethernet,
            },
        ]
    },

    {
        "id": "l-filipiniana",
        "label": "LIB-FILIPINIANA",
        "ip": "10.200.106.2",
        "type": Device.DistributionSwitch,
        "ports": [
            {
            "id": "p1",
          "port_num": "Port 1",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p2",
          "port_num": "Port 2",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p3",
          "port_num": "Port 3",
            "label": "J9802A-LIB-2F-TechRoom Bridge",
            "type": Connection.Ethernet,
            },
            {
            "id": "p4",
          "port_num": "Port 4",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p5",
          "port_num": "Port 5",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p6",
          "port_num": "Port 6",
            "label": "UPB-LibraryArchive-AP46 Bridge",
            "type": Connection.Ethernet,
            },
            {
            "id": "p7",
          "port_num": "Port 7",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p8",
          "port_num": "Port 8",
            "label": "J9802A Bridge	Bridge",
            "type": Connection.Ethernet,
            },
        ]
    },

    {
        "id": "l-archives",
        "label": "LIB-ARCHIVES",
        "ip": "10.200.106.4",
        "type": Device.DistributionSwitch,
        "ports": [
            {
            "id": "p1",
          "port_num": "Port 1",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p2",
          "port_num": "Port 2",
            "label": "DESKTOP-5406D6L 9C-6B-00-00-69-59",
            "type": Connection.Ethernet,
            },
            {
            "id": "p3",
          "port_num": "Port 3",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p4",
          "port_num": "Port 4",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p5",
          "port_num": "Port 5",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p6",
          "port_num": "Port 6",
            "label": "",
            "type": Connection.Ethernet,
            },
            {
            "id": "p7",
          "port_num": "Port 7",
            "label": "J9802A Bridge	Bridge",
            "type": Connection.Ethernet,
            },
            {
            "id": "p8",
          "port_num": "Port 8",
            "label": "",
            "type": Connection.Ethernet,
            },
        ]
    },

  {
    "id": "rotc",
    "label": "ROTC",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
            "label": "",
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
        "id": "p1",
          "port_num": "Port 1",
            "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },

  // WalkUP
  {
    "id": "wup",
    "label": "WalkUP",
      "ip": "10.200.100.242",
    "type": Device.DistributionSwitch,
    "ports": [
      {
      "id": "p1",
          "port_num": "Port 1",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p12",
          "port_num": "Port 12",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
            "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "CAT6 Uplink to 6F",
      "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "23",
          "port_num": "Port 23",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p25",
          "port_num": "Port 25",
      "label": "FO Trunk to LIB-NOC",
      "type": Connection.Ethernet,
      },
      {
      "id": "p26",
          "port_num": "Port 26",
      "label": "",
      "type": Connection.Ethernet,
      },
    ]
  },

 {
    "id": "im",
    "label": "IM Ramp",
    "ip": "10.200.0.104",
    "type": Device.DistributionSwitch,
    "ports": [
      {
      "id": "p1",
          "port_num": "Port 1",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p2",
          "port_num": "Port 2",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p3",
          "port_num": "Port 3",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p4",
          "port_num": "Port 4",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p5",
          "port_num": "Port 5",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p6",
          "port_num": "Port 6",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p7",
          "port_num": "Port 7",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p8",
          "port_num": "Port 8",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p9",
          "port_num": "Port 9",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p10",
          "port_num": "Port 10",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p11",
          "port_num": "Port 11",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p12",
          "port_num": "Port 12",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p13",
          "port_num": "Port 13",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p14",
          "port_num": "Port 14",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p15",
          "port_num": "Port 15",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p16",
          "port_num": "Port 16",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p17",
          "port_num": "Port 17",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p18",
          "port_num": "Port 18",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p19",
          "port_num": "Port 19",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p20",
          "port_num": "Port 20",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p21",
          "port_num": "Port 21",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p22",
          "port_num": "Port 22",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p23",
          "port_num": "Port 23",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p24",
          "port_num": "Port 24",
      "label": "",
      "type": Connection.Ethernet,
      },
      {
      "id": "p25",
          "port_num": "Port 25",
      "label": "Uplink port to ArubaIO-8G-IM-Ramp",
      "type": Connection.Ethernet,
      },
      {
      "id": "p26",
          "port_num": "Port 26",
      "label": "Uplink port to IDR-MDF-SW135-P43",
      "type": Connection.Ethernet,
      },
      {
      "id": "p27",
          "port_num": "Port 27",
      "label": "FO-Trunk-to-SAC",
      "type": Connection.FiberOptic,
      },
      {
      "id": "p28",
          "port_num": "Port 28",
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
        "id": "p1",
          "port_num": "Port 1",
      "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "clinic",
    "label": "Clinic",
      "ip": "10.200.104.3",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p2",
          "port_num": "Port 2",
      "label": "CMO",
      "type": Connection.Ethernet,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
      "label": "IM Ramp",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "cmo",
    "label": "CMO",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
      "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },

  {
    "id": "gco",
    "label": "GCO",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p3",
          "port_num": "Port 3",
      "label": "clinic",
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
          "port_num": "Port 1",
        "label": "",
        "type": Connection.Ethernet,
        },
        {
            "id": "p2",
          "port_num": "Port 2",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p3",
          "port_num": "Port 3",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p4",
          "port_num": "Port 4",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p5",
          "port_num": "Port 5",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p6",
          "port_num": "Port 6",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p7",
          "port_num": "Port 7",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p8",
          "port_num": "Port 8",
            "label": "Uplink to CS-Research AX55",
            "type": Connection.Ethernet,
        },
        {
            "id": "p9",
          "port_num": "Port 9",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p10",
          "port_num": "Port 10",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p11",
          "port_num": "Port 11",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p12",
          "port_num": "Port 12",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p13",
          "port_num": "Port 13",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p14",
          "port_num": "Port 14",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p15",
          "port_num": "Port 15",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p16",
          "port_num": "Port 16",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p17",
          "port_num": "Port 17",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p18",
          "port_num": "Port 18",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p19",
          "port_num": "Port 19",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p20",
          "port_num": "Port 20",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p21",
          "port_num": "Port 21",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p22",
          "port_num": "Port 22",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p23",
          "port_num": "Port 23",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "p24",
          "port_num": "Port 24",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "g1",
          "port_num": "GE 1",
            "label": "BIO-FR-AX72-MDF02-2F-02D",
            "type": Connection.Ethernet,
        },
        {
            "id": "g2",
          "port_num": "GE 2",
            "label": "Trunk Uplink to NOC4",
            "type": Connection.Ethernet,
        },
        {
            "id": "g3",
          "port_num": "GE 3",
            "label": "",
            "type": Connection.Ethernet,
        },
        {
            "id": "g4",
          "port_num": "GE 4",
            "label": "Trunk to Glasswares ArubaIO",
            "type": Connection.FiberOptic,
        }
    ]
  },
  
  //BalayIntl-24-port
  {
    "id": "balayintl-24-port",
    "label": "Balay International",
    "ip": "10.200.100.60",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
            "label": "",
        "type": Connection.FiberOptic,
      },
      {
        "id": "p2",
          "port_num": "Port 2",
            "label": "",
        "type": Connection.None,
      },
      {
        "id": "p3",
          "port_num": "Port 3",
            "label": "",
        "type": Connection.None,
      },
      {
        "id": "p4",
          "port_num": "Port 4",
            "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
          "port_num": "Port 5",
            "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
          "port_num": "Port 6",
            "label": "",
        "type": Connection.None,
      },
      {
        "id": "p7",
          "port_num": "Port 7",
            "label": "",
        "type": Connection.None,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
            "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p9",
          "port_num": "Port 9",
            "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p10",
          "port_num": "Port 10",
            "label": "",
        "type": Connection.None,
      },
      {
        "id": "p11",
          "port_num": "Port 11",
            "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p12",
          "port_num": "Port 12",
        "label": "(FC)",
        "type": Connection.Ethernet,
      },
      {
        "id": "p13",
          "port_num": "Port 13",
        "label": "(100M, FC)",
        "type": Connection.Ethernet,
      },
      {
        "id": "p14",
          "port_num": "Port 14",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p15",
          "port_num": "Port 15",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p16",
          "port_num": "Port 16",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p17",
          "port_num": "Port 17",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p18",
          "port_num": "Port 18",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p19",
          "port_num": "Port 19",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p20",
          "port_num": "Port 20",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p21",
          "port_num": "Port 21",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p22",
          "port_num": "Port 22",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p23",
          "port_num": "Port 23",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p24",
          "port_num": "Port 24",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p25",
          "port_num": "Port 25",
        "label": "",
        "type": Connection.None,
      },
      {
        "id": "p26",
          "port_num": "Port 26",
        "label": "(1000M/Full Duplex)",
        "type": Connection.Ethernet,
      },
    ],
  },

  //Breha
  {
    "id": "breha-8-port",
    "label": "Breha",
    "ip": "10.200.100.244",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p2",
          "port_num": "Port 2",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p3",
          "port_num": "Port 3",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p4",
          "port_num": "Port 4",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p5",
          "port_num": "Port 5",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p6",
          "port_num": "Port 6",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p7",
          "port_num": "Port 7",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p8",
          "port_num": "Port 8",
        "label": "",
        "type": Connection.Ethernet,
      },
      {
        "id": "p9",
          "port_num": "Port 9",
        "label": "FO Uplink to WalkUP", 
        "type": Connection.FiberOptic,
      },
      {
        "id": "p10",
          "port_num": "Port 10",
        "label": "FO Uplink to LIB-NOC",
          "type": Connection.FiberOptic,
        },
      {
        "id": "wlan",
          "port_num": "WLAN",
        "label": "Wireless",
          "type": Connection.FiberOptic,
        },
      ],
    },

    //Lib Trunk 8
    {
      "id": "lib-trunk-8-port",
      "label": "Library Trunk",
      "ip": "10.200.106.1",
      "type": Device.CoreSwitch,
      "ports": [
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "ARUBA-2920-MAINLIB-NOC",
          "type": Connection.Ethernet,
        },
        {
          "id": "p3",
          "port_num": "Port 3",
          "label": "Lib Filipiniana",
          "type": Connection.Ethernet,
        },
        {
          "id": "p4",
          "port_num": "Port 4",
          "label": "Lib Tech 24 P",
          "type": Connection.Ethernet,
        },
        {
          "id": "p5",
          "port_num": "Port 5",
          "label": "Lib Circulation",
          "type": Connection.None,
        },
        {
          "id": "p7",
          "port_num": "Port 7",
          "label": "Lib Tech 8 Port",
          "type": Connection.Ethernet,
        }
      ],
    },

    //Lib Circulation
    {
      "id": "lib-circulation",
      "label": "LIB-Circulation",
      "ip": "10.200.106.5",
      "type": Device.AccessSwitch,
      "ports": [
        { "id": "p5", 
          "port_num": "Port 5",
          "label": "", 
          "type": Connection.Ethernet 
        },
        { 
          "id": "p8", 
          "port_num": "Port 8",
          "label": "", 
          "type": Connection.Ethernet 
        }
      ]
    },

    //CS-Research AX55
    {
      "id": "cs-res-ax55",
      "label": "CS-Research AX55",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //BIO-FR-AX72-MDFO2-2F-02D
    {
      "id": "bio-fr",
      "label": "BIO-FR-AX72-MDFO2-2F-02D",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //Glasswares ArubaIO
    {
      "id": "glasswares",
      "label": "Glasswares ArubaIO",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //VLE 2
    {
      "id": "vle2",
      "label": "VLE 2 Server",
      "ip": "202.92.156.241",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //Management
    {
      "id": "management",
      "label": "Management",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //MDF2 Cisco SG100-16
    {
      "id": "mdf2-sg100-16",
      "label": "MDF2 Cisco SG100-16",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //KA-301
    {
      "id": "ka301",
      "label": "KA-301",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "", 
          "type": Connection.Ethernet,
        },
      ]
    },

    //MDF2-SF-300-24P
    {
      "id": "mdf2-sf-300-24p",
      "label": "MDF2-SF-300-24P",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "g4",
          "port_num": "GE 4",
          "label": "Uplink to NOC 4",
          "type": Connection.Ethernet,
        },
      ]
    },

    //SNO-SF-300-Domz-Desk
    {
      "id": "domz-desk",
      "label": "SNO-SF-300-Domz-Desk",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "g4",
          "port_num": "GE 4",
          "label": "Uplink to NOC 4",
          "type": Connection.Ethernet,
        },
      ]
    },

    //HRDO Biometrics
    {
      "id": "hrdo-bio",
      "label": "HRDO Biometrics MDF3-1f-17D",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //DIC 30D NAS Switch
    {
      "id": "dic30d",
      "label": "DIC 30D NAS Switch",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },

    //OPA
    {
      "id": "opa-8p",
      "label": "OPA 24D 8-port GbE Switch",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //MDF03-DES-1026G
    {
      "id": "mdf03-des",
      "label": "MDF03-DES-1026G",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //04 - FEC Desktop
    {
      "id": "04-fec-desk",
      "label": "UPB VM Server 04 - FEC Desktop",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //DIC Cactii
    {
      "id": "dic-cactii",
      "label": "DIC Cactii Server Trunk",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    // JKSA Management Port
    {
      "id": "jksa-man",
      "label": "JKSA Management Port",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //MDF3-1F-30V
    {
      "id": "mdf3-1f-30v",
      "label": "MDF3-1F-30V",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //IDR
    {
      "id": "idr",
      "label": "IDR New Rack",
      "ip": "10.200.0.135",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p49",
          "port_num": "Port 49",
          "label": "Uplink to NOC 9",
          "type": Connection.FiberOptic,
        },
      ]
    },
  //MDF02-1F-27D
    {
      "id": "mdf02-1f-27d",
      "label": "MDF02-1F-27D",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //JKSA-Victus-03
    {
      "id": "jksa-victus-03",
      "label": "JKSA-Victus-03",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //Aruba-1920S-250
    {
      "id": "aruba-1920s-250",
      "label": "Aruba-1920S-250",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //PA-820 Management Port
    {
      "id": "pa-820-man-port",
      "label": "PA-820 Management Port",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //MDF03-2F-39D
    {
      "id": "mdf03-2f-39D",
      "label": "MDF03-2F-39D",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //Linksys SRW224P
    {
      "id": "linksys-srw224p",
      "label": "Linksys SRW224P",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },

    //Aruba
    {
      "id": "aruba-pri-1",
      "label": "Aruba-7205-Pri-Uplink-1",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "aruba-sec-2",
      "label": "Aruba-7205-Sec-Uplink-2",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "aruba-pri-t1a",
      "label": "Aruba-7205-Pri-T1A",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "aruba-sec-t2a4",
      "label": "Aruba-7205-sec-T2A4",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //BJL
    {
      "id": "bjl",
      "label": "BJL",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.FiberOptic,
        },
      ]
    },
    //CS Dean's iMac LAN
    {
      "id": "cs-dean-lan",
      "label": "CS Dean's iMac LAN",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //IB104
    {
      "id": "ib104",
      "label": "IB 104",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //CS-Research
    {
      "id": "cs-res-avr",
      "label": "CS-Research AVR",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "cs-res-lab",
      "label": "CS-Research Lab",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //OVCA
    {
      "id": "ovca",
      "label": "OVCA AX72",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //HRDO
    {
      "id": "hrdo-ax72",
      "label": "HRDO AX72",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "hrdo-e2500",
      "label": "HRDO E2500",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //UPB-Boardroom
    {
      "id": "upb-board",
      "label": "UPB-Boardroom MDF03-2F-029D",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //OVCAA
    {
      "id": "ovcaa",
      "label": "OVCAA AX72 MDF03-2F-14D",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //VM-SRV-03
    {
      "id": "vm-srv-03",
      "label": "VM-SRV-03-ProxMox NIC#2",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //CS-BIO-SVR
    {
      "id": "cs-bio-svr",
      "label": "CS-BIO-SVR NIC#1",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //UPB-VM-SRV
    {
      "id": "upb-vm-srv-00",
      "label": "UPB-VM-SRV-00",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "upb-vm-srv-02",
      "label": "UPB-VM-SRV-02",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
        {
          "id": "p2",
          "port_num": "Port 2",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "upb-vm-srv-03",
      "label": "UPB-VM-SRV-03",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    {
      "id": "upb-vm-srv-04",
      "label": "UPB-VM-SRV-04",
      "ip": "",
      "type": Device.Server,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //MFPalaruan
    {
      "id": "mfpalaruan",
      "label": "MFPalaruan PC NIC",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p1",
          "port_num": "Port 1",
          "label": "",
          "type": Connection.Ethernet,
        },
      ]
    },
    //SAC
    {
      "id": "sac",
      "label": "SAC Alumni",
      "ip": "",
      "type": Device.AccessSwitch,
      "ports": [
        {
          "id": "p26",
          "port_num": "Port 26",
          "label": "",
          "type": Connection.FiberOptic,
        },
      ]
    },
  //SRC
  {
    "id": "src",
    "label": "SRC New Rack",
      "ip": "",
    "type": Device.DistributionSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.FiberOptic,
      }
    ]
  },
  //Guardhouse
  {
    "id": "guardhouse",
    "label": "GuardHouse",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.FiberOptic,
      }
    ]
  },
  //CAC Aruba
  {
    "id": "cac-aruba",
    "label": "CAC-Aruba-1930-8G",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  //EAP-320
  {
    "id": "eap-320-1f",
    "label": "EAP-320-1F",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "eap-320-2f",
    "label": "EAP-320-2F",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  {
    "id": "eap-320-3f",
    "label": "EAP-320-3F",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  //TPL-AX72-WAN
  {
    "id": "tpl-ax72-wan",
    "label": "TPL-AX72-WAN",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  //TPL-AX72-WAN
  {
    "id": "aruba-ap",
    "label": "Aruba_AP",
      "ip": "",
    "type": Device.WirelessRouter,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },
  //BI
  {
    "id": "bi",
    "label": "BI",
      "ip": "",
    "type": Device.AccessSwitch,
    "ports": [
      {
        "id": "p1",
          "port_num": "Port 1",
          "label": "",
      "type": Connection.Ethernet,
      }
    ]
  },

]};

export default node_data;