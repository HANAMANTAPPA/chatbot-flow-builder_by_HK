// components/SaveButton.js
import React from "react";
import "./SaveButton.css";

const SaveButton = ({ flowData }) => {
  const handleClick = () => {
    // Validate the flow
    if (
      flowData.nodes.length > 1 &&
      flowData.nodes.some((node) => node.targetHandles.length === 0)
    ) {
      alert("Error: All nodes must have at least one target handle!");
    } else {
      // Save the flow
      console.log("Flow saved successfully!");
    }
  };

  return (
    <button className="save-button" onClick={handleClick}>
      Save Flow
    </button>
  );
};

export default SaveButton;
