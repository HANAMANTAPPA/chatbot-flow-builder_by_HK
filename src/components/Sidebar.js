import React from "react";
import { useDrag } from "react-dnd";

const Sidebar = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "node",
    item: { type: "default" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <aside ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div>Drag this text to the canvas</div>
    </aside>
  );
};

export default Sidebar;
