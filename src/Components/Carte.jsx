import React, { useState, useEffect } from "react";
import Ligne from "./Ligne";

function Carte(props) {
  //PARAMETRES CARTE
  const dimensionsCarte = props.dimensions.split("-");
  const largeur = dimensionsCarte[1];
  const hauteur = dimensionsCarte[2];

  //FONCTION A DEFINIR POUR RECUPERER INFO A PARTIR DE L'ARRAY DE STRING FOURNI AU DEPART
  //["M - 1 - 1", "M - 2 - 2"]
  const donnesMontagnes = props.montagnes;

  const montagnes = [
    [1, 1],
    [2, 2],
  ];

  //FONCTION A DEFINIR
  const tresor = props.tresors;

  //PARAMETRES AVENTURIER EN OBJET POUR PLUS DE LISIBILITE
  const aventurier = {
    joueur: "A",
    nom: "Indiana",
    position: [1, 0],
    orientation: "S",
    commandes: "AADADA",
  };

  const commande = aventurier.commandes;

  //STATE CHANGEANT DE L'AVENTURIER
  const [orientation, setOrientation] = useState("S");
  const [positionX, setPositionX] = useState(aventurier.position[0]);
  const [positionY, setPositionY] = useState(aventurier.position[1]);

  //FONCTIONS MOUVEMENT AVENTURIER (AVANT, GAUCHE, DROITE)
  function moveForward() {
    if (orientation === "O") setPositionX(positionX - 1);
    if (orientation === "N") setPositionY(positionY - 1);
    if (orientation === "S") setPositionY(positionY + 1);
    if (orientation === "E") setPositionX(positionX + 1);
  }

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

  function giveCommand(input) {
    if (input !== "A" && input !== "G" && input !== "D")
      console.log("Commande invalide");
    if (input === "A") {
      moveForward();
      console.log("forward");
    } else if (input === "G") {
      turnLeft();
      console.log("left");
    } else if (input === "D") {
      turnRight();
      console.log("right");
    }
  }

  //LANCER LES COMMANDES AU CHARGEMENT DU COMPONENT
  let listecommande = commande.split("");

  useEffect(() => {
    listecommande.forEach((commande) => {
      giveCommand(commande);
    });
  }, []);

  //LOOP POUR GENERER LES COLONNES QUI CONSTITUENT LA CARTE
  let colonnes = [];
  for (let i = 0; i < largeur; i++) {
    colonnes.push(
      <Ligne
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
        <button onClick={() => giveCommand()}>Start</button>
      </div>
      <div style={{ display: "flex" }}>{colonnes}</div>
    </div>
  );
}

export default Carte;
