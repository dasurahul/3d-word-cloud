import "./App.css";
import React, { useState, useEffect } from "react";
import ForceGraph3D from "3d-force-graph";
import SpriteText from "three-spritetext";
function App() {
  const myGraph = ForceGraph3D();
  const [data, setData] = useState({
    nodes: [
      {
        name: "rahul",
        id: "0",
        url: "https://www.facebook.com/rahuldravid",
      },
      {
        name: "virat",
        id: "1",
        url: "https://www.facebook.com/virat.kohli",
      },
      {
        name: "sachin",
        id: "2",
        url: "https://www.facebook.com/SachinTendulkar/",
      },
    ],
    links: [
      { source: "0", target: "2" },
      { source: "1", target: "2" },
      { source: "0", target: "1" },
    ],
  });

  useEffect(() => {
    myGraph(document.getElementById("3d-graph"))
      .graphData(data)
      .showNavInfo(false)
      .nodeAutoColorBy("id")
      .onNodeClick((node) => {
        window.location.href = node.url;
      })
      .nodeThreeObject((node) => {
        const sprite = new SpriteText(node.name);
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = node.color;
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
