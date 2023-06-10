let ganador = "";
switch (jugador1) {
    case "R":
      switch (jugador2) {
        case "R":
          return "Empate";
        case "P":
          return "P.R Papel tapa a roca, gana jugador2";
        case "T":
          return "T.R Roca rompe tijeras, gana jugador1";
      }
      break;
    case "P":
      switch (jugador2) {
        case "R":
          return "Gana jugador 1, papel tapa piedra";
        case "papel":
          return "Empate";
        case "tijera":
          return "Gana jugador 2, tijera corta papel";
      }
      break;
    case "T":
      switch (jugador2) {
        case "R":
          return "Gana jugador 2, Roca rompe tijeras";
        case "papel":
          return "Gana jugador 1, Tijeras corta papel";
        case "tijera":
          return "Empate";
      }
      break;

}
