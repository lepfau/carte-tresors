import React, { useState, useEffect, useCallback } from "react";
import Colonne from "./Colonne";

function Carte(props) {
  //PARAMETRES CARTE
  const dimensionsCarte = props.dimensions.split("-");
  const largeur = dimensionsCarte[1];
  const hauteur = dimensionsCarte[2];

  //FONCTION A DEFINIR POUR RECUPERER INFO A PARTIR DE L'ARRAY DE STRING FOURNI AU DEPART
  //["M - 1 - 1", "M - 2 - 2"]
  const montagnes = [
    [2, 0],
    [0, 3],
  ];

  //FONCTION A DEFINIR
  const tresor = props.tresors;

  //PARAMETRES AVENTURIER EN OBJET POUR PLUS DE LISIBILITE

  const aventurier = {
    joueur: "A",
    nom: "Indiana",
    position: [1, 0],
    orientation: "S",
    commandes: "AGD",
  };

  const commande = aventurier.commandes;

  //STATE CHANGEANT DE L'AVENTURIER
  const [orientation, setOrientation] = useState("S");
  const [positionX, setPositionX] = useState(aventurier.position[0]);
  const [positionY, setPositionY] = useState(aventurier.position[1]);
  const [input, setInput] = useState("");

  //CONTROLER EXECUTION DES COMMANDES
  // let listecommande = commande.split("");
  // listecommande.forEach((commande) => {
  //   setInterval(() => {
  //     setInput(commande);
  //   }, 1000);
  //   clearInterval();
  // });

  //FONCTIONS MOUVEMENT AVENTURIER (AVANT, GAUCHE, DROITE)
  function moveForward() {
    switch (orientation) {
      case "O":
        if (
          (positionX - 1 !== montagnes[0][0] ||
            positionY !== montagnes[0][1]) &&
          (positionX - 1 !== montagnes[1][0] ||
            positionY !== montagnes[1][1]) &&
          positionX - 1 >= 0
        )
          setPositionX(positionX - 1);

        break;
      case "E":
        if (
          (positionX + 1 !== montagnes[0][0] ||
            positionY !== montagnes[0][1]) &&
          (positionX + 1 !== montagnes[1][0] ||
            positionY !== montagnes[1][1]) &&
          positionX + 1 < largeur
        )
          setPositionX(positionX + 1);
        break;
      case "N":
        if (
          (positionX !== montagnes[0][0] ||
            positionY - 1 !== montagnes[0][1]) &&
          (positionX !== montagnes[1][0] ||
            positionY - 1 !== montagnes[1][1]) &&
          positionY - 1 >= 0
        )
          setPositionY(positionY - 1);
        break;
      case "S":
        if (
          (positionX !== montagnes[0][0] ||
            positionY + 1 !== montagnes[0][1]) &&
          (positionX !== montagnes[1][0] ||
            positionY + 1 !== montagnes[1][1]) &&
          positionY + 1 < hauteur
        )
          setPositionY(positionY + 1);
        break;
      default:
        console.log("default");
    }
  }

  //CHANGEMENT DIRECTION  GAUCHE TEST MANUEL OK
  function turnLeft() {
    switch (orientation) {
      case "N":
        setOrientation("O");

        break;
      case "O":
        setOrientation("S");
        break;
      case "S":
        setOrientation("E");
        break;
      case "E":
        setOrientation("N");
        break;
      default:
        console.log("direction non valide");
        break;
    }
  }

  //CHANGEMENT DIRECTION DROITE TEST MANUEL OK
  function turnRight() {
    switch (orientation) {
      case "N":
        setOrientation("E");
        break;
      case "O":
        setOrientation("N");
        break;
      case "S":
        setOrientation("O");
        break;
      case "E":
        setOrientation("S");
        break;
      default:
        console.log("direction non valide");
        break;
    }
  }

  //PROBLEME COMMANDE AVANCER ENCHAINEMENT DES LETTRES

  function giveCommand(input) {
    for (let i = 0; i < input.length - 1; i++) {
      let order = input[i];
      switch (order) {
        case "A":
          moveForward();
          break;
        case "G":
          turnLeft();
          break;
        case "D":
          turnRight();
          break;
        default:
          console.log("invalid input");
      }
    }
  }

  //LANCER LES COMMANDES AU CHARGEMENT DU COMPONENT ?

  //LOOP POUR GENERER LES COLONNES EN FONCTION DE LA LARGEUR
  let colonnes = [];
  for (let i = 0; i < largeur; i++) {
    colonnes.push(
      <Colonne
        key={i}
        hauteur={hauteur}
        x={i}
        montagne={montagnes}
        tresor={tresor}
        aventurier={aventurier}
        orientation={orientation}
        positionX={positionX}
        positionY={positionY}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {/* GENERER MANUELLEMENT LES COMMANDES POUR TEST */}
        <button onClick={() => giveCommand(commande)}>Start</button>
        <button onClick={() => turnLeft()}>Gauche</button>
        <button onClick={() => turnRight()}>Droite</button>
        <button onClick={() => moveForward()}>Avancer</button>
      </div>
      <div style={{ display: "flex" }}>{colonnes}</div>
    </div>
  );
}

export default Carte;
