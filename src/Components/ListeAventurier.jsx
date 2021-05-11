import React from "react";

function ListeAventurier(props) {
  //LISTER LES AVENTURIERS EN TRIANT LES INFOS
  const listeAventuriers = props.aventuriers.map((aventurier, index) => {
    const valeursAventurier = aventurier.split("-");
    const lettreAventurier = valeursAventurier[0];
    const nomAventurier = valeursAventurier[1];
    const positionAventurier = `${valeursAventurier[2]}, ${valeursAventurier[3]} `;
    const parcoursAventurier = valeursAventurier[5];

    return (
      <div className="fiche-aventurier" key={index}>
        <h3>Aventurier {index + 1}</h3>
        <p>Nom: {nomAventurier}</p>
        <p>Lettre : {lettreAventurier}</p>
        <p>Position départ: {positionAventurier}</p>
        <p>Parcours: {parcoursAventurier}</p>
        <p>Trésors trouvés: 0</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Liste des aventuriers</h1>
      {listeAventuriers}
    </div>
  );
}

export default ListeAventurier;
