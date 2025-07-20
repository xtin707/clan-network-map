"use client";
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { IBM_Plex_Mono } from 'next/font/google';
import { Device, Connection } from '@/data/structs';


const NetworkDiagram = ({ nodeData, edgeData, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const nodes = nodeData.data.map(d => ({ id: d.id, label: d.label, type: d.type, ip: d.ip }));
    const links = edgeData.data.map(d => ({ source:d.node[0], target: d.node[1], type: d.type }));

    // You can adjust the placement and size of nodes and edges here
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(10).strength(0.7))
      .force("charge", d3.forceManyBody().strength(-3500))
      .force("collide", d3.forceCollide(500).radius(90))
      .force("center", d3.forceCenter(width / 2, height / 2));

    simulation.stop();
    for (let i = 0; i < 120; ++i) simulation.tick();

    const chartGroup = svg.append("g"); 

    chartGroup.append("defs");

    const link = chartGroup.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.8)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    const nodeGroup = chartGroup.append("g")              
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    const linkHandler = nodeGroup.append("a")             
    .attr("xlink:href", d => `./${d.id}`); 

    linkHandler.append("image")
      .attr("xlink:href", d => {
        if (d.type === Device.ISP) return "/cloud.svg";
        if (d.type === Device.MainRouter) return "/router.svg";
        if (d.type === Device.WirelessRouter) return "/wireless-router.svg";
        if (d.type === Device.Firewall) return "/firewall.svg";
        if (d.type === Device.CoreSwitch) return "/programmable-switch.svg";
        if (d.type === Device.DistributionSwitch) return "/workgroup-switch-blue.svg";
        if (d.type === Device.AccessSwitch) return "/workgroup-switch.svg";
        if (d.type === Device.Server) return "/server.svg";
      return "/no.svg"
      })
      .attr("x", -25)
      .attr("y", -25)
      .attr("width", 60) 
      .attr("height", 60); 

    linkHandler.append("text")
      .attr("x", 0)
      .attr("y", 45)
      .attr("text-anchor", "middle")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .text(d => d.label);
    
    const tooltip = d3.select("body").append("div")     //differentiate connection type when hovering on node/s
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("opacity", 0)
      .style("background-color", "#2D2D2D")
      .style("color", "white")
      .style("padding", "5px")
      .style("border-radius", "3px")
      .style("pointer-events", "none");

    nodeGroup.on("mouseover", (event, d) => {
      d3.select(event.currentTarget).select("image")
        .attr("stroke", "purple") 
        .attr("stroke-width", 2.5);

      link.filter(l => l.source.id === d.id || l.target.id === d.id)
        .attr("stroke", d => {
          if (d.type === Connection.Ethernet) return '#F58315';       //orange
          if (d.type === Connection.FiberOptic) return '#1594F5';     //blue
          if (d.type === Connection.Wireless) return '#1CE637';       //green
        })
        .attr("stroke-dasharray", d => {
          if (d.type === Connection.Wireless) return "3,5"; //dashed lines
          return null;
        })
        .attr("stroke-width", 3)
        .attr("stroke-opacity", 1); 

      tooltip.transition()                          //for IP address appearance                      
        .duration(200)
        .style("opacity", .9);
        
      tooltip.html(`IP: ${d.ip} <br /> ID: ${d.id}`)
        .style("left", (event.pageX + 10) + "px")   //for IP address appearance
        .style("top", (event.pageY - 15) + "px");
    });

    nodeGroup.on("mouseout", (event) => {
      d3.select(event.currentTarget).select("image")
        .attr("stroke", "black")
        .attr("stroke-width", 1);

      link.attr("stroke", "#999")
          .attr("stroke-width", 1.5)
          .attr("stroke-opacity", 0.6);

      nodeGroup.attr("opacity", 1);
      link.attr("opacity", 1);

      tooltip.transition()                           //for IP address appearance
        .duration(500)
        .style("opacity", 0);
    });


    const zoomBehavior = d3.zoom()
      .scaleExtent([0.1, 8]) 
      .on("zoom", (event) => {
        chartGroup.attr("transform", event.transform);
      });

    svg.call(zoomBehavior);

    // Initially set the view to full view of the graph 
    const bbox = chartGroup.node().getBBox();
    
    const svgWidth = parseInt(svg.attr("width"));
    const svgHeight = parseInt(svg.attr("height"));
    const padding = 40;
    const scale = Math.min(
      (svgWidth - 2 * padding) / bbox.width,
      (svgHeight - 2 * padding) / bbox.height
    );

    const translateX = (svgWidth - bbox.width * scale) / 2 - bbox.x * scale;
    const translateY = (svgHeight - bbox.height * scale) / 2 - bbox.y * scale;

    svg.call(
      zoomBehavior.transform,
      d3.zoomIdentity.translate(translateX, translateY).scale(scale)
    );
  }, [nodeData, edgeData, width, height]);

  return (
    <div className="w-full h-full overflow-hidden border border-gray-200 p-4 shadow-md flex-col items-center justify-center bg-[#FFFFFF] flex justify-center items-center">
    <svg ref={svgRef}></svg>
      </div>
  );
};

export default NetworkDiagram;
