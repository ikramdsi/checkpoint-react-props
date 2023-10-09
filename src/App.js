// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList"; // Importez le composant PlayersList

function App() {
  return (
    <div className="App">
      <h1>Liste des Joueurs</h1>
      <PlayersList /> {/* Affichez la liste des joueurs ici */}
    </div>
  );
}

export default App;
