'use client'
// components/ClusterTree.js
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Connection, Device, Entity } from "@/data/structs";

const ClusterTree = ({ main_node, filtered_node, filtered_edge }) => {
  const svgRef = useRef();
  const dimensions = { width: 1000, height: 600, margin: { top: 50, right: 100, bottom: 50, left: 100 } };

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous rendering

    const { width, height, margin } = dimensions;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // 1. Create the hierarchical data structure
    const data = [];

    const root_node = {
      id: main_node.id,
      ip: main_node.ip,
      name: main_node.label,
      children: [],
      node: Entity.Device,
      type: main_node.type,
      port: "",
      connection: Connection.None,
    };

    for (const port of main_node.ports) {
      const node = {
        id: port.id,
        name: port.label,
        children: [],
        node: Entity.Port,
        type: port.type,
        port: port.port_num,
        connection: Connection.None,
      };

      for (const edge of filtered_edge) {
        const node_index = edge.node.indexOf(main_node.id);
        const partner_node = filtered_node.filter(d => d.id === edge.node[1 - node_index]);
        const partner_port = partner_node[0].ports.filter(d => d.id === edge.port[1 - node_index]);

        if (edge.port[node_index] === port.id) {
          node.children.push({
            id: partner_node[0].id,
            ip: partner_node[0].ip,
            name: `${partner_node[0].label}`,
            children:[],
            node: Entity.Device,
            type: partner_node[0].type,
            port: partner_port[0]?.port_num ?? 'undefined',
            label: partner_port[0]?.label ?? 'undefined',
          });
        };
      }

      root_node.children.push(node);
    };

    data.push(root_node);

    const root = d3.hierarchy(root_node);

    // 2. Create the cluster layout
    const treeLayout = d3.tree()
      .size([innerHeight, innerWidth - 160])
    .nodeSize([50, 300])
    .separation((a, b) => {
    return a.parent === b.parent ? 2 : 3;
  });
    // 3. Compute the layout
    treeLayout(root);

    // 4. Draw the links (paths)

    g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1.5);

    // 5. Draw the nodes
    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
      .attr("transform", d => `translate(${d.y},${d.x})`);

    // Add circles for nodes

    const linkHandler = node.append("a")
    .attr("xlink:href", d => `./${d.data.id}`); 

    linkHandler.append("image")
      .attr("xlink:href", d => {
        if (d.data.node === Entity.Device && d.data.type === Device.ISP) return "/cloud.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.MainRouter) return "/router.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.WirelessRouter) return "/wireless-router.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.Firewall) return "/firewall.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.CoreSwitch) return "/programmable-switch.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.DistributionSwitch) return "/workgroup-switch-blue.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.AccessSwitch) return "/workgroup-switch.svg";
        if (d.data.node === Entity.Device && d.data.type === Device.Server) return "/server.svg";
        if (d.data.node === Entity.Port && d.data.type === Connection.Ethernet) return "/ethernet.svg";
        if (d.data.node === Entity.Port && d.data.type === Connection.FiberOptic) return "/fiber.svg";
        if (d.data.node === Entity.Port && d.data.type === Connection.Wireless) return "/wireless.svg";
      return "/no.svg"
      })
      .attr("x", -25)
      .attr("y", -25)
      .attr("width", 50) 
      .attr("height", 50); 

    // Add text labels for nodes
    linkHandler.append("text")
      .attr("x", 0)
      .attr("y", 45)
      .attr("text-anchor", "middle")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .each(function(d) {
        const textElement = d3.select(this);
        textElement.selectAll("*").remove(); // Clear existing tspans on re-render

        if (d.parent && d.data.node === Entity.Device) {
          textElement.append("tspan")
            .attr("x", 0)
            .attr("dy", "-0.7em") // Move up relative to the parent <text>'s 'y' (45)
            .text(`${d.data.port} | ${d.data.label}`);

          textElement.append("tspan")
            .attr("x", 0)
            .attr("dy", "1.4em") // Move down from the previous tspan's position
            .text(d.data.name);
        } else {
          textElement.append("tspan")
            .attr("x", 0)
            .attr("dy", "0.31em") // Standard baseline alignment relative to parent 'y'
            .text(`${d.data.port} | ${d.data.name}`);
        }
      });

    const zoomBehavior = d3.zoom()
      .scaleExtent([0.1, 8]) 
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoomBehavior);

    // Initially set the view to full view of the graph 
    const bbox = g.node().getBBox();
    
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

  }, [dimensions]); // Redraw when data or dimensions change

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} style={{ border: "1px solid #eee" }}></svg>
    </div>
  );
};

export default ClusterTree;
