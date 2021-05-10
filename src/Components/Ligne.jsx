import React from "react";
import Case from "./Case";

function Ligne(props) {
  let height = [];

  for (let i = 0; i < props.hauteur; i++) {
    height.push(
      <Case
        key={[props.x, i]}
        x={props.x}
        y={i}
        montagne={props.montagne}
        tresor={props.tresor}
        aventurier={props.aventurier}
        orientation={props.orientation}
        positionX={props.positionX}
        positionY={props.positionY}
      />
    );
  }

  return <div>{height}</div>;
}

export default Ligne;
