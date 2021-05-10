import React, { useState, useEffect } from "react";
import Ligne from "./Ligne";

function Carte() {
  const [largeur, setLargeur] = useState(3);
  const [hauteur, setHauteur] = useState(4);
  const [montagne, setMontagne] = useState([
    [2, 1],
    [0, 2],
  ]);

  const [tresor, setTresor] = useState([
    [0, 1, 1],
    [1, 1, 2],
  ]);

  const [aventurier, setAventurier] = useState({
    joueur: "A",
    nom: "Indiana",
    position: [1, 0],
    orientation: "S",
    commandes: "AADADA",
  });

  const [orientation, setOrientation] = useState("S");
  const [positionX, setPositionX] = useState(1);
  const [positionY, setPositionY] = useState(0);
  const [commande, setCommande] = useState("GA");

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

  let listecommande = commande.split("");

  useEffect(() => {
    listecommande.forEach((commande) => {
      giveCommand(commande);
    });
  }, []);

  let colonnes = [];
  for (let i = 0; i < largeur; i++) {
    colonnes.push(
      <Ligne
        key={i}
        hauteur={hauteur}
        x={i}
        montagne={montagne}
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
        <button onClick={() => giveCommand()}>Start</button>
      </div>
      <div style={{ display: "flex" }}>{colonnes}</div>
    </div>
  );
}

export default Carte;
