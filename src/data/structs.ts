export enum Connection {
  Ethernet,
  FiberOptic,
  Wireless,
  Dual,
  None,
}

export enum Device {
  Firewall,
  MainRouter,
  WirelessRouter,
  Router,
  Switch,
  CoreSwitch,
  AccessSwitch,
  DistributionSwitch,
  Hub,
  ISP,
  None,
}

export interface Node {
  id: string,
  label: string,
  ip: string,
  type: Device,
  ports: Port[],
}

export interface Port {
  id: string,
  label: string,
  type: Connection,
}

export interface NodeData {
  data: Node[]
}


export interface Edge {
  node: [string, string],
  port: [string, string],
  type: Connection,
}

export interface EdgeData {
  data: Edge[]
}
