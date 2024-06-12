// components/SettingsPanel.js
import React from "react";
import "./SettingsPanel.css";

const SettingsPanel = ({ selectedNode }) => {
  return (
    <div className="settings-panel">
      <input
        type="text"
        value={selectedNode.text}
        onChange={(e) => selectedNode.setText(e.target.value)}
      />
    </div>
  );
};

export default SettingsPanel;
