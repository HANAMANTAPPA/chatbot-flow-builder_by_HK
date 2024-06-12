// App.js
import React, { useState } from "react";
import "./App.css";
import FlowBuilder from "./components/FlowBuilder";
import SaveButton from "./components/SaveButton";

// Initial flow data with some example nodes and edges
const initialFlowData = {
  nodes: [
    {
      id: "node1",
      text: "Hello!",
      position: { x: 100, y: 100 },
      targetHandles: [],
    },
    {
      id: "node2",
      text: "How are you?",
      position: { x: 300, y: 100 },
      targetHandles: [],
    },
    {
      id: "node3",
      text: "Goodbye!",
      position: { x: 200, y: 300 },
      targetHandles: [],
    },
  ],
  edges: [
    {
      id: "edge1",
      source: { id: "node1", x: 150, y: 130 },
      target: { id: "node2", x: 350, y: 130 },
    },
    {
      id: "edge2",
      source: { id: "node2", x: 300, y: 130 },
      target: { id: "node3", x: 250, y: 280 },
    },
  ],
};

const App = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="app-container">
      <FlowBuilder
        flowData={initialFlowData}
        selectedNode={selectedNode}
        onSelectNode={setSelectedNode}
      />
      <SaveButton flowData={initialFlowData} />
    </div>
  );
};

export default App;
