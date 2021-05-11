import React, { useState, useEffect } from "react";
import PionAventurier from "./PionAventurier";
function Case(props) {
  const [style, setStyle] = useState("case-plaine");
  const [content, setContent] = useState(`${props.x}, ${props.y}`);
  //CONTENT CORRESPONDANT A UNE CASE PLAINE / MONTAGNE / TRESOR / AVEC OU SANS AVENTURIER

  //CONDITIONS AFFICHAGE DES CASES AU CHARGEMENT DU COMPONENT
  useEffect(() => {
    props.montagne.forEach((mont) => {
      if (mont[0] === props.x && mont[1] === props.y) {
        setStyle("case-montagne");
      }
    });

    props.tresor.forEach((tres) => {
      if (tres[0] === props.x && tres[1] === props.y) {
        setContent(`${props.x}, ${props.y} (T(${tres[2]}))`);
      }
    });

    if (props.positionX === props.x && props.positionY === props.y) {
      setContent(
        <div>
          <div>
            {props.x}, {props.y}
          </div>
          <PionAventurier
            key={props.aventurier.nom}
            details={props.aventurier}
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

    //PROBLEME CONDITIONS ENTRE TRESORS / MONTAGNE ET AVENTURIER EN SUSPEND POUR LE MOMENT
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
      <div className={style}>{content}</div>
    </div>
  );
}

export default Case;
