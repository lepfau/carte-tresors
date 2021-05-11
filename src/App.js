import "./App.css";
import Carte from "./Components/Carte";
import ListeAventurier from "./Components/ListeAventurier";

const aventurier1 = "A - Indiana - 1 - 1 - S - AADADA";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "baseline",
        }}
      >
        <div>
          <h1>Carte aux trésors</h1>
          <Carte />
        </div>
        <ListeAventurier aventurier1={aventurier1} />
      </div>
    </div>
  );
}

export default App;
