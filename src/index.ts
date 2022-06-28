/* Construir un algoritmo que tenga un arreglo de dimensión deseada
por el usuario (dimensionArreglo) y llenarlo con los nombres que el usuario desee (nombreProductos)
el precio de cada producto individual y devolver todo esto más el costo total (sumaTotal)
hacer una validación para ver si entra el costo de compra total en el sorteo */

let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de productos: ")
);
let nombreProductos: string[] = new Array(dimensionArreglo);
let precioUnitario: number[] = new Array(dimensionArreglo);
let cantidadProductos: number[] = new Array(dimensionArreglo);
let sumaTotal: number = 0;
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  nombreProductos[indice] = prompt("ingrese el nombre de los productos");
  precioUnitario[indice] = Number(
    prompt(
      "Ingrese el precio de " + nombreProductos[indice] + " que desea comprar"
    )
  );
  cantidadProductos[indice] = Number(
    prompt(
      "Ingrese la cantidad de " + nombreProductos[indice] + " que desea comprar"
    )
  );

  sumaTotal += precioUnitario[indice] * cantidadProductos[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    nombreProductos[indice] +
      " x " +
      cantidadProductos[indice] +
      " = $ " +
      precioUnitario[indice] * cantidadProductos[indice]
  );
}

console.log("total: $" + sumaTotal);

function validacionSorteo(sumaTotal: number): string {
  let resultado: string = "";
  if (sumaTotal < 1000) {
    resultado = "usted no participa por nada";
  } else if (sumaTotal >= 1000 && sumaTotal < 2000) {
    resultado = "usted participa por un tv led";
  } else if (sumaTotal >= 2000 && sumaTotal < 3000) {
    resultado = "participa por una moto 0k";
  } else resultado = "Usted participa por un auto 0 Km";

  return resultado;
}
console.log(validacionSorteo(sumaTotal));
