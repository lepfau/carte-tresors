import React, { useState, useEffect } from "react";
import Aventurier from "./Aventurier";
function Case(props) {
  const [style, setStyle] = useState({
    border: "1px solid black",
    width: "120px",
    height: "120px",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const [content, setContent] = useState(`${props.x}, ${props.y}`);

  useEffect(() => {
    props.montagne.forEach((mont) => {
      if (mont[0] === props.x && mont[1] === props.y) {
        setStyle({
          border: "1px solid black",
          width: "120px",
          height: "120px",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        });
      }
    });

    if (props.positionX === props.x && props.positionY === props.y) {
      setContent(
        <div>
          <div>
            {props.x}, {props.y}
          </div>
          <Aventurier
            key={props.aventurier.nom}
            details={props.aventurier}
            montagne={props.montagne}
            tresor={props.tresor}
            orientation={props.orientation}
          />
        </div>
      );
    } else
      setContent(
        <div>
          {props.x}, {props.y}
        </div>
      );

    // props.tresor.forEach((tres) => {
    //   if (tres[0] === props.x && tres[1] === props.y) {
    //     setContent(`${props.x}, ${props.y} (T(${tres[2]}))`);
    //   }
    // });
  }, [
    props.orientation,
    props.aventurier,
    props.montagne,
    props.x,
    props.y,
    props.tresor,
    props.positionX,
    props.positionY,
  ]);

  return (
    <div>
      <div style={style}>{content}</div>
    </div>
  );
}

export default Case;