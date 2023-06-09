function esPalindromo(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    for (let i = 0; i < frase.length / 2; i++) {
      if (frase[i] !== frase[frase.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  function obtenerPrimeraLetra(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    return frase[0];
  }
  
  function obtenerLetraMitad(frase) {
    frase = frase.replace(/\s/g, "").toLowerCase();
    const mitad = Math.floor(frase.length / 2);
    return frase[mitad];
  }
  const frase = prompt("Ingrese una frase:");
  if (esPalindromo(frase)) {
    console.log("La frase es un palíndromo.");
  } else {
    console.log("La frase no es un palíndromo.");
  }
  console.log("Primera letra:", obtenerPrimeraLetra(frase));
  console.log("Letra ubicada en la mitad:", obtenerLetraMitad(frase));
  