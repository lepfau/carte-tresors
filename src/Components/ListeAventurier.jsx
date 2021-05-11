import React from "react";

function ListeAventurier(props) {
  const valeursAventurier = props.aventuriers[0].split("-");
  const lettreAventurier = valeursAventurier[0];
  const nomAventurier = valeursAventurier[1];
  const positionAventurier = `${valeursAventurier[2]}, ${valeursAventurier[3]} `;
  const parcoursAventurier = valeursAventurier[5];

  return (
    <div>
      <h1>Liste des aventuriers</h1>

      <div className="fiche-aventurier">
        <h3>Aventurier 1</h3>
        <p>Nom: {nomAventurier}</p>
        <p>Lettre : {lettreAventurier}</p>
        <p>Position départ: {positionAventurier}</p>
        <p>Parcours: {parcoursAventurier}</p>
        <p>Trésors trouvés: 0</p>
      </div>
    </div>
  );
}

export default ListeAventurier;
