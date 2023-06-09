function determinarGanador(jugador1, jugador2) {
    let mensaje = "";
  
    switch (jugador1) {
      case "T":
        switch (jugador2) {
          case "T":
            mensaje = "Ambos jugadores eligieron T. Es un empate.";
            break;
          case "R":
            mensaje = "Tijeras son rompias por roca. Gana el jugador 2.";
            break;
          case "P":
            mensaje = "Papel es cubierto por tijeras. Gana el jugador 1.";
            break;
          default:
            mensaje = "Jugador 2 ha seleccionado una opción inválida.";
            break;
        }
        break;
      case "R":
        switch (jugador2) {
          case "T":
            mensaje = "Tijeras son rompias por roca. Gana el jugador 1.";
            break;
          case "R":
            mensaje = "Ambos jugadores eligieron R. Es un empate.";
            break;
          case "P":
            mensaje = "Roca es cubierta por papel. Gana el jugador 2.";
            break;
          default:
            mensaje = "Jugador 2 ha seleccionado una opción inválida.";
            break;
        }
        break;
      case "P":
        switch (jugador2) {
          case "T":
            mensaje = "Papel es cubierto por tijeras. Gana el jugador 2.";
            break;
          case "R":
            mensaje = "Roca es cubierta por papel. Gana el jugador 1.";
            break;
          case "P":
            mensaje = "Ambos jugadores eligieron P. Es un empate.";
            break;
          default:
            mensaje = "Jugador 2 ha seleccionado una opción inválida.";
            break;
        }
        break;
      default:
        mensaje = "Jugador 1 ha seleccionado una opción inválida.";
        break;
    }
  
    return mensaje;
  }
  
  const jugador1 = prompt("Jugador 1, elige T, R o P:");
  const jugador2 = prompt("Jugador 2, elige T, R o P:");
  
  const resultado = determinarGanador(jugador1, jugador2);
  console.log(resultado);
  