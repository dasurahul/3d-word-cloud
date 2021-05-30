import "./App.css";
import React, { useEffect } from "react";
import ForceGraph3D from "3d-force-graph";
import SpriteText from "three-spritetext";
import * as THREE from "three";
function App() {
  const myGraph = ForceGraph3D();
  const data = {
    nodes: [{ name: "rahul" }, { name: "virat" }],
    links: [],
  };

  useEffect(() => {
    myGraph(document.getElementById("3d-graph"))
      .graphData(data)
      .nodeThreeObject((node) => {
        const sprite = new SpriteText(node.name);
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = "white";
        sprite.textHeight = 8;
        return sprite;
      });
  });
  return (
    <div>
      <div id="3d-graph"></div>
    </div>
  );
}

export default App;
