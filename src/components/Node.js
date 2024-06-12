// components/Node.js
import React from "react";
import "./Node.css";

const Node = ({ node, selected, onSelectNode }) => {
  return (
    <div
      className={`node ${selected ? "selected" : ""}`}
      style={{ top: node.position.y, left: node.position.x }}
      onClick={onSelectNode}
    >
      <p>{node.text}</p>
    </div>
  );
};

export default Node;
