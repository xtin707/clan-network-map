import {Connection, EdgeData} from './structs'

const edge_data: EdgeData = {
  data: [
    //ISP
  {
    "node": ["ict", "r1"],
    "port": ["p1", "p1"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["govnet", "r1"],
    "port": ["p1", "p2"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["govnet", "sw5"],
    "port": ["p2", "p2"],
    "type": Connection.FiberOptic
  }, 
  //Main Router
  {
    "node": ["r1", "sw5"],
    "port": ["p3", "p2"],
    "type": Connection.Ethernet
  }, 
  //NOC 5
  {
    "node": ["sw5", "fw-pri"],
    "port": ["p3", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw5", "fw-pri"],
    "port": ["p4", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw5", "fw-sec"],
    "port": ["p5", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw5", "fw-sec"],
    "port": ["p6", "p2"],
    "type": Connection.Ethernet
  }, 
  // FW-PRI
  {
    "node": ["fw-pri", "fw-sec"],
    "port": ["p3", "p3"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["fw-pri", "fw-sec"],
    "port": ["p4", "p4"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["fw-pri", "sw4"],
    "port": ["p4", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["fw-pri", "sw4"],
    "port": ["p5", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["fw-sec", "sw4"],
    "port": ["p5", "p3"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["fw-sec", "sw4"],
    "port": ["p6", "p4"],
    "type": Connection.Ethernet
  }, 
  //NOC 4
  {
    "node": ["sw4", "vle2"],
    "port": ["p6", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw6"],
    "port": ["p7", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "management"],
    "port": ["p8", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "mdf2-sg100-16"],
    "port": ["p8", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "ka301"],
    "port": ["p11", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "mdf2-sf-300-24p"],
    "port": ["p12", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw2"],
    "port": ["p12", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw2"],
    "port": ["p15", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "domz-desk"],
    "port": ["p14", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "mdf2-srw224p"],
    "port": ["p16", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw1"],
    "port": ["p17", "p25"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw3"],
    "port": ["p18", "p19"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw1"],
    "port": ["p19", "p26"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "sw3"],
    "port": ["p20", "p20"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw4", "lib"],
    "port": ["p21", "p21"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw4", "cac"],
    "port": ["p22", "p28"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw4", "ka"],
    "port": ["p23", "p25"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw4", "css"],
    "port": ["p24", "p1"],
    "type": Connection.FiberOptic
  }, 

  //NOC 2
  {
    "node": ["sw2", "hrdo-bio"],
    "port": ["p6", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw2", "fw1"],
    "port": ["p10", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw2", "dic30d"],
    "port": ["p13", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw2", "opa-8p"],
    "port": ["p14", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw2", "mdf03-des"],
    "port": ["p15", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw2", "04-fec-desk"],
    "port": ["p18", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw2", "fw2"],
    "port": ["p23", "p2"],
    "type": Connection.Ethernet
  }, 

  //PF1
  {
    "node": ["fw1", "fw2"],
    "port": ["p2", "p1"],
    "type": Connection.Ethernet
  }, 
  //NOC 3
  {
    "node": ["sw3", "dic-cactii"],
    "port": ["p1", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "jksa-man"],
    "port": ["p2", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "mdf3-1f-30v"],
    "port": ["p4", "p1"],
    "type": Connection.Ethernet
  }, 



  ]
}

export default edge_data;
