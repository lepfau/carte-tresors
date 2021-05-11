import React from "react";

function PionAventurier(props) {
  return (
    <div className="pion-aventurier">
      {props.details.joueur} ({props.orientation})
    </div>
  );
}

export default PionAventurier;
