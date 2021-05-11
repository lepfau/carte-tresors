import React from "react";

function ListeAventurier(props) {
  return (
    <div>
      <h1>Liste des aventuriers</h1>
      <div>{props.aventurier1}</div>
    </div>
  );
}

export default ListeAventurier;
