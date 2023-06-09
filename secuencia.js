function generarSecuencia() {
    var secuencia = [];
    var numero = 1;
  
    for (var i = 1; i <= 11; i++) {
      secuencia.push(numero);
      numero += i;
    }
  
    return secuencia.join(' ');
  }
  
  console.log(generarSecuencia());
  