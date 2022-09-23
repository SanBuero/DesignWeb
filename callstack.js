function multiplicar (a, b){
  return = a * b;
}

function cuadrado(n){
  return multiplicar(n, n);
}

function imprimirElcuadrado(n){
  let resultado = cuadrado(n);
  // console.log(resultado);
  document.write(resultado);
}

function reventar(){
  return reventar();
}

imprimirElcuadrado(5);