// components/FlowBuilder.js
import React from "react";
import "./FlowBuilder.css";
import Node from "./Node";
import Edge from "./Edge";

const FlowBuilder = ({ flowData, selectedNode, onSelectNode }) => {
  return (
    <div className="flow-builder">
      {flowData.nodes.map((node) => (
        <Node
          key={node.id}
          node={node}
          selected={selectedNode === node}
          onSelectNode={() => onSelectNode(node)}
        />
      ))}
      {flowData.edges.map((edge) => (
        <Edge key={edge.id} edge={edge} />
      ))}
    </div>
  );
};

export default FlowBuilder;
