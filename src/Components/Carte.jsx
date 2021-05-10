import React, { useState } from "react";
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
  const [commande, setCommande] = useState("AAA");

  let rows = [];
  for (let i = 0; i < largeur; i++) {
    rows.push(
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

  function moveForward() {
    if (orientation === "O") {
      setPositionX(positionX - 1);
    } else if (orientation === "N") {
      setPositionY(positionY - 1);
    } else if (orientation === "S") {
      setPositionY(positionY + 1);
    } else if (orientation === "E") {
      setPositionX(positionX + 1);
    }
  }

  function giveCommand(input) {
    for (let i = 0; i <= input.length - 1; i++) {
      let commandLetter = input[i];
      if (
        commandLetter !== "A" &&
        commandLetter !== "G" &&
        commandLetter !== "D"
      )
        console.log("Commande invalide");

      if (commandLetter === "A") {
        moveForward();
        console.log("forward");
      } else if (commandLetter === "G") {
        turnLeft();
        console.log("left");
      } else if (commandLetter === "D") {
        turnRight();
        console.log("right");
      }
    }
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
        <button onClick={() => giveCommand(commande)}>Start</button>
      </div>
      <div style={{ display: "flex" }}>{rows}</div>
    </div>
  );
}

export default Carte;
