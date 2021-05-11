import "./App.css";
import Carte from "./Components/Carte";
import ListeAventurier from "./Components/ListeAventurier";

//INPUTS DU PROBLEME (RECUP DONNEES D'UN FICHIER INPUT SI TEMPS)

const carte = "C - 3 - 4";
const montagnes = ["M - 1 - 1", "M - 2 - 2"];
const tresors = ["T - 0 - 3 - 2", "T - 1 - 3 - 1"];
const aventuriers = ["A - Indiana - 1 - 1 - S - AADADA"];

function App() {
  return (
    <div className="App">
      <div className="main-home">
        <div>
          <h1>Carte aux trésors</h1>
          <Carte
            dimensions={carte}
            montagnes={montagnes}
            tresors={tresors}
            aventuriers={aventuriers}
          />
        </div>
        <ListeAventurier aventuriers={aventuriers} />
      </div>
    </div>
  );
}

export default App;
