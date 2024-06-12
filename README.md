


## hosted link 
https://chatbot-flow-builder-by-hk.vercel.app/

# Chatbot Flow Builder

This project is a Chatbot flow builder implemented in React. It allows users to create conversation flows by dragging and dropping text nodes and connecting them with edges.

## Features

1. **Flow Builder**
   - Drag and drop text nodes to create a flow.
   - Connect nodes with edges to define conversation paths.

2. **Text Node**
   - Supports text messages as nodes.
   - Multiple text nodes can be added to the flow.

3. **Nodes Panel**
   - Initially supports only text nodes.
   - Designed to be extensible for future node types.

4. **Edge**
   - Connects two nodes together to represent conversation paths.

5. **Source Handle**
   - Starting point of an edge from a node.

6. **Target Handle**
   - Ending point of an edge on a node.

7. **Settings Panel**
   - Appears when a node is selected, allowing editing of node text.

8. **Save Button**
   - Validates the flow before saving.
   - Shows an error if:
     - There are more than one node.
     - More than one node has empty target handles.

## Project Structure


|-- src/
| |-- App.js
| |-- App.css
| |-- components/
| |-- FlowBuilder.js
| |-- FlowBuilder.css
| |-- Node.js
| |-- Node.css
| |-- Edge.js
| |-- Edge.css
| |-- SettingsPanel.js
| |-- SettingsPanel.css
| |-- SaveButton.js
| |-- SaveButton.css
|-- README.md


## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**
git clone [https://github.com/your/repository.git](https://github.com/HANAMANTAPPA/chatbot-flow-builder_by_HK)
cd hatbot-flow-builder_by_HK

2. **Install dependencies:**


3. **Run the application:**

4. **Open in browser:**
Open http://localhost:3000 to view the app.


## Usage

- **Adding Nodes:**
- Drag nodes from the panel onto the canvas.
- Nodes are represented as text messages.

- **Connecting Nodes:**
- Click and drag from a source handle on one node to a target handle on another to create an edge.

- **Editing Node Text:**
- Click on a node to select it.
- The settings panel will appear, allowing you to edit the text of the selected node.

- **Saving the Flow:**
- Click the "Save Flow" button.
- The flow will be validated:
 - Ensure there is more than one node.
 - Ensure no node has empty target handles.
- If validation passes, the flow is saved.
