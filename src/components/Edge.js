// components/Edge.js
import React from "react";
import "./Edge.css";

const Edge = ({ edge }) => {
  return <div className="edge" style={calculateEdgeStyle(edge)}></div>;
};

const calculateEdgeStyle = (edge) => {
  const { source, target } = edge;
  const deltaX = target.x - source.x;
  const deltaY = target.y - source.y;
  const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
  return {
    width: length,
    height: 2,
    top: source.y,
    left: source.x,
    transform: `rotate(${angle}deg)`,
  };
};

export default Edge;
