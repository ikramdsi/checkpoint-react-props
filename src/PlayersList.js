// Dans le fichier où vous utilisez les joueurs (par exemple, PlayersList.js)
import React from "react";
import Player from "./Player";
import playersData from "./players";

import ronaldoImage from "./assets/cr.jpg"; // Importez l'image de Ronaldo
import messiImage from "./assets/MESSI.jpg"; // Importez l'image de Messi

const PlayersList = () => {
  return (
    <div>
      {playersData.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.name === "Cristiano Ronaldo" ? ronaldoImage : messiImage} // Utilisez l'image appropriée en fonction du nom du joueur
        />
      ))}
    </div>
  );
};

export default PlayersList;
