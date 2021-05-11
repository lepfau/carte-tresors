import React from "react";

function PionAventurier(props) {
  return (
    <div className="pion-aventurier">
      {props.details.nom} ({props.orientation})
    </div>
  );
}

export default PionAventurier;
