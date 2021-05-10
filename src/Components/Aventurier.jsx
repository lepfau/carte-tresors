import React from "react";

function Aventurier(props) {
  return (
    <div
      style={{
        borderRadius: "100%",
        backgroundColor: "red",
        height: "50px",
        width: "50px",
      }}
    >
      {props.details.nom} ({props.orientation})
    </div>
  );
}

export default Aventurier;
