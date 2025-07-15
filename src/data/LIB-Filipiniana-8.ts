import {NodeData, Device, Connection} from './structs'

const node_data: NodeData = {
  data: 
[
    {
        "id": "l-filipiniana",
        "label": "LIB-FILIPINIANA",
        "ip": "10.200.106.2",
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
            "label": "J9802A-LIB-2F-TechRoom Bridge Bridge",
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
            "label": "UPB-LibraryArchive-AP46 Bridge",
            "type": Connection.Ethernet,
            },
            {
            "id": "p7",
            "label": "Port 7",
            "type": Connection.Ethernet,
            },
            {
            "id": "p8",
            "label": "J9802A Bridge	Bridge",
            "type": Connection.Ethernet,
            },
        ]
    }
]}