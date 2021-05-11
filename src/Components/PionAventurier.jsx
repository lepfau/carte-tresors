import React from "react";

function PionAventurier(props) {
  return (
    <div
      style={{
        borderRadius: "100%",
        backgroundColor: "red",
        height: "80px",
        width: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.details.nom} ({props.orientation})
    </div>
  );
}

export default PionAventurier;
