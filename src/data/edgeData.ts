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
  {
    "node": ["sw3", "idr-mdf-2f"],
    "port": ["p5", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "mdf02-1f-27d"],
    "port": ["p9", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "jksa-victus-03"],
    "port": ["p11", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "aruba-1920s-250"],
    "port": ["p12", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "pa-820-man-port"],
    "port": ["p13", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "pa-820-man-port"],
    "port": ["p14", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "mdf03-2f-39D"],
    "port": ["p15", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "linksys-srw224p"],
    "port": ["p16", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "aruba-pri-1"],
    "port": ["p17", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "aruba-sec-2"],
    "port": ["p18", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "idr-ramp"],
    "port": ["p21", "p1"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw3", "aruba-pri-t1a"],
    "port": ["p22", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw3", "bjl"],
    "port": ["p23", "p1"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw3", "aruba-sec-t2a4"],
    "port": ["p24", "p1"],
    "type": Connection.Ethernet
  }, 
    //NOC 1
  {
    "node": ["sw1", "adsl1"],
    "port": ["p11", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw1", "adsl1"],
    "port": ["p11", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw1", "cs-dean-lan"],
    "port": ["p7", "p1"],
    "type": Connection.Ethernet
  }, 
    //NOC 9
  {
    "node": ["sw9", "ib104"],
    "port": ["p3", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "cs-res-avr"],
    "port": ["p13", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "cs-res-lab"],
    "port": ["p14", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "ovca"],
    "port": ["p17", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "hrdo-ax72"],
    "port": ["p19", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-board"],
    "port": ["p20", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "hrdo-e2500"],
    "port": ["p33", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "hrdo-e2500"],
    "port": ["p33", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "ovcaa"],
    "port": ["p34", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "vm-srv-03"],
    "port": ["p36", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "cs-bio-svr"],
    "port": ["p37", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-vm-srv-02"],
    "port": ["p39", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-vm-srv-03"],
    "port": ["p40", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-vm-srv-00"],
    "port": ["p41", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-vm-srv-00"],
    "port": ["p42", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-vm-srv-02"],
    "port": ["p43", "p2"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "upb-vm-srv-04"],
    "port": ["p44", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "sw3"],
    "port": ["p47", "p3"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "mfpalaruan"],
    "port": ["p48", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["sw9", "sac-2f-hpe"],
    "port": ["p49", "p1"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw9", "idr"],
    "port": ["p50", "p1"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw9", "guardhouse"],
    "port": ["p51", "p1"],
    "type": Connection.FiberOptic
  }, 
  {
    "node": ["sw9", "src"],
    "port": ["p52", "p1"],
    "type": Connection.FiberOptic
  }, 

    //CAC
  {
    "node": ["cac", "cac-jl"],
    "port": ["p21", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["cac", "cac-aruba"],
    "port": ["p25", "p1"],
    "type": Connection.Ethernet
  }, 
  {
    "node": ["cac", "cac-t"],
    "port": ["p26", "p1"],
    "type": Connection.Ethernet
  }, 
    //CSS
  {
    "node": ["css", "cac-t"],
    "port": ["p8", "p1"],
    "type": Connection.Ethernet
  }, 

  ]
}

export default edge_data;
